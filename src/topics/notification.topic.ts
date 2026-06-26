import { ChatbotNode } from "../types/chatbot.types";

export const notificationTopic: Record<string, ChatbotNode> = {

  /* =======================================================
     ROOT
  ======================================================= */

  NOTIFICATION_ROOT: {
    id: "NOTIFICATION_ROOT",
    type: "menu",
    message: {
      en: "Notifications — what would you like help with?",
      ar: "الإشعارات — كيف يمكننا مساعدتك؟",
    },
    buttons: [
      { id: "NOTIFICATION_TYPES", label: { en: "Notification types", ar: "أنواع الإشعارات" } },
      { id: "NOTIFICATION_SETTINGS", label: { en: "Notification settings", ar: "إعدادات الإشعارات" } },
      { id: "NOTIFICATION_PREFERENCES", label: { en: "Notification preferences", ar: "تفضيلات الإشعارات" } },
      { id: "NOTIFICATION_ISSUES", label: { en: "Not receiving notifications", ar: "لا تصل الإشعارات" } },
      { id: "NOTIFICATION_EMAIL", label: { en: "Email notifications", ar: "إشعارات البريد الإلكتروني" } },
      { id: "NOTIFICATION_INAPP", label: { en: "In-app alerts", ar: "إشعارات داخل التطبيق" } },
    ],
  },

  /* =======================================================
     TYPES
  ======================================================= */

  NOTIFICATION_TYPES: {
    id: "NOTIFICATION_TYPES",
    type: "text",
    message: {
      en: `You may receive the following notifications:

Animal Alerts
• Animal out of geofence
• Animal returned to safe zone
• Low battery alert
• Device LED off
• Device idle alert

Order Notifications
• Order created
• Payment success / failed
• Order shipped
• Order delivered
• Order cancelled
• Refund initiated / completed

Subscription Notifications
• Subscription activated
• Subscription cancelled
• Subscription downgraded
• Subscription expiring soon
• Subscription expired

Reports & Export
• Export ready
• Asset report ready
• Animal export ready

Weather Alerts
• Weather risk notification
`,
      ar: `قد تستلم الأنواع التالية من الإشعارات:

تنبيهات الحيوانات
• خروج الحيوان من النطاق
• عودة الحيوان للمنطقة الآمنة
• انخفاض البطارية
• إيقاف ضوء الجهاز
• خمول الجهاز

إشعارات الطلبات
• إنشاء الطلب
• نجاح أو فشل الدفع
• شحن الطلب
• تسليم الطلب
• إلغاء الطلب
• بدء أو إتمام الاسترداد

إشعارات الاشتراك
• تفعيل الاشتراك
• إلغاء الاشتراك
• تخفيض الاشتراك
• قرب انتهاء الاشتراك
• انتهاء الاشتراك

التقارير والتصدير
• جاهزية التصدير
• جاهزية التقارير
• تصدير الحيوانات

تنبيهات الطقس
• مخاطر الطقس
`,
    },
  },

  /* =======================================================
     SETTINGS
  ======================================================= */

  NOTIFICATION_SETTINGS: {
    id: "NOTIFICATION_SETTINGS",
    type: "menu",
    message: {
      en: "Notification settings",
      ar: "إعدادات الإشعارات",
    },
    buttons: [
      { id: "NOTIFICATION_ENABLE", label: { en: "Enable notifications", ar: "تفعيل الإشعارات" } },
      { id: "NOTIFICATION_DISABLE", label: { en: "Disable notifications", ar: "إيقاف الإشعارات" } },
    ],
  },

  NOTIFICATION_ENABLE: {
    id: "NOTIFICATION_ENABLE",
    type: "text",
    message: {
      en: `To enable notifications:

Android
• Open Settings
• Apps → ALRAIE
• Notifications
• Enable all notifications

iOS
• Open Settings
• Notifications
• ALRAIE app
• Allow notifications
• Enable sound & alerts

Also ensure internet connection is active.`,
      ar: `لتفعيل الإشعارات:

أندرويد
• افتح الإعدادات
• التطبيقات → ALRAIE
• الإشعارات
• قم بتفعيل الإشعارات

iOS
• افتح الإعدادات
• الإشعارات
• تطبيق ALRAIE
• السماح بالإشعارات
• تفعيل الصوت والتنبيهات

تأكد أيضاً من اتصال الإنترنت.`,
    },
  },

  NOTIFICATION_DISABLE: {
    id: "NOTIFICATION_DISABLE",
    type: "text",
    message: {
      en: `To disable notifications:

Android
Settings → Apps → ALRAIE → Notifications → Disable

iOS
Settings → Notifications → ALRAIE → Disable notifications`,
      ar: `لإيقاف الإشعارات:

أندرويد
الإعدادات → التطبيقات → ALRAIE → الإشعارات → إيقاف

iOS
الإعدادات → الإشعارات → ALRAIE → إيقاف`,
    },
  },

  /* =======================================================
     ISSUES
  ======================================================= */

  NOTIFICATION_ISSUES: {
    id: "NOTIFICATION_ISSUES",
    type: "text",
    message: {
      en: `If you are not receiving notifications:

Check these:

• Notifications enabled
• Internet connection active
• App not force closed
• Battery saver disabled
• App updated to latest version
• Logged into correct account
• GPS device linked to animal

Android additional checks:
• Disable battery optimization
• Allow background activity

iOS additional checks:
• Background app refresh ON
• Low power mode OFF
• Allow notifications`,
      ar: `إذا لم تصلك الإشعارات:

تحقق من:

• تفعيل الإشعارات
• اتصال الإنترنت
• عدم إغلاق التطبيق بالقوة
• إيقاف توفير البطارية
• تحديث التطبيق
• تسجيل الدخول بالحساب الصحيح
• ربط جهاز GPS بالحيوان

أندرويد:
• إيقاف تحسين البطارية
• السماح بالخلفية

iOS:
• تفعيل التحديث بالخلفية
• إيقاف وضع الطاقة المنخفضة
• السماح بالإشعارات`,
    },
  },

  /* =======================================================
     EMAIL
  ======================================================= */

  NOTIFICATION_EMAIL: {
    id: "NOTIFICATION_EMAIL",
    type: "text",
    message: {
      en: `Email notifications are sent for:

• Animal out of range
• Low battery alerts
• Device idle alerts
• Subscription updates
• Order updates
And many more...
Make sure your email is correct in profile settings.`,
      ar: `يتم إرسال إشعارات البريد الإلكتروني عند:

• خروج الحيوان من النطاق
• انخفاض البطارية
• خمول الجهاز
• تحديث الاشتراك
• تحديث الطلبات

تأكد من صحة البريد الإلكتروني في الملف الشخصي.`,
    },
  },

  /* =======================================================
     IN APP
  ======================================================= */

  NOTIFICATION_INAPP: {
    id: "NOTIFICATION_INAPP",
    type: "text",
    message: {
      en: `In-app alerts appear inside notification center.

You can:
• View notifications
• Mark as read
• Mark all as read
• Delete notification
• Delete all notifications

Notifications are synced between owner and assistants.`,
      ar: `تظهر الإشعارات داخل التطبيق في مركز الإشعارات.

يمكنك:
• عرض الإشعارات
• تعليم كمقروء
• تعليم الكل كمقروء
• حذف إشعار
• حذف جميع الإشعارات

تتم مزامنة الإشعارات بين المالك والمساعدين.`,
    },
  },

  /* =======================================================
   PREFERENCES
======================================================= */

NOTIFICATION_PREFERENCES: {
  id: "NOTIFICATION_PREFERENCES",
  type: "text",
  message: {
    en: `Notification preferences allow you to manage tracking-related alerts.

Currently you can control these notifications:

• All Notifications
Enable or disable all tracking notifications together.

• Animal Out
Alert when the animal leaves the safe zone.

• Animal In
Alert when the animal enters the safe zone.

• Device LED Status
Notification when the GPS device LED is turned off.

• Low Battery Alert
Notification when device battery becomes low.

• Device Idle
Notification when the device stays inactive for a long time.

How it works:

• Turning OFF "All Notifications" disables all tracking alerts for all channels including:
  - Push notifications
  - Email notifications
  - In-app alerts

• Turning OFF an individual alert only disables that specific notification across all channels.

Example:
You may keep all notifications ON but disable only Low Battery alerts.`,
    ar: `تسمح لك تفضيلات الإشعارات بالتحكم في تنبيهات التتبع المتعلقة بالحيوانات.

حالياً يمكنك التحكم في الإشعارات التالية:

• جميع الإشعارات
تفعيل أو إيقاف جميع تنبيهات التتبع معاً.

• خروج الحيوان
تنبيه عند خروج الحيوان من المنطقة الآمنة.

• دخول الحيوان
تنبيه عند دخول الحيوان إلى المنطقة الآمنة.

• حالة ضوء الجهاز LED
تنبيه عند إيقاف ضوء جهاز GPS.

• انخفاض البطارية
تنبيه عند انخفاض بطارية الجهاز.

• خمول الجهاز
تنبيه عند بقاء الجهاز غير نشط لفترة طويلة.

طريقة العمل:

• عند إيقاف "جميع الإشعارات" يتم إيقاف جميع تنبيهات التتبع عبر جميع القنوات بما يشمل:
  - إشعارات الدفع Push
  - إشعارات البريد الإلكتروني
  - الإشعارات داخل التطبيق

• عند إيقاف نوع إشعار معين يتم إيقاف هذا التنبيه فقط عبر جميع القنوات.

مثال:
يمكنك إبقاء جميع الإشعارات مفعلة مع إيقاف تنبيهات انخفاض البطارية فقط.`,
    },
  },

};