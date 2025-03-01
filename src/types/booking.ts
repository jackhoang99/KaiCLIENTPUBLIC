export interface Package {
  id: string;
  title: string;
  price: number;
  description: string;
  features: string[];
  perks?: string[];
  type: 'membership' | 'class';
  stripeLink: string;
}

export interface SelectedPackage extends Package {
  quantity?: number; // For class packages
}