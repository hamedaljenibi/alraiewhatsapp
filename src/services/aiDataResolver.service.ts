import AnimalModel from "../models/animal.model";
import UserModel from "../models/user";
import Order from "../models/order.model";
import GpsDevice from "../models/gps.model";
import { extractAnimalId, extractHashValue } from "../utils/extractAnimalId";
import { AIIntentResponse } from "./aiIntent.service";
import mongoose from "mongoose";

const t = (lang: "en" | "ar", en: string, ar: string) => {
  return lang === "ar" ? ar : en;
};

export const resolveAIIntent = async (
  userId: string,
  intentData: AIIntentResponse,
  subscription: any,
  language: "en" | "ar" = "en"
) => {
  const actor = await UserModel.findById(userId);
  if (!actor) throw new Error("Unauthorized");

  let ownerId: mongoose.Types.ObjectId;

  if (actor.role === "owner") {
    ownerId = actor._id;
  } else if (actor.role === "assistant") {
    if (!actor.ownerId) throw new Error("Owner not assigned");
    ownerId = actor.ownerId;
  } else {
    throw new Error("Forbidden");
  }

  switch (intentData.intent) {
    case "GET_TOTAL_ANIMALS": {
      const count = await AnimalModel.countDocuments({ ownerId });
      return t(
        language,
        `You have ${count} animals.`,
        `لديك ${count} حيوان`
      );
    }

    case "GET_MALE_ANIMALS": {
      const count = await AnimalModel.countDocuments({
        ownerId,
        gender: "male",
      });
      return t(
        language,
        `You have ${count} male animals.`,
        `لديك ${count} حيوان ذكر`
      );
    }

    case "GET_FEMALE_ANIMALS": {
      const count = await AnimalModel.countDocuments({
        ownerId,
        gender: "female",
      });
      return t(
        language,
        `You have ${count} female animals.`,
        `لديك ${count} حيوان أنثى`
      );
    }

    case "GET_ANIMAL_STATUS": {
      const status = intentData.meta?.status;

      if (!status) {
        return t(
          language,
          "Please specify status.",
          "يرجى تحديد الحالة"
        );
      }

      const count = await AnimalModel.countDocuments({
        ownerId,
        animalStatus: status,
      });

      return t(
        language,
        `You have ${count} ${status} animals.`,
        `لديك ${count} حيوان بحالة ${status}`
      );
    }

    case "GET_ANIMAL_DETAILS": {
      const animalIdText = extractAnimalId(intentData.originalMessage || "");

      if (!animalIdText) {
        return t(
          language,
          "Please provide animal ID starting with # (e.g. #AN-12345 or #123456).",
          "يرجى إدخال معرف الحيوان يبدأ بـ # مثل #AN-12345"
        );
      }

      const isPrefixed = /^[A-Z]{1,5}-[A-Z0-9]+$/i.test(animalIdText);
      const isNumeric = /^\d{3,}$/.test(animalIdText);

      if ((!isPrefixed && !isNumeric) || animalIdText.length > 30) {
        return t(
          language,
          "Invalid animal ID format.",
          "تنسيق معرف الحيوان غير صالح"
        );
      }

      const animal = await AnimalModel.findOne({
        ownerId,
        $or: [
          { uniqueAnimalId: animalIdText },
          { tagId: animalIdText },
          { microChipId1: animalIdText },
          { microChipId2: animalIdText },
          { microChipId3: animalIdText }
        ]
      }).lean();

      if (!animal) {
        return t(
          language,
          `No animal found with ID ${animalIdText}.`,
          `لم يتم العثور على حيوان بالمعرف ${animalIdText}`
        );
      }

      return t(
        language,
        `Animal Details:
        ID: ${animal.uniqueAnimalId}
        Name: ${animal.name || "-"}
        Gender: ${animal.gender}
        Status: ${animal.animalStatus}
        Type: ${animal.typeNameEn || "-"}`,
        `تفاصيل الحيوان:
        المعرف: ${animal.uniqueAnimalId}
        الاسم: ${animal.name || "-"}
        الجنس: ${animal.gender}
        الحالة: ${animal.animalStatus}
        النوع: ${animal.typeNameEn || "-"}`
      );
    }

    case "GET_SUBSCRIPTION": {
      if (!subscription) {
        return t(
          language,
          "You do not have an active subscription.",
          "لا يوجد لديك اشتراك نشط"
        );
      }


      return t(
        language,
        `Subscription Details:
        Plan: ${subscription.planKey}
        Cycle: ${subscription.cycle}
        Expires At: ${new Date(subscription.expiresAt).toDateString()}`,
        `تفاصيل الاشتراك:
        الخطة: ${subscription.planKey}
        الدورة: ${subscription.cycle}
        تاريخ الانتهاء: ${new Date(subscription.expiresAt).toDateString()}`
      );
    }

    case "GET_REMAINING_QUOTA": {
      if (!subscription) {
        return t(
          language,
          "You can't add any animal as you dont have any subscription",
          "لا يمكنك إضافة حيوانات لعدم وجود اشتراك"
        );
      }

      return t(
        language,
        `Quota Details:
        
        Animals:
        Used: ${subscription.usage.animals}
        Remaining: ${subscription.remaining.animals}
        
        Assistants:
        Used: ${subscription.usage.assistants}
        Remaining: ${subscription.remaining.assistants}`,
        `تفاصيل الحصة:
        
        الحيوانات:
        المستخدم: ${subscription.usage.animals}
        المتبقي: ${subscription.remaining.animals}
        
        المساعدين:
        المستخدم: ${subscription.usage.assistants}
        المتبقي: ${subscription.remaining.assistants}`
      );
    }

    case "GET_LATEST_ORDER": {
      const order = await Order.findOne({ userId: ownerId })
        .sort({ createdAt: -1 })
        .lean();

      if (!order) {
        return t(
          language,
          "You have no orders yet.",
          "لا يوجد لديك أي طلبات حتى الآن"
        );
      }

      return t(
        language,
        `Latest Order:
      Order ID: ${order._id}
      Status: ${order.status}
      Payment: ${order.paymentStatus}
      Total: ${order.total} ${order.currency}
      Date: ${new Date(order.createdAt).toDateString()}`,
        `آخر طلب:
      رقم الطلب: ${order._id}
      الحالة: ${order.status}
      الدفع: ${order.paymentStatus}
      الإجمالي: ${order.total} ${order.currency}
      التاريخ: ${new Date(order.createdAt).toDateString()}`
      );
    }

    case "TRACK_LATEST_ORDER": {
      const order = await Order.findOne({ userId: ownerId })
        .sort({ createdAt: -1 })
        .lean();

      if (!order) {
        return t(
          language,
          "You have no orders to track.",
          "لا يوجد لديك طلبات لتتبعها"
        );
      }

      if (!order.shipment) {
        return t(
          language,
          `Order ${order._id} is currently "${order.status}" and not shipped yet.`,
          `الطلب ${order._id} حالته "${order.status}" ولم يتم شحنه بعد`
        );
      }

      return t(
        language,
        `Tracking Details:
      Order ID: ${order._id}
      Carrier: ${order.shipment.carrierName}
      Tracking ID: ${order.shipment.trackingId}
      Status: ${order.status}
      Shipped At: ${new Date(order.shipment.shippedAt).toDateString()}
      Expected Delivery: ${order.shipment.expectedDeliveryDate
          ? new Date(order.shipment.expectedDeliveryDate).toDateString()
          : "-"
        }
      Tracking Link: ${order.shipment.trackingUrl || "-"}`,
        `تفاصيل التتبع:
      رقم الطلب: ${order._id}
      شركة الشحن: ${order.shipment.carrierName}
      رقم التتبع: ${order.shipment.trackingId}
      الحالة: ${order.status}
      تاريخ الشحن: ${new Date(order.shipment.shippedAt).toDateString()}
      تاريخ التسليم المتوقع: ${order.shipment.expectedDeliveryDate
          ? new Date(order.shipment.expectedDeliveryDate).toDateString()
          : "-"
        }
      رابط التتبع: ${order.shipment.trackingUrl || "-"}`
      );
    }

    case "GET_ORDER_BY_ID": {
      const orderIdText = extractAnimalId(intentData.originalMessage || "");

      if (!orderIdText) {
        return t(
          language,
          "Please provide order ID starting with # (e.g. #65f1a2...).",
          "يرجى إدخال رقم الطلب يبدأ بـ #"
        );
      }

      // ✅ Validate Mongo ObjectId
      if (!mongoose.Types.ObjectId.isValid(orderIdText)) {
        return t(
          language,
          "Invalid order ID format.",
          "تنسيق رقم الطلب غير صالح"
        );
      }

      const order = await Order.findOne({
        _id: orderIdText,
        userId: ownerId, // 🔐 SECURITY: only own order
      }).lean();

      if (!order) {
        return t(
          language,
          `No order found with ID ${orderIdText}.`,
          `لم يتم العثور على طلب بهذا الرقم ${orderIdText}`
        );
      }

      const shipment = order.shipment;

      return t(
        language,
        `Order Details:
      Order ID: ${order._id}
      Status: ${order.status}
      Payment: ${order.paymentStatus}
      Total: ${order.total} ${order.currency}
      Items: ${order.items.length}
      Date: ${new Date(order.createdAt).toDateString()}
      Tracking: ${shipment?.trackingId || "Not available"}
      Carrier: ${shipment?.carrierName || "-"}`,
        `تفاصيل الطلب:
      رقم الطلب: ${order._id}
      الحالة: ${order.status}
      الدفع: ${order.paymentStatus}
      الإجمالي: ${order.total} ${order.currency}
      عدد المنتجات: ${order.items.length}
      التاريخ: ${new Date(order.createdAt).toDateString()}
      رقم التتبع: ${shipment?.trackingId || "غير متوفر"}
      شركة الشحن: ${shipment?.carrierName || "-"}`
      );
    }

    case "GET_ANIMAL_LOCATION": {
      const value = extractHashValue(intentData.originalMessage || "");
    
      if (!value) {
        return t(
          language,
          "Please provide animal ID starting with #.",
          "يرجى إدخال معرف الحيوان يبدأ بـ #"
        );
      }
    
      const animal = await AnimalModel.findOne({
        ownerId,
        uniqueAnimalId: value,
      }).populate("gpsDeviceId");
    
      if (!animal) {
        return t(
          language,
          `No animal found with ID ${value}.`,
          `لم يتم العثور على الحيوان ${value}`
        );
      }
    
      if (!animal.gpsDeviceId) {
        return t(
          language,
          `Animal ${value} has no GPS device linked.`,
          `الحيوان ${value} لا يحتوي على جهاز GPS`
        );
      }
    
      const gps: any = animal.gpsDeviceId;
    
      if (!gps.lastKnownLatitude || !gps.lastKnownLongitude) {
        return t(
          language,
          `No location data available yet.`,
          `لا توجد بيانات موقع حالياً`
        );
      }
    
      return t(
        language,
        `📍 Animal Location:
    ID: ${animal.uniqueAnimalId}
    Latitude: ${gps.lastKnownLatitude}
    Longitude: ${gps.lastKnownLongitude}
    Last Update: ${gps.lastFetchAt ? new Date(gps.lastFetchAt).toLocaleString() : "-"}`,
        `📍 موقع الحيوان:
    المعرف: ${animal.uniqueAnimalId}
    خط العرض: ${gps.lastKnownLatitude}
    خط الطول: ${gps.lastKnownLongitude}
    آخر تحديث: ${gps.lastFetchAt ? new Date(gps.lastFetchAt).toLocaleString() : "-"}`
      );
    }

    case "GET_GPS_DETAILS": {
      const value = extractHashValue(intentData.originalMessage || "");
    
      if (!value) {
        return t(
          language,
          "Please provide GPS serial number or animal ID starting with #.",
          "يرجى إدخال رقم GPS أو معرف الحيوان يبدأ بـ #"
        );
      }
    
      let gps: any = null;
    
      gps = await GpsDevice.findOne({
        serialNumber: value,
        ownerId,
      }).lean();
    
      if (!gps) {
        const animal = await AnimalModel.findOne({
          ownerId,
          uniqueAnimalId: value,
        });
    
        if (!animal || !animal.gpsDeviceId) {
          return t(
            language,
            `No GPS found for ${value}.`,
            `لم يتم العثور على GPS لـ ${value}`
          );
        }
    
        gps = await GpsDevice.findById(animal.gpsDeviceId).lean();
      }
    
      if (!gps) {
        return t(
          language,
          `GPS not found.`,
          `لم يتم العثور على جهاز GPS`
        );
      }
    
      return t(
        language,
        `📡 GPS Details:
    Serial: ${gps.serialNumber}
    Linked: ${gps.isLinked ? "Yes" : "No"}
    Last Location: ${gps.lastKnownLatitude || "-"}, ${gps.lastKnownLongitude || "-"}
    Battery: ${gps.dataHash?.battery || "-"}
    Last Fetch: ${gps.lastFetchAt ? new Date(gps.lastFetchAt).toLocaleString() : "-"}`,
        `📡 تفاصيل GPS:
    الرقم التسلسلي: ${gps.serialNumber}
    مرتبط: ${gps.isLinked ? "نعم" : "لا"}
    آخر موقع: ${gps.lastKnownLatitude || "-"}, ${gps.lastKnownLongitude || "-"}
    البطارية: ${gps.dataHash?.battery || "-"}
    آخر تحديث: ${gps.lastFetchAt ? new Date(gps.lastFetchAt).toLocaleString() : "-"}`
      );
    }

    case "RESTRICTED":
      return t(
        language,
        "Sorry, I cannot help with that request.",
        "عذرًا، لا يمكنني المساعدة في هذا الطلب"
      );

    default:
      return null;
  }
};