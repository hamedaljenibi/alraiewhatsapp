import { ChatbotNode } from '../types/chatbot.types';

export const accountTopic: Record<string, ChatbotNode> = {

  ACCOUNT_ROOT: {
    id: 'ACCOUNT_ROOT',
    type: 'menu',
    message: {
      en: 'Account & User — what would you like help with?',
      ar: 'الحساب والمستخدم — كيف يمكننا مساعدتك؟',
    },
    buttons: [
      { id: 'ACCOUNT_LOGIN', label: { en: 'Login / Signup', ar: 'تسجيل الدخول / إنشاء حساب' } },
      { id: 'ACCOUNT_PROFILE', label: { en: 'Profile Management', ar: 'إدارة الملف الشخصي' } },
      { id: 'ACCOUNT_SECURITY', label: { en: 'Account Security', ar: 'أمان الحساب' } },
      { id: 'ACCOUNT_DELETE', label: { en: 'Delete Account', ar: 'حذف الحساب' } },
      { id: 'ACCOUNT_DATA', label: { en: 'Data & Privacy', ar: 'البيانات والخصوصية' } },
    ],
  },

  /* ---------------- LOGIN / SIGNUP ---------------- */

  ACCOUNT_LOGIN: {
    id: 'ACCOUNT_LOGIN',
    type: 'menu',
    message: {
      en: 'Login & Signup help',
      ar: 'المساعدة في تسجيل الدخول وإنشاء الحساب',
    },
    buttons: [
      { id: 'ACCOUNT_CREATE', label: { en: 'Create account', ar: 'إنشاء حساب' } },
      { id: 'ACCOUNT_LOGIN_PHONE', label: { en: 'Login with phone/email', ar: 'تسجيل الدخول عبر الهاتف أو البريد' } },
      { id: 'ACCOUNT_OTP_NOT_RECEIVED', label: { en: 'OTP not received', ar: 'لم يصل رمز OTP' } },
      { id: 'ACCOUNT_WRONG_OTP', label: { en: 'Wrong OTP', ar: 'رمز OTP خاطئ' } },
      { id: 'ACCOUNT_LOGIN_FAILED', label: { en: 'Login failed', ar: 'فشل تسجيل الدخول' } },
      { id: 'ACCOUNT_FORGOT_PASSWORD', label: { en: 'Forgot password', ar: 'نسيت كلمة المرور' } },
      { id: 'ACCOUNT_LOGOUT', label: { en: 'Logout', ar: 'تسجيل الخروج' } },
    ],
  },

  ACCOUNT_CREATE: {
    id: 'ACCOUNT_CREATE',
    type: 'text',
    message: {
      en: `To create account: Open ALRAIE → Create Account → Choose Role → Choose animal type → choose phone or email → verify OTP.`,
      ar: `لإنشاء حساب: افتح الراعي → إنشاء حساب → اختر الدور → اختر نوع الحيوان → اختر الهاتف أو البريد → تحقق من OTP.`,
    },
  },

  ACCOUNT_LOGIN_PHONE: {
    id: 'ACCOUNT_LOGIN_PHONE',
    type: 'text',
    message: {
      en: `You can login using email + password OR phone number with OTP verification.`,
      ar: `يمكنك تسجيل الدخول باستخدام البريد وكلمة المرور أو رقم الهاتف مع OTP.`,
    },
  },

  ACCOUNT_OTP_NOT_RECEIVED: {
    id: 'ACCOUNT_OTP_NOT_RECEIVED',
    type: 'text',
    message: {
      en: `Wait 30 seconds then tap resend OTP. Check phone number and country code.`,
      ar: `انتظر 30 ثانية ثم اضغط إعادة الإرسال وتأكد من رقم الهاتف.`,
    },
  },

  ACCOUNT_WRONG_OTP: {
    id: 'ACCOUNT_WRONG_OTP',
    type: 'text',
    message: {
      en: `OTP may expire. Request new OTP and try again.`,
      ar: `قد تنتهي صلاحية OTP. اطلب رمز جديد.`,
    },
  },

  ACCOUNT_LOGIN_FAILED: {
    id: 'ACCOUNT_LOGIN_FAILED',
    type: 'text',
    message: {
      en: `Check credentials or verify your account first.`,
      ar: `تحقق من البيانات أو قم بتأكيد الحساب أولاً.`,
    },
  },

  ACCOUNT_FORGOT_PASSWORD: {
    id: 'ACCOUNT_FORGOT_PASSWORD',
    type: 'text',
    message: {
      en: `Tap forgot password → enter email → verify OTP → set new password.`,
      ar: `اضغط نسيت كلمة المرور → أدخل البريد → تحقق من OTP → تعيين كلمة جديدة.`,
    },
  },

  ACCOUNT_LOGOUT: {
    id: 'ACCOUNT_LOGOUT',
    type: 'text',
    message: {
      en: `Go to settings → logout.`,
      ar: `اذهب للإعدادات → تسجيل الخروج.`,
    },
  },

  /* ---------------- PROFILE ---------------- */

  ACCOUNT_PROFILE: {
    id: 'ACCOUNT_PROFILE',
    type: 'menu',
    message: {
      en: 'Profile management',
      ar: 'إدارة الملف الشخصي',
    },
    buttons: [
      { id: 'ACCOUNT_EDIT_PROFILE', label: { en: 'Edit profile', ar: 'تعديل الملف الشخصي' } },
      { id: 'ACCOUNT_CHANGE_PHONE', label: { en: 'Change phone', ar: 'تغيير رقم الهاتف' } },
      { id: 'ACCOUNT_CHANGE_EMAIL', label: { en: 'Change email', ar: 'تغيير البريد الإلكتروني' } },
      { id: 'ACCOUNT_UPLOAD_IMAGE', label: { en: 'Profile picture', ar: 'الصورة الشخصية' } },
      { id: 'ACCOUNT_LANGUAGE', label: { en: 'Language change', ar: 'تغيير اللغة' } },
    ],
  },

  ACCOUNT_EDIT_PROFILE: {
    id: 'ACCOUNT_EDIT_PROFILE',
    type: 'text',
    message: {
      en: `Go to profile → edit profile → update details.`,
      ar: `اذهب للملف الشخصي → تعديل → تحديث البيانات.`,
    },
  },

  ACCOUNT_CHANGE_PHONE: {
    id: 'ACCOUNT_CHANGE_PHONE',
    type: 'text',
    message: {
      en: `Change phone requires OTP verification.`,
      ar: `تغيير الهاتف يتطلب التحقق عبر OTP.`,
    },
  },

  ACCOUNT_CHANGE_EMAIL: {
    id: 'ACCOUNT_CHANGE_EMAIL',
    type: 'text',
    message: {
      en: `Changing email requires OTP verification.`,
      ar: `تغيير البريد يتطلب OTP.`,
    },
  },

  ACCOUNT_UPLOAD_IMAGE: {
    id: 'ACCOUNT_UPLOAD_IMAGE',
    type: 'text',
    message: {
      en: `Go to profile → upload profile image.`,
      ar: `اذهب للملف الشخصي → رفع صورة.`,
    },
  },

  ACCOUNT_LANGUAGE: {
    id: 'ACCOUNT_LANGUAGE',
    type: 'text',
    message: {
      en: `You can change language from settings in application as well as from header in website.`,
      ar: `يمكنك تغيير اللغة من الإعدادات في التطبيق وكذلك من العنوان في الموقع الإلكتروني.`,
    },
  },

  /* ---------------- SECURITY ---------------- */

  ACCOUNT_SECURITY: {
    id: 'ACCOUNT_SECURITY',
    type: 'menu',
    message: {
      en: 'Account security',
      ar: 'أمان الحساب',
    },
    buttons: [
      { id: 'ACCOUNT_CHANGE_PASSWORD', label: { en: 'Change password', ar: 'تغيير كلمة المرور' } },
    ],
  },

  ACCOUNT_CHANGE_PASSWORD: {
    id: 'ACCOUNT_CHANGE_PASSWORD',
    type: 'text',
    message: {
      en: `Go to settings → change password.`,
      ar: `اذهب للإعدادات → تغيير كلمة المرور.`,
    },
  },

  /* ---------------- DELETE ACCOUNT ---------------- */

  ACCOUNT_DELETE: {
    id: 'ACCOUNT_DELETE',
    type: 'menu',
    message: {
      en: 'Delete account',
      ar: 'حذف الحساب',
    },
    buttons: [
      { id: 'ACCOUNT_DELETE_HOW', label: { en: 'How to delete', ar: 'كيفية الحذف' } },
      { id: 'ACCOUNT_DELETE_WHAT', label: { en: 'What happens', ar: 'ماذا يحدث بعد الحذف' } },
    ],
  },

  ACCOUNT_DELETE_HOW: {
    id: 'ACCOUNT_DELETE_HOW',
    type: 'text',
    message: {
      en: `Go to settings → delete account → confirm reason.`,
      ar: `اذهب للإعدادات → حذف الحساب → تأكيد السبب.`,
    },
  },

  ACCOUNT_DELETE_WHAT: {
    id: 'ACCOUNT_DELETE_WHAT',
    type: 'text',
    message: {
      en: `Deleting account removes animals, assistants, geofence and data permanently.`,
      ar: `حذف الحساب يزيل الحيوانات والمساعدين والبيانات نهائيًا.`,
    },
  },

  /* ---------------- DATA ---------------- */

  ACCOUNT_DATA: {
    id: 'ACCOUNT_DATA',
    type: 'menu',
    message: {
      en: 'Data & privacy',
      ar: 'البيانات والخصوصية',
    },
    buttons: [
      { id: 'ACCOUNT_DATA_STORED', label: { en: 'What data stored', ar: 'ما البيانات المخزنة' } },
      { id: 'ACCOUNT_DATA_USAGE', label: { en: 'How data used', ar: 'كيف تستخدم البيانات' } },
      // { id: 'ACCOUNT_DATA_SETTINGS', label: { en: 'Privacy settings', ar: 'إعدادات الخصوصية' } },
    ],
  },

  ACCOUNT_DATA_STORED: {
    id: 'ACCOUNT_DATA_STORED',
    type: 'text',
    message: {
      en: `We store profile info, animals, tracking and subscription data.`,
      ar: `نقوم بتخزين بيانات الملف الشخصي والحيوانات والتتبع والاشتراك.`,
    },
  },

  ACCOUNT_DATA_USAGE: {
    id: 'ACCOUNT_DATA_USAGE',
    type: 'text',
    message: {
      en: `Data is used for tracking, notifications and account management.`,
      ar: `تستخدم البيانات للتتبع والإشعارات وإدارة الحساب.`,
    },
  },

  ACCOUNT_DATA_SETTINGS: {
    id: 'ACCOUNT_DATA_SETTINGS',
    type: 'text',
    message: {
      en: `You can manage privacy from profile settings.`,
      ar: `يمكنك إدارة الخصوصية من الإعدادات.`,
    },
  },

};