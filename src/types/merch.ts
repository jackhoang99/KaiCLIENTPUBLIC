export type MerchCategory = 'apparel' | 'accessories' | 'equipment';

export interface MerchItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: MerchCategory;
  image_url: string;
  available: boolean;
  stock_status: string;
  order: number;
  created_at?: string;
  updated_at?: string;
}