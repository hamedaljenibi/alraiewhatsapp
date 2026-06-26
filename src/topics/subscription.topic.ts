import { ChatbotNode } from "../types/chatbot.types";

export const subscriptionTopic: Record<string, ChatbotNode> = {

  /* =======================================================
     ROOT
  ======================================================= */

  SUBSCRIPTION_ROOT: {
    id: "SUBSCRIPTION_ROOT",
    type: "menu",
    message: {
      en: "Subscriptions — what would you like help with?",
      ar: "الاشتراكات — كيف يمكننا مساعدتك؟",
    },
    buttons: [
      {
        id: "SUBSCRIPTION_PLANS",
        label: { en: "Plans", ar: "الخطط" },
      },
      {
        id: "SUBSCRIPTION_UPGRADE",
        label: { en: "Upgrade plan", ar: "ترقية الخطة" },
      },
      {
        id: "SUBSCRIPTION_DOWNGRADE",
        label: { en: "Downgrade plan", ar: "تخفيض الخطة" },
      },
      {
        id: "SUBSCRIPTION_BILLING",
        label: { en: "Billing & renewal", ar: "الفوترة والتجديد" },
      },
      {
        id: "SUBSCRIPTION_CANCEL",
        label: { en: "Cancel subscription", ar: "إلغاء الاشتراك" },
      },
      {
        id: "SUBSCRIPTION_HISTORY",
        label: { en: "Subscription history", ar: "سجل الاشتراكات" },
      },
    ],
  },

  /* =======================================================
     PLANS (API)
  ======================================================= */

  SUBSCRIPTION_PLANS: {
    id: "SUBSCRIPTION_PLANS",
    type: "text",
    message: {
      en: `Available subscription plans:

Free Trial
• New users receive a free trial of basic plan for 15 days
• Full access to app features
• Limited duration trial

Basic Plan
• Up to 5 animals
• 1 assistant account
• Full app access
• 24/7 support

Standard Plan
• Up to 100 animals
• Up to 2 assistants
• Full app access
• 24/7 support

Professional Plan
• Up to 1,500 animals
• Up to 3 assistants
• Full app access
• 24/7 support

Enterprise Plan
• Unlimited animals
• Unlimited assistants
• Full app access
• Priority support
• Assigned manually by admin
• Contact admin to activate Enterprise plan
`,
      ar: `خطط الاشتراك المتاحة:

النسخة التجريبية
• يحصل المستخدمون الجدد على فترة تجريبية مجانية للخطة الأساسية لمدة 15 يومًا
• وصول كامل لجميع الميزات
• مدة محدودة

الباقة الأساسية
• حتى 5 حيوانات
• حساب مساعد واحد
• وصول كامل للتطبيق
• دعم 24/7

الباقة القياسية
• حتى 100 حيوان
• حتى 2 مساعدين
• وصول كامل للتطبيق
• دعم 24/7

الباقة الاحترافية
• حتى 1500 حيوان
• حتى 3 مساعدين
• وصول كامل للتطبيق
• دعم 24/7

باقة المؤسسة
• عدد غير محدود من الحيوانات
• عدد غير محدود من المساعدين
• وصول كامل للتطبيق
• دعم مميز
• يتم تعيينها من قبل الإدارة فقط
• يرجى التواصل مع الإدارة لتفعيل الباقة
`,
    },
  },

  /* =======================================================
     UPGRADE
  ======================================================= */

  SUBSCRIPTION_UPGRADE: {
    id: "SUBSCRIPTION_UPGRADE",
    type: "menu",
    message: {
      en: "Upgrade subscription",
      ar: "ترقية الاشتراك",
    },
    buttons: [
      {
        id: "SUBSCRIPTION_UPGRADE_HOW",
        label: { en: "How to upgrade", ar: "كيفية الترقية" },
      },
    ],
  },

  SUBSCRIPTION_UPGRADE_HOW: {
    id: "SUBSCRIPTION_UPGRADE_HOW",
    type: "text",
    message: {
      en: "Go to Subscription → Plans → choose plan → tap upgrade → confirm payment.",
      ar: "اذهب إلى الاشتراك → الخطط → اختر الخطة → ترقية → تأكيد الدفع.",
    },
  },

  /* =======================================================
   DOWNGRADE
======================================================= */

SUBSCRIPTION_DOWNGRADE: {
    id: "SUBSCRIPTION_DOWNGRADE",
    type: "menu",
    message: {
      en: "Downgrade subscription",
      ar: "تخفيض الاشتراك",
    },
    buttons: [
      {
        id: "SUBSCRIPTION_DOWNGRADE_HOW",
        label: { en: "How to downgrade", ar: "كيفية التخفيض" },
      },
      {
        id: "SUBSCRIPTION_DOWNGRADE_WHEN",
        label: { en: "When downgrade applies", ar: "متى يتم التخفيض" },
      },
      {
        id: "SUBSCRIPTION_DOWNGRADE_LIMIT",
        label: { en: "Feature limitations", ar: "قيود بعد التخفيض" },
      },
    ],
  },
  
  SUBSCRIPTION_DOWNGRADE_HOW: {
    id: "SUBSCRIPTION_DOWNGRADE_HOW",
    type: "text",
    message: {
      en: "Go to Subscription → Plans → select lower plan → confirm downgrade.",
      ar: "اذهب إلى الاشتراك → الخطط → اختر خطة أقل → تأكيد التخفيض.",
    },
  },
  
  SUBSCRIPTION_DOWNGRADE_WHEN: {
    id: "SUBSCRIPTION_DOWNGRADE_WHEN",
    type: "text",
    message: {
      en: "Downgrade takes effect after current billing cycle ends.",
      ar: "يتم تطبيق التخفيض بعد انتهاء دورة الفوترة الحالية.",
    },
  },
  
  SUBSCRIPTION_DOWNGRADE_LIMIT: {
    id: "SUBSCRIPTION_DOWNGRADE_LIMIT",
    type: "text",
    message: {
      en: "After downgrade, animal limits, assistants and features will follow the new plan limits.",
      ar: "بعد التخفيض سيتم تطبيق حدود الحيوانات والمساعدين حسب الخطة الجديدة.",
    },
  },
  
  /* =======================================================
     BILLING
  ======================================================= */

  SUBSCRIPTION_BILLING: {
    id: "SUBSCRIPTION_BILLING",
    type: "menu",
    message: {
      en: "Billing & renewal",
      ar: "الفوترة والتجديد",
    },
    buttons: [
      {
        id: "SUBSCRIPTION_AUTORENEW",
        label: { en: "Auto renewal", ar: "التجديد التلقائي" },
      },
      {
        id: "SUBSCRIPTION_CYCLE",
        label: { en: "Billing cycle", ar: "دورة الفوترة" },
      },
    ],
  },

  SUBSCRIPTION_AUTORENEW: {
    id: "SUBSCRIPTION_AUTORENEW",
    type: "text",
    message: {
      en: "Subscriptions renew automatically. You can cancel anytime before expiry to stop renewal.",
      ar: "يتم تجديد الاشتراك تلقائيًا. يمكنك الإلغاء قبل انتهاء الاشتراك لإيقاف التجديد.",
    },
  },

  SUBSCRIPTION_CYCLE: {
    id: "SUBSCRIPTION_CYCLE",
    type: "text",
    message: {
      en: "Plans support monthly and yearly billing cycles depending on selected plan.",
      ar: "تدعم الخطط الدفع الشهري أو السنوي حسب الخطة المختارة.",
    },
  },

  /* =======================================================
     CANCEL
  ======================================================= */

  SUBSCRIPTION_CANCEL: {
    id: "SUBSCRIPTION_CANCEL",
    type: "menu",
    message: {
      en: "Cancel subscription",
      ar: "إلغاء الاشتراك",
    },
    buttons: [
      {
        id: "SUBSCRIPTION_CANCEL_HOW",
        label: { en: "Cancel plan", ar: "إلغاء الخطة" },
      },
      {
        id: "SUBSCRIPTION_REFUND",
        label: { en: "Refund policy", ar: "سياسة الاسترداد" },
      },
    ],
  },

  SUBSCRIPTION_CANCEL_HOW: {
    id: "SUBSCRIPTION_CANCEL_HOW",
    type: "text",
    message: {
      en: "Go to Subscription → Cancel plan. Access continues until expiry date.",
      ar: "اذهب إلى الاشتراك → إلغاء الخطة. يستمر الوصول حتى تاريخ الانتهاء.",
    },
  },

  SUBSCRIPTION_REFUND: {
    id: "SUBSCRIPTION_REFUND",
    type: "text",
    message: {
      en: "Refunds are handled by Apple App Store, Stripe or Google Play depending on purchase platform.",
      ar: "تتم معالجة الاستردادات من قبل Apple App Store أو Stripe أو Google Play حسب منصة الشراء.",
    },
  },

  /* =======================================================
     HISTORY
  ======================================================= */

  SUBSCRIPTION_HISTORY: {
    id: "SUBSCRIPTION_HISTORY",
    type: "text",
    message: {
      en: "You can view subscription history from Settings → My Subscription.",
      ar: "يمكنك عرض سجل الاشتراك من الإعدادات → اشتراكي.",
    },
  },

};