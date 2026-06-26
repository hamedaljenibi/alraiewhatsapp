import { ChatbotNode } from "../types/chatbot.types";

export const dataDeletionTopic: Record<string, ChatbotNode> = {

  DATA_DELETION_ROOT: {
    id: "DATA_DELETION_ROOT",
    type: "menu",
    message: {
      en: "Data deletion — what would you like to remove?",
      ar: "حذف البيانات — ماذا تريد حذف؟",
    },
    buttons: [
      {
        id: "DATA_DELETE_ACCOUNT",
        label: {
          en: "Delete account data",
          ar: "حذف بيانات الحساب",
        },
      },
      {
        id: "DATA_DELETE_ANIMAL",
        label: {
          en: "Delete animal data",
          ar: "حذف بيانات الحيوان",
        },
      },
      {
        id: "DATA_DELETION_POLICY",
        label: {
          en: "Deletion policy",
          ar: "سياسة حذف البيانات",
        },
      },
    ],
  },

  /* ================= ACCOUNT DELETE ================= */

  DATA_DELETE_ACCOUNT: {
    id: "DATA_DELETE_ACCOUNT",
    type: "menu",
    message: {
      en: "Delete account data",
      ar: "حذف بيانات الحساب",
    },
    buttons: [
      {
        id: "DATA_DELETE_ACCOUNT_ALL",
        label: {
          en: "Delete all data",
          ar: "حذف جميع البيانات",
        },
      },
      {
        id: "DATA_DELETE_ACCOUNT_REQUEST",
        label: {
          en: "Request deletion",
          ar: "طلب الحذف",
        },
      },
    ],
  },

  DATA_DELETE_ACCOUNT_ALL: {
    id: "DATA_DELETE_ACCOUNT_ALL",
    type: "text",
    message: {
      en: "Deleting your account removes all personal info, animals, GPS tracking, assistants and data permanently.",
      ar: "حذف الحساب سيؤدي إلى إزالة جميع البيانات الشخصية والحيوانات والتتبع والمساعدين بشكل دائم.",
    },
  },

  DATA_DELETE_ACCOUNT_REQUEST: {
    id: "DATA_DELETE_ACCOUNT_REQUEST",
    type: "redirect",
    redirectWeb: "https://alraie.net/deletionPolicy",
    message: {
      en: "Open deletion policy to request account deletion.",
      ar: "افتح سياسة الحذف لطلب حذف الحساب.",
    },
  },

  /* ================= ANIMAL DELETE ================= */

  DATA_DELETE_ANIMAL: {
    id: "DATA_DELETE_ANIMAL",
    type: "menu",
    message: {
      en: "Delete animal data",
      ar: "حذف بيانات الحيوان",
    },
    buttons: [
      {
        id: "DATA_DELETE_ANIMAL_RECORD",
        label: {
          en: "Delete animal records",
          ar: "حذف سجلات الحيوان",
        },
      },
      {
        id: "DATA_DELETE_ANIMAL_REPORTS",
        label: {
          en: "Delete reports",
          ar: "حذف التقارير",
        },
      },
    ],
  },

  DATA_DELETE_ANIMAL_RECORD: {
    id: "DATA_DELETE_ANIMAL_RECORD",
    type: "text",
    message: {
      en: "Open animal details → delete → confirm. This removes animal, tracking and related data.",
      ar: "افتح تفاصيل الحيوان → حذف → تأكيد. هذا سيؤدي إلى إزالة الحيوان والتتبع والبيانات المرتبطة.",
    },
  },

  DATA_DELETE_ANIMAL_REPORTS: {
    id: "DATA_DELETE_ANIMAL_REPORTS",
    type: "text",
    message: {
      en: "Deleting animal also removes health reports and related records.",
      ar: "حذف الحيوان يؤدي إلى حذف التقارير الصحية والبيانات المرتبطة.",
    },
  },

  /* ================= POLICY ================= */

  DATA_DELETION_POLICY: {
    id: "DATA_DELETION_POLICY",
    type: "redirect",
    redirectWeb: "https://alraie.net/deletionPolicy",
    message: {
      en: "View full data deletion policy.",
      ar: "عرض سياسة حذف البيانات كاملة.",
    },
  },

};