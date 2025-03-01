export interface FAQ {
  id: string;
  question: string;
  answer: string;
  order: number;
  created_at?: string;
  updated_at?: string;
}

export interface FAQCustomerInquiry {
  id?: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  message: string;
  status?: string;
  created_at?: string;
}