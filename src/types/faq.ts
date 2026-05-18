export type FaqDefinitionItem = {
  title: string;
  description: string;
  example?: string;
};

export type FaqAnswerBlock =
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[] }
  | { type: "ordered-list"; items: string[] }
  | { type: "definition-list"; items: FaqDefinitionItem[] };

export type FaqItem = {
  question: string;
  answer: FaqAnswerBlock[];
};

export type FaqCategory = {
  title: string;
  items: FaqItem[];
};
