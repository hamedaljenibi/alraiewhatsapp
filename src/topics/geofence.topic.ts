import { ChatbotNode } from "../types/chatbot.types";

export const geofenceTopic: Record<string, ChatbotNode> = {

  /* ================= ROOT ================= */

  GEOFENCE_ROOT: {
    id: "GEOFENCE_ROOT",
    type: "menu",
    message: {
      en: "Geofence — what would you like help with?",
      ar: "السياج الجغرافي — كيف يمكننا مساعدتك؟",
    },
    buttons: [
      { id: "GEOFENCE_CREATE", label: { en: "Create geofence", ar: "إنشاء سياج جغرافي" } },
      { id: "GEOFENCE_EDIT", label: { en: "Edit geofence", ar: "تعديل السياج الجغرافي" } },
      { id: "GEOFENCE_ALERTS", label: { en: "Geofence alerts", ar: "تنبيهات السياج الجغرافي" } },
      { id: "GEOFENCE_ASSIGN", label: { en: "Assign animal", ar: "تعيين حيوان" } },
    ],
  },

  /* ================= CREATE ================= */

  GEOFENCE_CREATE: {
    id: "GEOFENCE_CREATE",
    type: "menu",
    message: {
      en: "Create geofence",
      ar: "إنشاء سياج جغرافي",
    },
    buttons: [
      { id: "GEOFENCE_CREATE_HOW", label: { en: "How to create", ar: "كيفية الإنشاء" } },
      { id: "GEOFENCE_SET_RADIUS", label: { en: "Set radius", ar: "تحديد نصف القطر" } },
      { id: "GEOFENCE_NAME", label: { en: "Name geofence", ar: "تسمية السياج" } },
      { id: "GEOFENCE_ADD_ANIMALS", label: { en: "Add animals", ar: "إضافة الحيوانات" } },
    ],
  },

  GEOFENCE_CREATE_HOW: {
    id: "GEOFENCE_CREATE_HOW",
    type: "text",
    message: {
      en: "Go to Tracking → Track your animal's location → Geo-Area Range → Add geofence area → Select location → Set radius → Enter area name → Add animals → save.",
      ar: "اذهب إلى التتبع → تتبع موقع حيوانك → نطاق المنطقة الجغرافية → إضافة منطقة سياج جغرافي → اختر الموقع → حدد نصف القطر → أدخل اسم المنطقة → أضف الحيوانات → حفظ.",
    },
  },

  GEOFENCE_SET_RADIUS: {
    id: "GEOFENCE_SET_RADIUS",
    type: "text",
    message: {
      en: "You can define geofence radius in kilometers around selected center.",
      ar: "يمكنك تحديد نصف القطر بالكيلومترات حول مركز السياج.",
    },
  },

  GEOFENCE_NAME: {
    id: "GEOFENCE_NAME",
    type: "text",
    message: {
      en: "Enter a name to identify your geofence easily.",
      ar: "أدخل اسمًا لتمييز السياج الجغرافي بسهولة.",
    },
  },

  GEOFENCE_ADD_ANIMALS: {
    id: "GEOFENCE_ADD_ANIMALS",
    type: "text",
    message: {
      en: "After creating geofence you can assign animals to monitor movement.",
      ar: "بعد إنشاء السياج يمكنك تعيين الحيوانات لمراقبة الحركة.",
    },
  },

  /* ================= EDIT ================= */

  GEOFENCE_EDIT: {
    id: "GEOFENCE_EDIT",
    type: "menu",
    message: {
      en: "Edit geofence",
      ar: "تعديل السياج الجغرافي",
    },
    buttons: [
      { id: "GEOFENCE_EDIT_BOUNDARY", label: { en: "Edit boundary", ar: "تعديل الحدود" } },
      // { id: "GEOFENCE_RENAME", label: { en: "Rename geofence", ar: "إعادة تسمية" } },
      { id: "GEOFENCE_DELETE", label: { en: "Delete geofence", ar: "حذف السياج" } },
    ],
  },

  GEOFENCE_EDIT_BOUNDARY: {
    id: "GEOFENCE_EDIT_BOUNDARY",
    type: "text",
    message: {
      en: "Go to Tracking → Track your animal's location → Geo-Area Range → Open geofence details → Update → Change center or radius → Save.",
      ar: "اذهب إلى التتبع → تتبع موقع حيوانك → نطاق المنطقة الجغرافية → افتح تفاصيل السياج → تحديث → تغيير المركز أو نصف القطر → حفظ.",
    },
  },

  GEOFENCE_RENAME: {
    id: "GEOFENCE_RENAME",
    type: "text",
    message: {
      en: "Edit geofence name from update geofence screen and save.",
      ar: "يمكنك تعديل اسم السياج من شاشة تحديث السياج وحفظ التغييرات.",
    },
  },

  GEOFENCE_DELETE: {
    id: "GEOFENCE_DELETE",
    type: "text",
    message: {
      en: "Go to Tracking → Track your animal's location → Geo-Area Range → One menu of geofence → Delete",
      ar: "اذهب إلى التتبع → تتبع موقع حيوانك → نطاق المنطقة الجغرافية → قائمة السياج → حذف",
    },
  },

  /* ================= ALERTS ================= */

  GEOFENCE_ALERTS: {
    id: "GEOFENCE_ALERTS",
    type: "menu",
    message: {
      en: "Geofence alerts",
      ar: "تنبيهات السياج الجغرافي",
    },
    buttons: [
      { id: "GEOFENCE_ALERT_OUT", label: { en: "Animal left geofence", ar: "الحيوان غادر السياج" } },
      { id: "GEOFENCE_ALERT_IN", label: { en: "Animal entered geofence", ar: "الحيوان دخل السياج" } },
    ],
  },

  GEOFENCE_ALERT_OUT: {
    id: "GEOFENCE_ALERT_OUT",
    type: "text",
    message: {
      en: "You will receive alert when animal moves outside geofence range.",
      ar: "ستتلقى تنبيه عند خروج الحيوان من نطاق السياج.",
    },
  },

  GEOFENCE_ALERT_IN: {
    id: "GEOFENCE_ALERT_IN",
    type: "text",
    message: {
      en: "You will receive alert when animal returns to safe zone.",
      ar: "ستتلقى تنبيه عند عودة الحيوان إلى المنطقة الآمنة.",
    },
  },

  /* ================= ASSIGN ================= */

  GEOFENCE_ASSIGN: {
    id: "GEOFENCE_ASSIGN",
    type: "menu",
    message: {
      en: "Assign animals to geofence",
      ar: "تعيين الحيوانات للسياج",
    },
    buttons: [
      { id: "GEOFENCE_ASSIGN_ANIMAL", label: { en: "Assign animal", ar: "تعيين حيوان" } },
      { id: "GEOFENCE_REMOVE_ANIMAL", label: { en: "Remove animal", ar: "إزالة حيوان" } },
      // { id: "GEOFENCE_BULK_ASSIGN", label: { en: "Bulk assign", ar: "تعيين جماعي" } },
    ],
  },

  GEOFENCE_ASSIGN_ANIMAL: {
    id: "GEOFENCE_ASSIGN_ANIMAL",
    type: "text",
    message: {
      en: "Go to Tracking → Track your animal's location → Geo-Area Range → Open geofence details → Update → Select animals → save.",
      ar: "اذهب إلى التتبع → تتبع موقع حيوانك → نطاق المنطقة الجغرافية → افتح تفاصيل السياج → تحديث → اختر الحيوانات → حفظ.",
    },
  },

  GEOFENCE_REMOVE_ANIMAL: {
    id: "GEOFENCE_REMOVE_ANIMAL",
    type: "text",
    message: {
      en: "Go to Tracking → Track your animal's location → Geo-Area Range → Open geofence details → Update → Remove selected animal -> Save.",
      ar: "اذهب إلى التتبع → تتبع موقع حيوانك → نطاق المنطقة الجغرافية → افتح تفاصيل السياج → تحديث → إزالة الحيوان المحدد → حفظ.",
    },
  },

  GEOFENCE_BULK_ASSIGN: {
    id: "GEOFENCE_BULK_ASSIGN",
    type: "text",
    message: {
      en: "You can assign multiple animals at once using bulk selection.",
      ar: "يمكنك تعيين عدة حيوانات مرة واحدة باستخدام التحديد الجماعي.",
    },
  },

};