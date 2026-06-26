import { ChatbotNode } from "../types/chatbot.types";

export const assistantTopic: Record<string, ChatbotNode> = {

  /* =======================================================
     ROOT
  ======================================================= */

  ASSISTANT_ROOT: {
    id: "ASSISTANT_ROOT",
    type: "menu",
    message: {
      en: "Assistant Management — what would you like to know?",
      ar: "إدارة المساعدين — ماذا تريد أن تعرف؟",
    },
    buttons: [
      {
        id: "ASSISTANT_WHAT_IS",
        label: {
          en: "What is assistant?",
          ar: "ما هو المساعد؟",
        },
      },
      {
        id: "ASSISTANT_CREATE",
        label: {
          en: "Create assistant",
          ar: "إنشاء مساعد",
        },
      },
      {
        id: "ASSISTANT_WHAT_CAN_DO",
        label: {
          en: "What can assistants do?",
          ar: "ماذا يمكن للمساعد أن يفعل؟",
        },
      },
      {
        id: "ASSISTANT_OWNER_DIFFERENCE",
        label: {
          en: "Owner vs Assistant",
          ar: "الفرق بين المالك والمساعد",
        },
      },
      {
        id: "ASSISTANT_LIMIT",
        label: {
          en: "Max assistants?",
          ar: "كم مساعد مسموح؟",
        },
      },
      {
        id: "ASSISTANT_PRICING",
        label: {
          en: "Are assistants free?",
          ar: "هل المساعدون مجانيون؟",
        },
      },
      {
        id: "ASSISTANT_EDIT",
        label: {
          en: "Edit assistant",
          ar: "تعديل المساعد",
        },
      },
      {
        id: "ASSISTANT_DELETE",
        label: {
          en: "Delete assistant",
          ar: "حذف المساعد",
        },
      },
      {
        id: "ASSISTANT_PERMISSION_ROOT",
        label: {
          en: "Assistant permissions",
          ar: "صلاحيات المساعد",
        },
      },
      {
        id: "ASSISTANT_LOGIN_ROOT",
        label: {
          en: "Assistant login",
          ar: "تسجيل دخول المساعد",
        },
      },
    ],
  },

  /* =======================================================
   17.2 CREATE ASSISTANT
======================================================= */

  ASSISTANT_CREATE: {
    id: "ASSISTANT_CREATE",
    type: "menu",
    message: {
      en: "Create assistant — what would you like to know?",
      ar: "إنشاء مساعد — ماذا تريد أن تعرف؟",
    },
    buttons: [
      {
        id: "ASSISTANT_CREATE_HOW",
        label: {
          en: "How to create assistant",
          ar: "كيفية إنشاء مساعد",
        },
      },
      {
        id: "ASSISTANT_CREATE_WHERE",
        label: {
          en: "Where to add assistant",
          ar: "أين يمكن إضافة المساعد",
        },
      },
      {
        id: "ASSISTANT_CREATE_REQUIRED",
        label: {
          en: "Required details",
          ar: "البيانات المطلوبة",
        },
      },
      {
        id: "ASSISTANT_CREATE_PHONE",
        label: {
          en: "Add by phone number",
          ar: "إضافة برقم الهاتف",
        },
      },
      {
        id: "ASSISTANT_CREATE_EMAIL",
        label: {
          en: "Add by email",
          ar: "إضافة بالبريد الإلكتروني",
        },
      },
    ],
  },

  /* ================= HOW ================= */

  ASSISTANT_CREATE_HOW: {
    id: "ASSISTANT_CREATE_HOW",
    type: "text",
    message: {
      en: "Go to Settings → Team Members → Tap Add Member → Enter assistant details → Save.",
      ar: "اذهب إلى الإعدادات → أعضاء الفريق → اضغط إضافة عضو → أدخل بيانات المساعد → حفظ.",
    },
  },

  /* ================= WHERE ================= */

  ASSISTANT_CREATE_WHERE: {
    id: "ASSISTANT_CREATE_WHERE",
    type: "text",
    message: {
      en: "Open Settings → Team Members. You will see assistant list and Add Member button to create new assistant or delete existing ones.",
      ar: "افتح الإعدادات → أعضاء الفريق. سترى قائمة المساعدين وزر إضافة عضو لإنشاء مساعد جديد أو حذف الموجودين.",
    },
  },

  /* ================= REQUIRED ================= */

  ASSISTANT_CREATE_REQUIRED: {
    id: "ASSISTANT_CREATE_REQUIRED",
    type: "text",
    message: {
      en: "You need name and either phone number or email. Password is required for email login assistants.",
      ar: "تحتاج إلى الاسم ورقم الهاتف أو البريد الإلكتروني. كلمة المرور مطلوبة عند التسجيل بالبريد الإلكتروني.",
    },
  },

  /* ================= PHONE ================= */

  ASSISTANT_CREATE_PHONE: {
    id: "ASSISTANT_CREATE_PHONE",
    type: "text",
    message: {
      en: "Enter assistant phone number with country code. OTP will be sent to verify assistant account.",
      ar: "أدخل رقم هاتف المساعد مع رمز الدولة. سيتم إرسال رمز تحقق OTP لتفعيل الحساب.",
    },
  },

  /* ================= EMAIL ================= */

  ASSISTANT_CREATE_EMAIL: {
    id: "ASSISTANT_CREATE_EMAIL",
    type: "text",
    message: {
      en: "Enter assistant email and password. Assistant will login using email and password.",
      ar: "أدخل البريد الإلكتروني وكلمة المرور. يمكن للمساعد تسجيل الدخول باستخدام البريد وكلمة المرور.",
    },
  },

  /* =======================================================
   17.3 EDIT ASSISTANT
======================================================= */

  ASSISTANT_EDIT: {
    id: "ASSISTANT_EDIT",
    type: "menu",
    message: {
      en: "Edit assistant — choose an option",
      ar: "تعديل المساعد — اختر خيارًا",
    },
    buttons: [
      {
        id: "ASSISTANT_EDIT_DETAILS",
        label: { en: "Edit assistant details", ar: "تعديل بيانات المساعد" },
      },
      {
        id: "ASSISTANT_EDIT_NAME",
        label: { en: "Change assistant name", ar: "تغيير اسم المساعد" },
      },
      {
        id: "ASSISTANT_EDIT_PHONE",
        label: { en: "Change assistant phone", ar: "تغيير رقم الهاتف" },
      },
      {
        id: "ASSISTANT_EDIT_PERMISSIONS",
        label: { en: "Update permissions", ar: "تحديث الصلاحيات" },
      },
    ],
  },

  ASSISTANT_EDIT_DETAILS: {
    id: "ASSISTANT_EDIT_DETAILS",
    type: "text",
    message: {
      en: "Assistant can edit profile details from Profile section like a normal user.",
      ar: "يمكن للمساعد تعديل بياناته من قسم الملف الشخصي مثل المستخدم العادي.",
    },
  },

  ASSISTANT_EDIT_NAME: {
    id: "ASSISTANT_EDIT_NAME",
    type: "text",
    message: {
      en: "Assistant can change name from Profile → Edit profile → Update name.",
      ar: "يمكن للمساعد تغيير الاسم من الملف الشخصي → تعديل → تحديث الاسم.",
    },
  },

  ASSISTANT_EDIT_PHONE: {
    id: "ASSISTANT_EDIT_PHONE",
    type: "text",
    message: {
      en: "Assistant can update phone number from Profile section. OTP verification is required.",
      ar: "يمكن للمساعد تحديث رقم الهاتف من الملف الشخصي مع التحقق عبر OTP.",
    },
  },

  ASSISTANT_EDIT_PERMISSIONS: {
    id: "ASSISTANT_EDIT_PERMISSIONS",
    type: "text",
    message: {
      en: "Only owner can update assistant permissions from Settings → Team Members → Edit permissions.",
      ar: "فقط المالك يمكنه تحديث صلاحيات المساعد من الإعدادات → أعضاء الفريق → تعديل الصلاحيات.",
    },
  },


  /* =======================================================
     17.4 DELETE ASSISTANT
  ======================================================= */

  ASSISTANT_DELETE: {
    id: "ASSISTANT_DELETE",
    type: "menu",
    message: {
      en: "Delete assistant",
      ar: "حذف المساعد",
    },
    buttons: [
      {
        id: "ASSISTANT_DELETE_HOW",
        label: { en: "Delete assistant", ar: "كيفية حذف المساعد" },
      },
      {
        id: "ASSISTANT_DELETE_WHAT_HAPPENS",
        label: { en: "After deletion", ar: "ماذا يحدث بعد الحذف" },
      },
    ],
  },

  ASSISTANT_DELETE_HOW: {
    id: "ASSISTANT_DELETE_HOW",
    type: "text",
    message: {
      en: "Go to Settings → Team Members → Select assistant → Delete. Owner can remove assistants from list.",
      ar: "اذهب إلى الإعدادات → أعضاء الفريق → اختر المساعد → حذف. يمكن للمالك إزالة المساعدين من القائمة.",
    },
  },

  ASSISTANT_DELETE_WHAT_HAPPENS: {
    id: "ASSISTANT_DELETE_WHAT_HAPPENS",
    type: "text",
    message: {
      en: "Assistant loses access immediately. They cannot login or manage animals anymore.",
      ar: "يفقد المساعد صلاحية الدخول فورًا ولا يمكنه إدارة الحيوانات أو تسجيل الدخول.",
    },
  },


  /* =======================================================
     17.5 ASSISTANT PERMISSIONS
  ======================================================= */

  ASSISTANT_PERMISSION_ROOT: {
    id: "ASSISTANT_PERMISSION_ROOT",
    type: "menu",
    message: {
      en: "Assistant permissions",
      ar: "صلاحيات المساعد",
    },
    buttons: [
      {
        id: "ASSISTANT_PERMISSION_AVAILABLE",
        label: { en: "Available permissions", ar: "الصلاحيات المتاحة" },
      },
      {
        id: "ASSISTANT_PERMISSION_ASSIGN",
        label: { en: "How to assign permissions", ar: "كيفية تعيين الصلاحيات" },
      },
      {
        id: "ASSISTANT_PERMISSION_CHANGE",
        label: { en: "Change permissions", ar: "تغيير الصلاحيات" },
      },
      {
        id: "ASSISTANT_PERMISSION_REMOVE",
        label: { en: "Remove permissions", ar: "إزالة الصلاحيات" },
      },
      {
        id: "ASSISTANT_PERMISSION_FULL_LIMITED",
        label: { en: "Full vs limited access", ar: "صلاحيات كاملة أو محدودة" },
      },
    ],
  },

  ASSISTANT_PERMISSION_AVAILABLE: {
    id: "ASSISTANT_PERMISSION_AVAILABLE",
    type: "text",
    message: {
      en: "Permissions include animals, reports, orders and dashboard sections.",
      ar: "تشمل الصلاحيات الحيوانات والتقارير والطلبات وأقسام الصفحة الرئيسية.",
    },
  },

  ASSISTANT_PERMISSION_ASSIGN: {
    id: "ASSISTANT_PERMISSION_ASSIGN",
    type: "text",
    message: {
      en: "Owner can assign permissions from Settings → Team Members → Select assistant → Permissions.",
      ar: "يمكن للمالك تعيين الصلاحيات من الإعدادات → أعضاء الفريق → اختيار المساعد → الصلاحيات.",
    },
  },

  ASSISTANT_PERMISSION_CHANGE: {
    id: "ASSISTANT_PERMISSION_CHANGE",
    type: "text",
    message: {
      en: "Permissions can be changed anytime by owner.",
      ar: "يمكن تغيير الصلاحيات في أي وقت بواسطة المالك.",
    },
  },

  ASSISTANT_PERMISSION_REMOVE: {
    id: "ASSISTANT_PERMISSION_REMOVE",
    type: "text",
    message: {
      en: "Owner can disable permissions to restrict assistant access.",
      ar: "يمكن للمالك تعطيل الصلاحيات لتقييد وصول المساعد.",
    },
  },

  ASSISTANT_PERMISSION_FULL_LIMITED: {
    id: "ASSISTANT_PERMISSION_FULL_LIMITED",
    type: "text",
    message: {
      en: "Full access allows all operations. Limited access restricts actions based on selected permissions.",
      ar: "الصلاحية الكاملة تسمح بجميع العمليات بينما المحدودة تقيد الإجراءات حسب الاختيارات.",
    },
  },

  /* =======================================================
     17.8 ASSISTANT LOGIN
  ======================================================= */

  ASSISTANT_LOGIN_ROOT: {
    id: "ASSISTANT_LOGIN_ROOT",
    type: "menu",
    message: {
      en: "Assistant login help",
      ar: "مساعدة تسجيل دخول المساعد",
    },
    buttons: [
      {
        id: "ASSISTANT_LOGIN_HOW",
        label: { en: "How assistant login", ar: "كيفية تسجيل الدخول" },
      },
      {
        id: "ASSISTANT_LOGIN_CREDENTIALS",
        label: { en: "Login credentials", ar: "بيانات تسجيل الدخول" },
      },
      {
        id: "ASSISTANT_LOGIN_FORGOT",
        label: { en: "Forgot password", ar: "نسيت كلمة المرور" },
      },
      {
        id: "ASSISTANT_LOGIN_CANNOT",
        label: { en: "Cannot login", ar: "لا يمكن تسجيل الدخول" },
      },
      {
        id: "ASSISTANT_LOGIN_INACTIVE",
        label: { en: "Account inactive", ar: "الحساب غير نشط" },
      },
    ],
  },

  ASSISTANT_LOGIN_HOW: {
    id: "ASSISTANT_LOGIN_HOW",
    type: "text",
    message: {
      en: "Assistant logs in using same login screen as normal users.",
      ar: "يسجل المساعد الدخول من نفس شاشة تسجيل الدخول للمستخدمين.",
    },
  },

  ASSISTANT_LOGIN_CREDENTIALS: {
    id: "ASSISTANT_LOGIN_CREDENTIALS",
    type: "text",
    message: {
      en: "Assistant can login using phone OTP or email and password.",
      ar: "يمكن للمساعد تسجيل الدخول باستخدام الهاتف عبر OTP أو البريد وكلمة المرور.",
    },
  },

  ASSISTANT_LOGIN_FORGOT: {
    id: "ASSISTANT_LOGIN_FORGOT",
    type: "text",
    message: {
      en: "Assistant can reset password using forgot password option.",
      ar: "يمكن للمساعد إعادة تعيين كلمة المرور عبر خيار نسيت كلمة المرور.",
    },
  },

  ASSISTANT_LOGIN_CANNOT: {
    id: "ASSISTANT_LOGIN_CANNOT",
    type: "text",
    message: {
      en: "Login may fail if assistant is deleted, not verified or wrong credentials.",
      ar: "قد يفشل تسجيل الدخول إذا تم حذف المساعد أو لم يتم التحقق أو البيانات خاطئة.",
    },
  },

  ASSISTANT_LOGIN_INACTIVE: {
    id: "ASSISTANT_LOGIN_INACTIVE",
    type: "text",
    message: {
      en: "Assistant account becomes inactive if owner deletes or disables access.",
      ar: "يصبح حساب المساعد غير نشط إذا قام المالك بحذفه أو تعطيل الوصول.",
    },
  },

  /* =======================================================
     WHAT IS ASSISTANT
  ======================================================= */

  ASSISTANT_WHAT_IS: {
    id: "ASSISTANT_WHAT_IS",
    type: "text",
    message: {
      en: "Assistant is a secondary user linked to the owner account. Assistants help manage animals, GPS, reports and daily operations.",
      ar: "المساعد هو مستخدم ثانوي مرتبط بحساب المالك ويساعد في إدارة الحيوانات و GPS والتقارير والعمليات اليومية.",
    },
  },

  /* =======================================================
     WHAT CAN DO
  ======================================================= */

  ASSISTANT_WHAT_CAN_DO: {
    id: "ASSISTANT_WHAT_CAN_DO",
    type: "menu",
    message: {
      en: "Assistants can perform the following actions:",
      ar: "يمكن للمساعد تنفيذ الإجراءات التالية:",
    },
    buttons: [
      {
        id: "ASSISTANT_CAN_ANIMALS",
        label: {
          en: "Manage animals",
          ar: "إدارة الحيوانات",
        },
      },
      {
        id: "ASSISTANT_CAN_REPORTS",
        label: {
          en: "Reports access",
          ar: "الوصول للتقارير",
        },
      },
      {
        id: "ASSISTANT_CAN_GPS",
        label: {
          en: "GPS tracking",
          ar: "تتبع GPS",
        },
      },
      {
        id: "ASSISTANT_CAN_LIMITED",
        label: {
          en: "Limited permissions",
          ar: "صلاحيات محدودة",
        },
      },
    ],
  },

  ASSISTANT_CAN_ANIMALS: {
    id: "ASSISTANT_CAN_ANIMALS",
    type: "text",
    message: {
      en: "Assistants can add, edit, view or delete animals based on permissions set by owner.",
      ar: "يمكن للمساعد إضافة أو تعديل أو عرض أو حذف الحيوانات حسب الصلاحيات التي يحددها المالك.",
    },
  },

  ASSISTANT_CAN_REPORTS: {
    id: "ASSISTANT_CAN_REPORTS",
    type: "text",
    message: {
      en: "Assistants can create and manage reports if permission is enabled.",
      ar: "يمكن للمساعد إنشاء وإدارة التقارير إذا تم منحه الصلاحية.",
    },
  },

  ASSISTANT_CAN_GPS: {
    id: "ASSISTANT_CAN_GPS",
    type: "text",
    message: {
      en: "Assistants can track animals and view GPS locations.",
      ar: "يمكن للمساعد تتبع الحيوانات وعرض مواقع GPS.",
    },
  },

  ASSISTANT_CAN_LIMITED: {
    id: "ASSISTANT_CAN_LIMITED",
    type: "text",
    message: {
      en: "Owner can restrict assistant access to animals, reports, orders and dashboard sections.",
      ar: "يمكن للمالك تقييد صلاحيات المساعد للحيوانات والتقارير والطلبات ولوحة التحكم.",
    },
  },

  /* =======================================================
     OWNER VS ASSISTANT
  ======================================================= */

  ASSISTANT_OWNER_DIFFERENCE: {
    id: "ASSISTANT_OWNER_DIFFERENCE",
    type: "text",
    message: {
      en: "Owner has full control including subscription, billing and assistants. Assistant only has limited operational access.",
      ar: "المالك لديه تحكم كامل بما في ذلك الاشتراك والفواتير والمساعدين. المساعد لديه صلاحيات تشغيل محدودة فقط.",
    },
  },

  /* =======================================================
     LIMIT (SUBSCRIPTION BASED)
  ======================================================= */

  ASSISTANT_LIMIT: {
    id: "ASSISTANT_LIMIT",
    type: "text",
    message: {
      en: "Number of assistants depends on your subscription plan. Upgrade your subscription to add more assistants.",
      ar: "عدد المساعدين يعتمد على نوع الاشتراك. قم بترقية الاشتراك لإضافة المزيد من المساعدين.",
    },
  },

  /* =======================================================
     PRICING
  ======================================================= */

  ASSISTANT_PRICING: {
    id: "ASSISTANT_PRICING",
    type: "text",
    message: {
      en: "Assistants are included in subscription plans. Some plans include free assistants, others require upgrade.",
      ar: "المساعدون ضمن خطط الاشتراك. بعض الخطط تشمل مساعدين مجانًا والبعض يتطلب ترقية.",
    },
  },


};