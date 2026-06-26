export type Language = 'en' | 'ar';

export type ChatbotNodeType =
  | 'menu'
  | 'text'
  | 'html'
  | 'api'
  | 'redirect';

export interface ChatbotButton {
  id: string;
  label: {
    en: string;
    ar: string;
  };
}

export interface ChatbotNode {
  id: string;

  type: ChatbotNodeType;

  message?: {
    en: string;
    ar: string;
  };

  buttons?: ChatbotButton[];

  api?: {
    url: string;
    method: 'GET';
  };

  redirect?: string;
  redirectWeb?: string;
}