import { ChatbotNode } from '../types/chatbot.types';

export const termsTopic: Record<string, ChatbotNode> = {
  TERMS_ROOT: {
    id: 'TERMS_ROOT',
    type: 'menu',
    message: {
      en: 'Terms & Conditions — what would you like to know?',
      ar: 'الشروط والأحكام — ماذا تريد أن تعرف؟',
    },
    buttons: [
      { id: 'TERMS_VIEW', label: { en: 'View Full Terms', ar: 'عرض الشروط كاملة' } },
      { id: 'TERMS_PRIVACY', label: { en: 'Privacy Policy', ar: 'سياسة الخصوصية' } },
      { id: 'TERMS_REFUND', label: { en: 'Refund Policy', ar: 'سياسة الاسترداد' } },
      { id: 'TERMS_DATA', label: { en: 'Data Deletion', ar: 'حذف البيانات' } },
      { id: 'TERMS_SUBSCRIPTION', label: { en: 'Subscriptions', ar: 'الاشتراكات' } },
      { id: 'TERMS_ACCOUNT', label: { en: 'Account Responsibility', ar: 'مسؤولية الحساب' } },
      { id: 'TERMS_IP', label: { en: 'Intellectual Property', ar: 'الملكية الفكرية' } },
    ],
  },

  TERMS_VIEW: {
    id: 'TERMS_VIEW',
    type: 'redirect',
    message: {
      en: 'Opening Terms & Conditions',
      ar: 'جاري فتح الشروط والأحكام',
    },
    redirect: 'InAppTermsAndCondition',
    redirectWeb: 'https://alraie.net/terms',
  },

  TERMS_PRIVACY: {
    id: 'TERMS_PRIVACY',
    type: 'text',
    message: {
      en: `We collect personal information, animal data, device information and location data to provide and improve ALRAIE services. We do not sell your data and only share with service providers or when legally required.`,
      ar: `نقوم بجمع المعلومات الشخصية وبيانات الحيوانات ومعلومات الجهاز والموقع لتحسين خدمات ALRAIE. لا نقوم ببيع بياناتك ونشاركها فقط عند الحاجة القانونية.`,
    },
  },

  TERMS_REFUND: {
    id: 'TERMS_REFUND',
    type: 'text',
    message: {
      en: `Subscription refunds are available within 7 days if unused. Store product refunds available within 14 days if unused and in original packaging.`,
      ar: `يمكن استرداد الاشتراكات خلال 7 أيام إذا لم يتم استخدامها. ويمكن استرداد المنتجات خلال 14 يومًا إذا كانت غير مستخدمة.`,
    },
  },

  TERMS_DATA: {
    id: 'TERMS_DATA',
    type: 'text',
    message: {
      en: `Deleting an animal permanently removes all related data including GPS history and health records. This action cannot be reversed.`,
      ar: `حذف الحيوان يؤدي إلى حذف جميع البيانات المرتبطة به نهائيًا ولا يمكن استعادتها.`,
    },
  },

  TERMS_SUBSCRIPTION: {
    id: 'TERMS_SUBSCRIPTION',
    type: 'text',
    message: {
      en: `Subscriptions are monthly or yearly. Failure to pay may result in suspension. Refunds follow refund policy.`,
      ar: `الاشتراكات شهرية أو سنوية. قد يؤدي عدم الدفع إلى إيقاف الخدمة.`,
    },
  },

  TERMS_ACCOUNT: {
    id: 'TERMS_ACCOUNT',
    type: 'text',
    message: {
      en: `You are responsible for maintaining confidentiality of your account credentials and all activity under your account.`,
      ar: `أنت مسؤول عن الحفاظ على سرية بيانات تسجيل الدخول الخاصة بك.`,
    },
  },

  TERMS_IP: {
    id: 'TERMS_IP',
    type: 'text',
    message: {
      en: `All ALRAIE content including software, text and logos are protected by intellectual property laws.`,
      ar: `جميع محتويات ALRAIE محمية بموجب قوانين الملكية الفكرية.`,
    },
  },
};