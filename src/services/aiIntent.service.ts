import OpenAI from "openai";
import dotenv from 'dotenv';

dotenv.config();
const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
});

export type AIIntent =
  | "GET_TOTAL_ANIMALS"
  | "GET_MALE_ANIMALS"
  | "GET_FEMALE_ANIMALS"
  | "GET_ANIMAL_STATUS"
  | "GET_ANIMAL_DETAILS"
  | "GET_SUBSCRIPTION"
  | "GET_REMAINING_QUOTA"
  | "GET_LATEST_ORDER"
  | "TRACK_LATEST_ORDER"
  | "GET_ORDER_BY_ID"
  | "GET_ANIMAL_LOCATION"   
  | "GET_GPS_DETAILS" 
  | "UNKNOWN"
  | "RESTRICTED";

export interface AIIntentResponse {
  intent: AIIntent;
  confidence: number;
  meta?: {
    status?: "active" | "sold" | "dead" | "lost";
  };
  originalMessage?: string;
}

export const detectUserIntent = async (
  message: string
): Promise<AIIntentResponse> => {
  try {
    const prompt = `
You are an intent classifier for an animal management app.

The user can speak in English OR Arabic.

Rules:
- Only return JSON
- Do NOT explain anything
- Detect user's intent strictly

Allowed intents:
- GET_TOTAL_ANIMALS
- GET_MALE_ANIMALS
- GET_FEMALE_ANIMALS
- GET_ANIMAL_STATUS (requires status: active/sold/dead/lost)
- GET_SUBSCRIPTION
- GET_REMAINING_QUOTA
- GET_ANIMAL_DETAILS (when user asks about specific animal using ID)
- GET_LATEST_ORDER (latest order details)
- GET_ORDER_BY_ID (get order details using #orderId)
- TRACK_LATEST_ORDER (latest order tracking / shipment status)
- GET_ANIMAL_LOCATION (get latest GPS location using animal ID)
- GET_GPS_DETAILS (get GPS device details using serial number OR animal ID)
- IMPORTANT: User must provide ID starting with # (e.g. #AN-12345 or #12345)
- IMPORTANT: If user provides status in Arabic, convert it to:
  - "dead"
  - "sold"
  - "lost"
  - "active"
- IMPORTANT: For GPS & Animal location → ID MUST start with #

Restricted intents (VERY IMPORTANT):
- password
- email change
- personal sensitive data

If restricted → return "RESTRICTED"
If not matching → return "UNKNOWN"

--------------------------------
ENGLISH EXAMPLES:

User: "how many animals I have"
→ { "intent": "GET_TOTAL_ANIMALS", "confidence": 0.95 }

User: "how many dead animals"
→ { "intent": "GET_ANIMAL_STATUS", "meta": { "status": "dead" }, "confidence": 0.95 }

User: "my password"
→ { "intent": "RESTRICTED", "confidence": 1 }

User: "show animal #AN-12345"
→ { "intent": "GET_ANIMAL_DETAILS", "confidence": 0.95 }

User: "show animal"
→ { "intent": "GET_ANIMAL_DETAILS", "confidence": 0.6 }

User: "my latest order"
→ { "intent": "GET_LATEST_ORDER", "confidence": 0.95 }

User: "track my order"
→ { "intent": "TRACK_LATEST_ORDER", "confidence": 0.95 }

User: "show order #65f1a2b3c4d5e6f7a8b9c0d1"
→ { "intent": "GET_ORDER_BY_ID", "confidence": 0.95 }

User: "get order #1234567890abcdef12345678"
→ { "intent": "GET_ORDER_BY_ID", "confidence": 0.95 }

User: "show location #AN-12345"
→ { "intent": "GET_ANIMAL_LOCATION", "confidence": 0.95 }

User: "where is my animal #AN-12345"
→ { "intent": "GET_ANIMAL_LOCATION", "confidence": 0.95 }

User: "gps details #GPS12345"
→ { "intent": "GET_GPS_DETAILS", "confidence": 0.95 }

User: "gps details #AN-12345"
→ { "intent": "GET_GPS_DETAILS", "confidence": 0.95 }

--------------------------------
ARABIC EXAMPLES:

User: "كم عدد الحيوانات لدي"
→ { "intent": "GET_TOTAL_ANIMALS", "confidence": 0.95 }

User: "كم عدد الحيوانات النافقة"
→ { "intent": "GET_ANIMAL_STATUS", "meta": { "status": "dead" }, "confidence": 0.95 }

User: "ما هي كلمة المرور الخاصة بي"
→ { "intent": "RESTRICTED", "confidence": 1 }

User: "اعرض الحيوان #AN-12345"
→ { "intent": "GET_ANIMAL_DETAILS", "confidence": 0.95 }

User: "اعرض الحيوان"
→ { "intent": "GET_ANIMAL_DETAILS", "confidence": 0.6 }


User: "آخر طلب لدي"
→ { "intent": "GET_LATEST_ORDER", "confidence": 0.95 }

User: "تتبع طلبي"
→ { "intent": "TRACK_LATEST_ORDER", "confidence": 0.95 }

User: "اعرض الطلب #65f1a2b3c4d5e6f7a8b9c0d1"
→ { "intent": "GET_ORDER_BY_ID", "confidence": 0.95 }

User: "تفاصيل الطلب #1234567890abcdef12345678"
→ { "intent": "GET_ORDER_BY_ID", "confidence": 0.95 }

User: "موقع الحيوان #AN-12345"
→ { "intent": "GET_ANIMAL_LOCATION", "confidence": 0.95 }

User: "تفاصيل جهاز GPS #GPS12345"
→ { "intent": "GET_GPS_DETAILS", "confidence": 0.95 }

--------------------------------

User: "${message}"
`;

    const completion = await client.chat.completions.create({
      model: "gpt-5-mini",
      messages: [{ role: "user", content: prompt }],
      response_format: { type: "json_object" },
    });

    let parsed: any = {};

    try {
      parsed = JSON.parse(completion.choices[0].message.content || "{}");
    } catch {
      return { intent: "UNKNOWN", confidence: 0 };
    }

    return {
      intent: parsed.intent || "UNKNOWN",
      confidence: parsed.confidence || 0,
      meta: parsed.meta || {},
      originalMessage: message,
    };
  } catch (error) {
    console.error("AI Intent Error:", error);
    return { intent: "UNKNOWN", confidence: 0 };
  }
};