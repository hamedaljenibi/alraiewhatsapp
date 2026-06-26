import { ChatbotNode } from "../types/chatbot.types";

export const gpsTopic: Record<string, ChatbotNode> = {

  /* ================= ROOT ================= */

  GPS_ROOT: {
    id: "GPS_ROOT",
    type: "menu",
    message: {
      en: "GPS Tracking — what would you like help with?",
      ar: "تتبع GPS — كيف يمكننا مساعدتك؟",
    },
    buttons: [
      { id: "GPS_SETUP", label: { en: "GPS setup", ar: "إعداد GPS" } },
      { id: "GPS_LIVE", label: { en: "Live tracking", ar: "التتبع المباشر" } },
      { id: "GPS_ISSUES", label: { en: "GPS issues", ar: "مشاكل GPS" } },
      { id: "GPS_HISTORY", label: { en: "GPS history", ar: "سجل GPS" } },
    ],
  },

  /* ================= 6.1 GPS SETUP ================= */

  GPS_SETUP: {
    id: "GPS_SETUP",
    type: "menu",
    message: {
      en: "GPS setup",
      ar: "إعداد GPS",
    },
    buttons: [
      { id: "GPS_ENABLE", label: { en: "Enable GPS", ar: "تفعيل GPS" } },
      { id: "GPS_ATTACH", label: { en: "Attach GPS device", ar: "ربط جهاز GPS" } },
      { id: "GPS_PAIR", label: { en: "Device pairing", ar: "إقران الجهاز" } },
    ],
  },

  GPS_ENABLE: {
    id: "GPS_ENABLE",
    type: "text",
    message: {
      en: "Open animal detail → Link GPS → Enter device serial number → Continue.",
      ar: "افتح تفاصيل الحيوان → ربط GPS → أدخل الرقم التسلسلي للجهاز → متابعة.",
    },
  },

  GPS_ATTACH: {
    id: "GPS_ATTACH",
    type: "text",
    message: {
      en: "Attach GPS using serial number and select animal to link.",
      ar: "قم بربط جهاز GPS باستخدام الرقم التسلسلي واختيار الحيوان.",
    },
  },

  GPS_PAIR: {
    id: "GPS_PAIR",
    type: "text",
    message: {
      en: "System validates GPS device and pairs it with selected animal.",
      ar: "يقوم النظام بالتحقق من الجهاز وربطه بالحيوان المختار.",
    },
  },

  /* ================= 6.2 LIVE TRACKING ================= */

  GPS_LIVE: {
    id: "GPS_LIVE",
    type: "menu",
    message: {
      en: "Live GPS tracking",
      ar: "التتبع المباشر GPS",
    },
    buttons: [
      { id: "GPS_LIVE_LOCATION", label: { en: "View live location", ar: "عرض الموقع المباشر" } },
      // { id: "GPS_MAP_VIEW", label: { en: "Tracking map view", ar: "عرض الخريطة" } },
    ],
  },

  GPS_LIVE_LOCATION: {
    id: "GPS_LIVE_LOCATION",
    type: "text",
    message: {
      en: "Open animal detail → Track animal → View live location.",
      ar: "افتح تفاصيل الحيوان → تتبع الحيوان → عرض الموقع المباشر.",
    },
  },

  GPS_MAP_VIEW: {
    id: "GPS_MAP_VIEW",
    type: "text",
    message: {
      en: "Tracking map shows animal movement.",
      ar: "تعرض الخريطة حركة الحيوان في الوقت الفعلي.",
    },
  },

  /* ================= 6.3 GPS ISSUES ================= */

  GPS_ISSUES: {
    id: "GPS_ISSUES",
    type: "menu",
    message: {
      en: "GPS issues",
      ar: "مشاكل GPS",
    },
    buttons: [
      { id: "GPS_NOT_UPDATING", label: { en: "GPS not updating", ar: "GPS لا يتم تحديثه" } },
      { id: "GPS_OFFLINE", label: { en: "Device offline", ar: "الجهاز غير متصل" } },
      // { id: "GPS_INACCURATE", label: { en: "Location inaccurate", ar: "الموقع غير دقيق" } },
    ],
  },

  GPS_NOT_UPDATING: {
    id: "GPS_NOT_UPDATING",
    type: "text",
    message: {
      en: "Check battery, network signal and interval settings.",
      ar: "تحقق من البطارية، إشارة الشبكة وإعدادات التحديث.",
    },
  },

  GPS_OFFLINE: {
    id: "GPS_OFFLINE",
    type: "text",
    message: {
      en: "Device may be powered off, idle or out of coverage.",
      ar: "قد يكون الجهاز مغلقًا أو خارج التغطية.",
    },
  },

  GPS_INACCURATE: {
    id: "GPS_INACCURATE",
    type: "text",
    message: {
      en: "Ensure device is placed outdoors for accurate GPS signal.",
      ar: "تأكد من وضع الجهاز في مكان مفتوح للحصول على دقة أفضل.",
    },
  },

  /* ================= 6.4 GPS HISTORY ================= */

  GPS_HISTORY: {
    id: "GPS_HISTORY",
    type: "menu",
    message: {
      en: "GPS movement history",
      ar: "سجل حركة GPS",
    },
    buttons: [
      { id: "GPS_HISTORY_VIEW", label: { en: "View movement history", ar: "عرض سجل الحركة" } },
    ],
  },

  GPS_HISTORY_VIEW: {
    id: "GPS_HISTORY_VIEW",
    type: "text",
    message: {
      en: "Open settings → Device Management → History to view movement timeline.",
      ar: "افتح الإعدادات → إدارة الأجهزة → السجل لعرض خط الزمن للحركة.",
    },
  },

};