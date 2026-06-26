import { aboutTopic } from '../topics/about.topic';
import { accountTopic } from '../topics/account.topic';
import { animalsTopic } from '../topics/animals.topic';
import { assistantTopic } from '../topics/assistant.topic';
import { dataDeletionTopic } from '../topics/dataDeletion.topic';
import { ecommerceTopic } from '../topics/ecommerce.topic';
import { geofenceTopic } from '../topics/geofence.topic';
import { gpsTopic } from '../topics/gps.topic';
import { helpTopic } from '../topics/help.topic';
import { notificationTopic } from '../topics/notification.topic';
import { privacyTopic } from '../topics/privacy.topic';
import { rootTopic } from '../topics/root.topic';
import { subscriptionTopic } from '../topics/subscription.topic';
import { termsTopic } from '../topics/terms.topic';
import { Language } from '../types/chatbot.types';
import axios from 'axios';



export const getChatbotNode = async (
  nodeId: string = "CHATBOT_ROOT",
  lang: Language = 'en'
) => {
  const chatbotTree = {
    ...rootTopic,
    ...accountTopic,
    ...assistantTopic,
    ...animalsTopic,
    ...geofenceTopic,
    ...gpsTopic,
    ...subscriptionTopic,
    ...ecommerceTopic,
    ...notificationTopic,
    ...termsTopic,
    ...privacyTopic,
    ...aboutTopic,
    ...dataDeletionTopic,
    ...helpTopic,
  };
  const node = chatbotTree[nodeId];

  if (!node) {
    return {
      message: lang === 'ar' ? 'غير موجود' : 'Not found',
      success: false,
    };
  }

  if (node.type === 'api' && node.api) {
    try {
      const response = await axios.get(node.api.url, {
        params: { lang },
      });

      return {
        type: 'html',
        html: response.data.html,
        success: true,
      };
    } catch (e) {
      return {
        message:
          lang === 'ar'
            ? 'تعذر تحميل الشروط'
            : 'Unable to load terms',
        success: false,
      };
    }
  }

  return {
    type: node.type,
    message: node.message?.[lang] || null,
    buttons: node.buttons?.map((b) => ({
      id: b.id,
      label: b.label[lang],
    })),
    redirect: node.redirect || null,
    redirectWeb: node.redirectWeb || null,
    success: true,
  };
};