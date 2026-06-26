import { ChatbotNode } from "../types/chatbot.types";

export const helpTopic: Record<string, ChatbotNode> = {

  /* =======================================================
     16 HELP & SUPPORT
  ======================================================= */

  HELP_ROOT: {
    id: "HELP_ROOT",
    type: "menu",
    message: {
      en: "Help & Support — how can we help you?",
      ar: "المساعدة والدعم — كيف يمكننا مساعدتك؟",
    },
    buttons: [
      {
        id: "HELP_CONTACT",
        label: {
          en: "Contact support",
          ar: "التواصل مع الدعم",
        },
      },
      {
        id: "HELP_FAQ",
        label: {
          en: "FAQs",
          ar: "الأسئلة الشائعة",
        },
      },
    ],
  },

  /* =======================================================
     16.1 CONTACT SUPPORT
  ======================================================= */

  HELP_CONTACT: {
    id: "HELP_CONTACT",
    type: "menu",
    message: {
      en: "Contact support",
      ar: "التواصل مع الدعم",
    },
    buttons: [
      {
        id: "HELP_CONTACT_HOW",
        label: {
          en: "How to contact support",
          ar: "كيفية التواصل مع الدعم",
        },
      },
      {
        id: "HELP_CONTACT_RESPONSE",
        label: {
          en: "Support response time",
          ar: "وقت الرد من الدعم",
        },
      },
      {
        id: "HELP_CONTACT_EMAIL",
        label: {
          en: "Email support",
          ar: "البريد الإلكتروني للدعم",
        },
      },
      {
        id: "HELP_CONTACT_OPEN",
        label: {
          en: "Open contact form",
          ar: "فتح نموذج التواصل",
        },
      },
    ],
  },

  HELP_CONTACT_HOW: {
    id: "HELP_CONTACT_HOW",
    type: "text",
    message: {
      en: "Go to Settings → Contact support → fill name, email or phone and message.",
      ar: "اذهب إلى الإعدادات → التواصل مع الدعم → املأ الاسم، البريد الإلكتروني أو الهاتف والرسالة.",
    },
  },

  HELP_CONTACT_RESPONSE: {
    id: "HELP_CONTACT_RESPONSE",
    type: "text",
    message: {
      en: "Support usually responds within 24 hours.",
      ar: "يقوم الدعم بالرد عادة خلال 24 ساعة.",
    },
  },

  HELP_CONTACT_EMAIL: {
    id: "HELP_CONTACT_EMAIL",
    type: "text",
    message: {
      en: "You can also email us at info@alraie.net. Our support team will respond as soon as possible.",
      ar: "يمكنك أيضًا مراسلتنا عبر البريد الإلكتروني info@alraie.net وسيقوم فريق الدعم بالرد في أقرب وقت ممكن.",
    },
  },
  
  HELP_CONTACT_OPEN: {
    id: "HELP_CONTACT_OPEN",
    type: "redirect",
    message: {
      en: "Open contact support form.",
      ar: "فتح نموذج التواصل مع الدعم.",
    },
    redirect: "ContactUs",
    redirectWeb: "https://alraie.net/contactus",
  },

  /* =======================================================
     16.2 FAQ
  ======================================================= */

  HELP_FAQ: {
    id: "HELP_FAQ",
    type: "menu",
    message: {
      en: "Frequently asked questions",
      ar: "الأسئلة الشائعة",
    },
    buttons: [
      {
        id: "HELP_FAQ_VIEW",
        label: {
          en: "View FAQs",
          ar: "عرض الأسئلة الشائعة",
        },
      },
      {
        id: "HELP_FAQ_WHAT",
        label: {
          en: "What is FAQ?",
          ar: "ما هي الأسئلة الشائعة؟",
        },
      },
    ],
  },

  HELP_FAQ_VIEW: {
    id: "HELP_FAQ_VIEW",
    type: "redirect",
    message: {
      en: "Open FAQs page",
      ar: "فتح صفحة الأسئلة الشائعة",
    },
    // redirect: "FAQ",
    redirectWeb: "https://alraie.net/",
  },

  HELP_FAQ_WHAT: {
    id: "HELP_FAQ_WHAT",
    type: "text",
    message: {
      en: "FAQs contain common questions and answers about ALRAIE features.",
      ar: "الأسئلة الشائعة تحتوي على إجابات للأسئلة المتكررة حول ميزات الراعي.",
    },
  },

};