import { Request, Response } from 'express';
import { getChatbotNode } from '../services/chatbot.service';
import { detectUserIntent } from '../services/aiIntent.service';
import { resolveAIIntent } from '../services/aiDataResolver.service';;

type Language = 'en' | 'ar';

export const chatbot = async (req: Request, res: Response) => {
  try {
    let { nodeId, lang, message } = req.body;

    let language: Language = req?.language == "ar" ? "ar" : "en";

    if (lang && typeof lang === "string" && ["en", "ar"].includes(lang)) {
      language = lang as Language;
    }

    if (message && typeof message !== "string") {
      return res.status(400).json({
        success: false,
        message: req.t("CHATBOT_INVALID_MESSAGE"),
      });
    }

    if (message && typeof message === "string") {

      if (message.length > 1000) {
        return res.status(400).json({
          success: false,
          message: req.t("CHATBOT_MESSAGE_TOO_LONG"),
        });
      }

      const intentData = await detectUserIntent(message);

      if (intentData.confidence < 0.5) {
        return res.json({
          success: true,
          message: req.t("CHATBOT_NOT_UNDERSTOOD"),
        });
      }

      const aiResponse = await resolveAIIntent(
        (req as any)?.user?.id,
        intentData,
        (req as any)?.subscription,
        language
      );

      if (aiResponse) {
        return res.json({
          success: true,
          type: "text",
          message: aiResponse,
        });
      }

    }

    if (!nodeId || typeof nodeId !== "string") {
      nodeId = "CHATBOT_ROOT";
    }

    const result = await getChatbotNode(nodeId, language);

    // service returned error
    if (!result) {
      return res.status(404).json({
        success: false,
        message: req.t("CHATBOT_NODE_NOT_FOUND"),
      });
    }

    return res.json(result);
  } catch (error: any) {
    console.error('Chatbot Error:', error);

    return res.status(500).json({
      success: false,
      message: req.t("CHATBOT_INTERNAL_ERROR"),
    });
  }
};