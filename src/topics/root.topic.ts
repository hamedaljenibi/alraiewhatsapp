import { ChatbotNode } from "../types/chatbot.types";


export const rootTopic: Record<string, ChatbotNode> = {
  CHATBOT_ROOT: {
    id: 'CHATBOT_ROOT',
    type: 'menu',
    message: {
      en: 'Hi, Welcome to Alraie, How can we help you?',
      ar: 'مرحباً، أهلاً بك في "الراعي". كيف يمكننا مساعدتك؟',
    },
    buttons: [
      {
        id: 'ACCOUNT_ROOT',
        label: {
          en: 'Account & User',
          ar: 'الحساب والمستخدم',
        },
      },
      {
        id: 'ASSISTANT_ROOT',
        label: {
          en: 'Assistant Management',
          ar: 'إدارة المساعدين',
        },
      },
      { id: 'ANIMAL_ROOT', 
        label: { 
          en: 'Animals', 
          ar: 'الحيوانات' 
        } 
      },
      {
        id: 'GEOFENCE_ROOT',
        label: {
          en: 'Geofence',
          ar: 'السياج الجغرافي',
        },
      },
      {
        id: 'GPS_ROOT',
        label: {
          en: 'GPS Tracking',
          ar: 'تتبع GPS',
        },
      },
      {
        id: 'SUBSCRIPTION_ROOT',
        label: {
          en: 'Subscriptions',
          ar: 'الاشتراكات',
        },
      },
      {
        id: 'ECOMMERCE_ROOT',
        label: {
          en: 'Ecommerce',
          ar: 'التجارة الإلكترونية',
        },
      },
      {
        id: 'NOTIFICATION_ROOT',
        label: {
          en: 'Notifications',
          ar: 'الإشعارات',
        },
      },
      {
        id: 'TERMS_ROOT',
        label: {
          en: 'Terms & Conditions',
          ar: 'الشروط والأحكام',
        },
      },
      {
        id: 'PRIVACY_ROOT',
        label: {
          en: 'Privacy Policy',
          ar: 'سياسة الخصوصية',
        },
      },
      {
        id: 'ABOUT_ROOT',
        label: {
          en: 'About ALRAIE',
          ar: 'حول الراعي',
        },
      },
      {
        id: 'DATA_DELETION_ROOT',
        label: {
          en: 'Data Deletion',
          ar: 'حذف البيانات',
        },
      },
      {
        id: 'HELP_ROOT',
        label: {
          en: 'Help & Support',
          ar: 'المساعدة والدعم',
        },
      }
      // {
      //   id: 'ORDERS_ROOT',
      //   label: {
      //     en: 'Orders',
      //     ar: 'الطلبات',
      //   },
      // },
      // {
      //   id: 'ANIMALS_ROOT',
      //   label: {
      //     en: 'Animals',
      //     ar: 'الحيوانات',
      //   },
      // },
    ],
  },
};