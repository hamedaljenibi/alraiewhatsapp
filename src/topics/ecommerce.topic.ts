import { ChatbotNode } from '../types/chatbot.types';

export const ecommerceTopic: Record<string, ChatbotNode> = {

  /* ================= ROOT ================= */

  ECOMMERCE_ROOT: {
    id: "ECOMMERCE_ROOT",
    type: "menu",
    message: {
      en: "E-commerce — what do you need help with?",
      ar: "التجارة الإلكترونية — كيف يمكننا مساعدتك؟",
    },
    buttons: [
      { id: "ECOMMERCE_BROWSE", label: { en: "Browse products", ar: "تصفح المنتجات" } },
      { id: "ECOMMERCE_CART", label: { en: "Cart", ar: "السلة" } },
      { id: "ECOMMERCE_ORDERS", label: { en: "Orders", ar: "الطلبات" } },
      { id: "ECOMMERCE_PAYMENT", label: { en: "Payments", ar: "الدفع" } },
      { id: "ECOMMERCE_DELIVERY", label: { en: "Delivery", ar: "التوصيل" } },
      { id: "ECOMMERCE_PRODUCTS", label: { en: "Products", ar: "المنتجات" } },
    ],
  },

  /* ================= BROWSE ================= */

  ECOMMERCE_BROWSE: {
    id: "ECOMMERCE_BROWSE",
    type: "text",
    message: {
      en: "Go to GPS / Scanner section to browse products.",
      ar: "اذهب إلى قسم GPS / الماسح لتصفح المنتجات.",
    },
  },

  /* ================= CART ================= */

  ECOMMERCE_CART: {
    id: "ECOMMERCE_CART",
    type: "menu",
    message: {
      en: "Cart help",
      ar: "مساعدة السلة",
    },
    buttons: [
      { id: "CART_ADD", label: { en: "Add to cart", ar: "إضافة إلى السلة" } },
      { id: "CART_UPDATE", label: { en: "Update quantity", ar: "تحديث الكمية" } },
      { id: "CART_REMOVE", label: { en: "Remove item", ar: "إزالة عنصر" } },
      // { id: "CART_CLEAR", label: { en: "Clear cart", ar: "تفريغ السلة" } },
    ],
  },

  CART_ADD: {
    id: "CART_ADD",
    type: "text",
    message: {
      en: "Open product → tap place order → choose quantity.",
      ar: "افتح المنتج → اضغط على إنشاء طلب → اختر الكمية.",
    },
  },

  CART_UPDATE: {
    id: "CART_UPDATE",
    type: "text",
    message: {
      en: "Open order summary → change quantity → cart updates automatically.",
      ar: "افتح ملخص الطلب → غير الكمية → السلة تحدث تلقائيًا.",
    },
  },

  CART_REMOVE: {
    id: "CART_REMOVE",
    type: "text",
    message: {
      en: "Open order summary → remove item.",
      ar: "افتح ملخص الطلب → إزالة العنصر.",
    },
  },

  CART_CLEAR: {
    id: "CART_CLEAR",
    type: "text",
    message: {
      en: "You can clear entire cart using clear cart option.",
      ar: "يمكنك تفريغ السلة بالكامل باستخدام خيار تفريغ السلة.",
    },
  },

  /* ================= ORDERS ================= */

  ECOMMERCE_ORDERS: {
    id: "ECOMMERCE_ORDERS",
    type: "menu",
    message: {
      en: "Orders help",
      ar: "مساعدة الطلبات",
    },
    buttons: [
      { id: "ORDER_PLACE", label: { en: "Place order", ar: "إنشاء طلب" } },
      { id: "ORDER_TRACK", label: { en: "Track order", ar: "تتبع الطلب" } },
      { id: "ORDER_CANCEL", label: { en: "Cancel order", ar: "إلغاء الطلب" } },
      { id: "ORDER_REFUND", label: { en: "Refund / Return", ar: "استرداد / إرجاع" } },
      { id: "ORDER_REPLACEMENT", label: { en: "Replacement", ar: "استبدال" } },
      { id: "ORDER_STATUS", label: { en: "Order status meaning", ar: "معنى حالة الطلب" } },
    ],
  },

  ORDER_PLACE: {
    id: "ORDER_PLACE",
    type: "text",
    message: {
      en: "Go to product → Place order → Order Summary → choose address → Buy now.",
      ar: "اذهب إلى المنتج → إنشاء طلب → ملخص الطلب → اختر العنوان → شراء الآن.",
    },
  },

  ORDER_TRACK: {
    id: "ORDER_TRACK",
    type: "text",
    message: {
      en: "Go to orders → open order → view tracking details.",
      ar: "اذهب للطلبات → افتح الطلب → عرض التتبع.",
    },
  },

  ORDER_CANCEL: {
    id: "ORDER_CANCEL",
    type: "text",
    message: {
      en: `Order Cancellation:
  
  • If your order is NOT shipped and within 24 hours:
    → You can cancel directly from the app/website.
    → Your request will be reviewed by admin.
    → Once approved, your order will be cancelled and refund will be initiated (if paid).
  
  • If your order is shipped OR more than 24 hours have passed:
    → Cancellation is not available in the app/website.
    → Please contact support at info@alraie.net with your order details.
  
  Note: Only one cancellation/refund request can be active per order at a time.`,

      ar: `إلغاء الطلب:
  
  • إذا لم يتم شحن الطلب وخلال 24 ساعة:
    → يمكنك الإلغاء مباشرة من التطبيق.
    → سيتم مراجعة الطلب من قبل الإدارة.
    → بعد الموافقة، سيتم إلغاء الطلب وبدء الاسترداد (إذا تم الدفع).
  
  • إذا تم شحن الطلب أو مر أكثر من 24 ساعة:
    → لا يمكن الإلغاء من التطبيق.
    → يرجى التواصل عبر البريد الإلكتروني: info@alraie.net مع تفاصيل الطلب.
  
  ملاحظة: يمكن تقديم طلب إلغاء/استرداد واحد فقط لكل طلب في نفس الوقت.`,
    },
  },

  ORDER_REFUND: {
    id: "ORDER_REFUND",
    type: "menu",
    message: {
      en: `Refund, return & replacement options:
  
  Choose the scenario that matches your case. Rules depend on order status, time (24 hours), and product condition.`,
      ar: `خيارات الاسترداد والإرجاع والاستبدال:
  
  اختر الحالة المناسبة لك. تختلف القواعد حسب حالة الطلب، الوقت (24 ساعة)، وحالة المنتج.`,
    },
    buttons: [
      { id: "REFUND_CANCEL", label: { en: "Cancel & refund (before shipping)", ar: "إلغاء واسترداد (قبل الشحن)" } },
      { id: "REFUND_RETURN", label: { en: "Return item (after delivery)", ar: "إرجاع المنتج (بعد التسليم)" } },
      { id: "REFUND_DEFECTIVE", label: { en: "Defective / Replacement", ar: "منتج تالف / استبدال" } },
    ],
  },
  
  REFUND_CANCEL: {
    id: "REFUND_CANCEL",
    type: "text",
    message: {
      en: `Cancel & Refund (Before Shipping):
  
  • Allowed only if:
    → Order is NOT shipped
    → Within 24 hours of order creation
  
  • How it works:
    → Submit cancellation request from the app/website.
    → Admin will review your request
    → If approved:
       - Order is cancelled
       - Refund is initiated (if payment was successful)
  
  • Not allowed if:
    → Order is shipped
    → More than 24 hours passed
  
  In those cases, contact: info@alraie.net`,

      ar: `الإلغاء والاسترداد (قبل الشحن):
  
  • مسموح فقط إذا:
    → لم يتم شحن الطلب
    → خلال 24 ساعة من إنشاء الطلب
  
  • كيف يتم:
    → تقديم طلب الإلغاء من التطبيق
    → تقوم الإدارة بمراجعة الطلب
    → في حال الموافقة:
       - يتم إلغاء الطلب
       - يتم بدء الاسترداد (إذا تم الدفع)
  
  • غير مسموح إذا:
    → تم شحن الطلب
    → مر أكثر من 24 ساعة
  
  في هذه الحالة يرجى التواصل عبر: info@alraie.net`,
    },
  },
  
  REFUND_RETURN: {
    id: "REFUND_RETURN",
    type: "text",
    message: {
      en: `Return Item (After Delivery):
  
  • Allowed only if:
    → Order status is DELIVERED
    → Package is NOT opened
  
  • Process:
    → Contact support via email: info@alraie.net
    → Provide the following details:
       1. Order number
       2. Product name (GPS Device / Secure Belt)
       3. Mobile / Email
       4. Reason for return
       5. Whether package is opened or not
  
  • Admin will review your request
  • Refund will be processed after approval
  
  Note: Opened packages are not eligible for return.`,

      ar: `إرجاع المنتج (بعد التسليم):
  
  • مسموح فقط إذا:
    → حالة الطلب "تم التسليم"
    → العبوة غير مفتوحة
  
  • الخطوات:
    → التواصل عبر البريد الإلكتروني: info@alraie.net
    → إرسال التفاصيل التالية:
       1. رقم الطلب
       2. اسم المنتج (GPS Device / Secure Belt)
       3. رقم الجوال / البريد الإلكتروني
       4. سبب الإرجاع
       5. هل تم فتح العبوة أم لا
  
  • سيتم مراجعة الطلب من قبل الإدارة
  • يتم الاسترداد بعد الموافقة
  
  ملاحظة: لا يمكن إرجاع المنتجات المفتوحة.`,
    },
  },
  
  REFUND_DEFECTIVE: {
    id: "REFUND_DEFECTIVE",
    type: "text",
    message: {
      en: `Defective Product / Replacement:
  
  • Allowed only after delivery
  
  • Required:
    → Photo or video evidence of the issue
  
  • Process:
    → Contact support via email: info@alraie.net
    → Include:
       1. Order number
       2. Product name
       3. Mobile / Email
       4. Issue description
       5. Photo/Video proof
  
  • Admin will review your request
  
  • If approved:
    → Either refund will be processed OR replacement order will be created
  
  Note: Requests without evidence may be rejected.`,

      ar: `منتج تالف / استبدال:
  
  • متاح فقط بعد التسليم
  
  • المطلوب:
    → صورة أو فيديو يوضح المشكلة
  
  • الخطوات:
    → التواصل عبر البريد الإلكتروني: info@alraie.net
    → إرسال:
       1. رقم الطلب
       2. اسم المنتج
       3. رقم الجوال / البريد الإلكتروني
       4. وصف المشكلة
       5. صورة/فيديو كدليل
  
  • سيتم مراجعة الطلب من قبل الإدارة
  
  • في حال الموافقة:
    → يتم الاسترداد أو إنشاء طلب استبدال
  
  ملاحظة: الطلبات بدون دليل قد يتم رفضها.`,
    },
  },

  ORDER_STATUS: {
    id: "ORDER_STATUS",
    type: "text",
    message: {
      en: "Pending → Paid → Processing → Shipped → Delivered. Cancelled or Refunded are final states.",
      ar: "قيد الانتظار → مدفوع → قيد المعالجة → تم الشحن → تم التسليم. الإلغاء أو الاسترداد حالات نهائية.",
    },
  },

  ORDER_REPLACEMENT: {
    id: "ORDER_REPLACEMENT",
    type: "menu",
    message: {
      en: "Replacement request",
      ar: "طلب الاستبدال",
    },
    buttons: [
      {
        id: "REPLACEMENT_CONDITIONS",
        label: { en: "Conditions", ar: "الشروط" },
      },
      {
        id: "CONTACT_SUPPORT_REFUND",
        label: { en: "Send email request", ar: "إرسال طلب عبر البريد" },
      },
    ],
  },

  REPLACEMENT_CONDITIONS: {
    id: "REPLACEMENT_CONDITIONS",
    type: "text",
    message: {
      en: `Replacement is allowed only if:
  
  • Order is delivered  
  • Product is defective or damaged  
  • You provide photo/video evidence  
  
  ⚠️ Replacement cannot be requested from the app/website.
  You must contact support via email.`,

      ar: `الاستبدال مسموح فقط إذا:
  
  • تم تسليم الطلب  
  • المنتج تالف أو به عيب  
  • يجب تقديم صور أو فيديو كدليل  
  
  ⚠️ لا يمكن طلب الاستبدال من التطبيق.
  يجب التواصل عبر البريد.`,
    },
  },

  CONTACT_SUPPORT_REFUND: {
    id: "CONTACT_SUPPORT_REFUND",
    type: "text",
    message: {
      en: `To request refund / return / replacement, contact support via email:
  
  📧 info@alraie.net
  
  Please include:
  
  1. Order number  
  2. Product name (GPS Device / Secure Belt)  
  3. Your mobile number or email  
  4. Reason for request  
  5. Photo/video (required if defective)  
  6. Whether package is opened or not  
  
  Example:
  
  Subject: Refund Request - Order #12345
  
  Hello,  
  I would like to request a refund.
  
  Order ID: 12345  
  Product: GPS Device  
  Contact: user@email.com  
  Reason: Device not working  
  Package opened: Yes  
  Attachments: Images  
  
  Thank you.`,

      ar: `لطلب استرداد / إرجاع / استبدال، يرجى التواصل عبر البريد:
  
  📧 info@alraie.net
  
  يرجى تضمين:
  
  1. رقم الطلب  
  2. اسم المنتج (GPS Device / Secure Belt)  
  3. رقم الجوال أو البريد  
  4. سبب الطلب  
  5. صور أو فيديو (في حالة المنتج التالف)  
  6. هل العبوة مفتوحة أم لا  
  
  مثال:
  
  العنوان: طلب استرداد - الطلب #12345
  
  مرحبًا،  
  أرغب في طلب استرداد.
  
  رقم الطلب: 12345  
  المنتج: GPS Device  
  التواصل: user@email.com  
  السبب: المنتج لا يعمل  
  هل العبوة مفتوحة: نعم  
  المرفقات: صور  
  
  شكرًا.`,
    },
  },

  /* ================= PAYMENT ================= */

  ECOMMERCE_PAYMENT: {
    id: "ECOMMERCE_PAYMENT",
    type: "menu",
    message: {
      en: "Payment help",
      ar: "مساعدة الدفع",
    },
    buttons: [
      { id: "PAYMENT_METHODS", label: { en: "Payment methods", ar: "طرق الدفع" } },
      { id: "PAYMENT_FAILED", label: { en: "Payment failed", ar: "فشل الدفع" } },
      { id: "PAYMENT_REFUND", label: { en: "Refund", ar: "استرداد" } },
      { id: "PAYMENT_TIMEOUT", label: { en: "Payment timeout", ar: "انتهاء الدفع" } },
    ],
  },

  PAYMENT_METHODS: {
    id: "PAYMENT_METHODS",
    type: "text",
    message: {
      en: "We support card and Apple Pay payments.",
      ar: "ندعم الدفع بالبطاقة و Apple Pay.",
    },
  },

  PAYMENT_FAILED: {
    id: "PAYMENT_FAILED",
    type: "text",
    message: {
      en: "Retry payment from order screen.",
      ar: "أعد المحاولة من شاشة الطلب.",
    },
  },

  PAYMENT_REFUND: {
    id: "PAYMENT_REFUND",
    type: "text",
    message: {
      en: `Refund & Cancellation Policy:
  
  • If your order is NOT shipped and within 24 hours:
    → You can cancel directly from the app/website.
    → Admin will review and approve your request.
    → Refund will be processed automatically after approval.
  
  • If your order is shipped OR more than 24 hours have passed:
    → You must contact support via email: info@alraie.net
    → Admin will review your request and process refund if approved.
  
  Email format (required details):
  1. Order number
  2. Product name (GPS Device / Secure Belt)
  3. Mobile number / Email
  4. Reason for refund
  5. Photo/Video (required if item is defective)
  6. Whether the package is opened or not`,

      ar: `سياسة الاسترداد والإلغاء:
  
  • إذا لم يتم شحن الطلب وخلال 24 ساعة:
    → يمكنك الإلغاء مباشرة من التطبيق.
    → سيتم مراجعة الطلب من قبل الإدارة.
    → يتم استرداد المبلغ بعد الموافقة.
  
  • إذا تم شحن الطلب أو مر أكثر من 24 ساعة:
    → يجب التواصل عبر البريد الإلكتروني: info@alraie.net
    → ستقوم الإدارة بمراجعة الطلب واتخاذ القرار.
  
  صيغة البريد الإلكتروني (مطلوب):
  1. رقم الطلب
  2. اسم المنتج (GPS Device / Secure Belt)
  3. رقم الجوال / البريد الإلكتروني
  4. سبب الاسترداد
  5. صورة/فيديو (في حال وجود عطل)
  6. هل تم فتح العبوة أم لا`,
    },
  },

  PAYMENT_TIMEOUT: {
    id: "PAYMENT_TIMEOUT",
    type: "text",
    message: {
      en: "Orders expire if payment is not completed within 15 minutes.",
      ar: "ينتهي الطلب إذا لم يتم الدفع خلال 15 دقيقة.",
    },
  },

  /* ================= DELIVERY ================= */

  ECOMMERCE_DELIVERY: {
    id: "ECOMMERCE_DELIVERY",
    type: "menu",
    message: {
      en: "Delivery help",
      ar: "مساعدة التوصيل",
    },
    buttons: [
      { id: "DELIVERY_TIME", label: { en: "Delivery time", ar: "وقت التوصيل" } },
      { id: "DELIVERY_CHARGES", label: { en: "Shipping charges", ar: "رسوم الشحن" } },
      { id: "DELIVERY_ADDRESS", label: { en: "Change address", ar: "تغيير العنوان" } },
      { id: "DELIVERY_TRACK", label: { en: "Tracking", ar: "التتبع" } },
    ],
  },

  DELIVERY_TIME: {
    id: "DELIVERY_TIME",
    type: "text",
    message: {
      en: "Delivery time depends on your location.",
      ar: "وقت التوصيل يعتمد على موقعك.",
    },
  },

  DELIVERY_CHARGES: {
    id: "DELIVERY_CHARGES",
    type: "text",
    message: {
      en: "Shipping fee calculated based on delivery zone.",
      ar: "رسوم الشحن تحسب حسب منطقة التوصيل.",
    },
  },

  DELIVERY_ADDRESS: {
    id: "DELIVERY_ADDRESS",
    type: "text",
    message: {
      en: "Address can be selected during checkout.",
      ar: "يمكن اختيار العنوان أثناء الدفع.",
    },
  },

  DELIVERY_TRACK: {
    id: "DELIVERY_TRACK",
    type: "text",
    message: {
      en: "Tracking available once order shipped.",
      ar: "يتوفر التتبع بعد شحن الطلب.",
    },
  },

  /* ================= PRODUCTS ================= */

  ECOMMERCE_PRODUCTS: {
    id: "ECOMMERCE_PRODUCTS",
    type: "menu",
    message: {
      en: "Products help",
      ar: "مساعدة المنتجات",
    },
    buttons: [
      { id: "PRODUCT_OUT_OF_STOCK", label: { en: "Out of stock", ar: "نفذ المخزون" } },
      { id: "PRODUCT_INACTIVE", label: { en: "Inactive product", ar: "منتج غير نشط" } },
      { id: "PRODUCT_CURRENCY", label: { en: "Currency mismatch", ar: "اختلاف العملة" } },
      { id: "PRODUCT_RECOMMENDED", label: { en: "Recommended products", ar: "منتجات مقترحة" } },
    ],
  },

  PRODUCT_OUT_OF_STOCK: {
    id: "PRODUCT_OUT_OF_STOCK",
    type: "text",
    message: {
      en: "Product is temporarily unavailable.",
      ar: "المنتج غير متوفر مؤقتًا.",
    },
  },

  PRODUCT_INACTIVE: {
    id: "PRODUCT_INACTIVE",
    type: "text",
    message: {
      en: "Product is not available anymore.",
      ar: "المنتج غير متوفر حاليًا.",
    },
  },

  PRODUCT_CURRENCY: {
    id: "PRODUCT_CURRENCY",
    type: "text",
    message: {
      en: "Cart supports single currency only.",
      ar: "السلة تدعم عملة واحدة فقط.",
    },
  },

  PRODUCT_RECOMMENDED: {
    id: "PRODUCT_RECOMMENDED",
    type: "text",
    message: {
      en: "Recommended products appear below product page.",
      ar: "المنتجات المقترحة تظهر أسفل صفحة المنتج.",
    },
  },

};