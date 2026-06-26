import { ChatbotNode } from '../types/chatbot.types';

export const privacyTopic: Record<string, ChatbotNode> = {
  PRIVACY_ROOT: {
    id: 'PRIVACY_ROOT',
    type: 'menu',
    message: {
      en: 'Privacy Policy — what would you like to know?',
      ar: 'سياسة الخصوصية — ماذا تريد أن تعرف؟',
    },
    buttons: [
      {
        id: 'PRIVACY_VIEW',
        label: {
          en: 'View Full Privacy Policy',
          ar: 'عرض سياسة الخصوصية كاملة',
        },
      },
      {
        id: 'PRIVACY_DATA',
        label: {
          en: 'What data do we collect?',
          ar: 'ما البيانات التي نجمعها؟',
        },
      },
      {
        id: 'PRIVACY_USAGE',
        label: {
          en: 'How we use your data',
          ar: 'كيف نستخدم بياناتك',
        },
      },
      {
        id: 'PRIVACY_SHARING',
        label: {
          en: 'Do we share your data?',
          ar: 'هل نشارك بياناتك؟',
        },
      },
      {
        id: 'PRIVACY_DELETE',
        label: {
          en: 'Data deletion',
          ar: 'حذف البيانات',
        },
      },
      {
        id: 'PRIVACY_RIGHTS',
        label: {
          en: 'Your rights',
          ar: 'حقوقك',
        },
      },
    ],
  },

  PRIVACY_VIEW: {
    id: 'PRIVACY_VIEW',
    type: 'redirect',
    message: {
      en: 'Opening Privacy Policy',
      ar: 'جاري فتح سياسة الخصوصية',
    },
    redirect: 'PrivacyPolicy',
    redirectWeb: 'https://alraie.net/privacy',
  },

  PRIVACY_DATA: {
    id: 'PRIVACY_DATA',
    type: 'text',
    message: {
      en: `We collect personal information, animal data, device information and location data (if GPS enabled).`,
      ar: `نقوم بجمع المعلومات الشخصية وبيانات الحيوانات ومعلومات الجهاز والموقع عند تفعيل GPS.`,
    },
  },

  PRIVACY_USAGE: {
    id: 'PRIVACY_USAGE',
    type: 'text',
    message: {
      en: `Your data is used to provide services, process payments, send notifications and improve ALRAIE.`,
      ar: `نستخدم بياناتك لتقديم الخدمات ومعالجة المدفوعات وإرسال الإشعارات وتحسين التطبيق.`,
    },
  },

  PRIVACY_SHARING: {
    id: 'PRIVACY_SHARING',
    type: 'text',
    message: {
      en: `We do not sell your data. We only share with service providers or when required by law.`,
      ar: `لا نقوم ببيع بياناتك. نشاركها فقط مع مزودي الخدمة أو عند الحاجة القانونية.`,
    },
  },

  PRIVACY_DELETE: {
    id: 'PRIVACY_DELETE',
    type: 'text',
    message: {
      en: `Deleting an animal permanently removes GPS history, health records and identification data.`,
      ar: `حذف الحيوان يؤدي إلى حذف سجل GPS والسجلات الصحية وبيانات التعريف نهائيًا.`,
    },
  },

  PRIVACY_RIGHTS: {
    id: 'PRIVACY_RIGHTS',
    type: 'text',
    message: {
      en: `You may access, correct or delete your data and restrict processing.`,
      ar: `يمكنك الوصول إلى بياناتك أو تصحيحها أو حذفها أو تقييد معالجتها.`,
    },
  },
};