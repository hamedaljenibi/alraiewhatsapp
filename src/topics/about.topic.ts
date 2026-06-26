import { ChatbotNode } from '../types/chatbot.types';

export const aboutTopic: Record<string, ChatbotNode> = {
  ABOUT_ROOT: {
    id: 'ABOUT_ROOT',
    type: 'menu',
    message: {
      en: 'About ALRAIE — what would you like to know?',
      ar: 'حول الراعي — ماذا تريد أن تعرف؟',
    },
    buttons: [
      {
        id: 'ABOUT_VIEW',
        label: {
          en: 'About ALRAIE',
          ar: 'حول تطبيق الراعي',
        },
      },
      {
        id: 'ABOUT_FEATURES',
        label: {
          en: 'Features',
          ar: 'سمات',
        },
      },
      {
        id: 'ABOUT_TRACKING',
        label: {
          en: 'GPS & Tracking',
          ar: 'التتبع و GPS',
        },
      },
      {
        id: 'ABOUT_MANAGEMENT',
        label: {
          en: 'Animal Management',
          ar: 'إدارة الحيوانات',
        },
      },
      {
        id: 'ABOUT_PAYMENTS',
        label: {
          en: 'Payments & Subscriptions',
          ar: 'الدفع والاشتراكات',
        },
      },
      {
        id: 'ABOUT_PLATFORM',
        label: {
          en: 'Platforms Supported',
          ar: 'المنصات المدعومة',
        },
      },
    ],
  },

  ABOUT_VIEW: {
    id: 'ABOUT_VIEW',
    type: 'redirect',
    message: {
      en: 'Opening About ALRAIE',
      ar: 'جاري فتح صفحة حول الراعي',
    },
    redirect: 'AboutUs',
    redirectWeb: 'https://alraie.net/aboutus',
  },

  ABOUT_FEATURES: {
    id: 'ABOUT_FEATURES',
    type: 'text',
    message: {
      en: `ALRAIE provides GPS tracking, geo-fencing, microchip reader support, animal management, notifications and subscription plans.`,
      ar: `يوفر تطبيق الراعي التتبع عبر GPS، التسييج الجغرافي، دعم قارئ الميكروشيب، إدارة الحيوانات، الإشعارات وخطط الاشتراك.`,
    },
  },

  ABOUT_TRACKING: {
    id: 'ABOUT_TRACKING',
    type: 'text',
    message: {
      en: `ALRAIE uses real-time GPS tracking with geo-fencing and microchip integration for precise animal location monitoring.`,
      ar: `يستخدم تطبيق الراعي تتبع GPS لحظي مع التسييج الجغرافي ودمج الميكروشيب لمراقبة موقع الحيوانات بدقة.`,
    },
  },

  ABOUT_MANAGEMENT: {
    id: 'ABOUT_MANAGEMENT',
    type: 'text',
    message: {
      en: `ALRAIE allows registering animals, tracking movements, managing orders, counting animals and viewing dashboards.`,
      ar: `يسمح تطبيق الراعي بتسجيل الحيوانات، تتبع حركاتها، إدارة الطلبات، عد الحيوانات وعرض لوحات التحكم.`,
    },
  },

  ABOUT_PAYMENTS: {
    id: 'ABOUT_PAYMENTS',
    type: 'text',
    message: {
      en: `ALRAIE supports Apple Pay, Credit Cards and customizable subscription plans.`,
      ar: `يدعم تطبيق الراعي Apple Pay وبطاقات الائتمان وخطط اشتراك قابلة للتخصيص.`,
    },
  },

  ABOUT_PLATFORM: {
    id: 'ABOUT_PLATFORM',
    type: 'text',
    message: {
      en: `ALRAIE is available on iOS, Android, Website and supports multi-language with notifications and dashboard.`,
      ar: `يتوفر تطبيق الراعي على iOS و Android والموقع الإلكتروني ويدعم متعدد اللغات مع الإشعارات ولوحة التحكم.`,
    },
  },
};