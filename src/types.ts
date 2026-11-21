export interface OptionItem {
  id: string;
  name: string;
  price: number;
}

export interface CustomizationRule {
  title: string;
  type: 'mandatory' | 'optional';
  min?: number;
  max?: number;
  options: OptionItem[];
}

export interface MenuItem {
  id: string;
  name: string;
  description?: string;
  category: string;
  image?: string;
  sizes?: {
    name: string;
    price: number;
  }[];
  price?: number; // For items without multiple sizes
  customizationRules?: CustomizationRule[];
  flavors?: OptionItem[]; // For items with specific flavor selection (e.g. ice creams, coxinhas)
  flavorMin?: number;
  flavorMax?: number;
}

export interface CartCustomization {
  selectedSize?: { name: string; price: number };
  selectedRules: {
    ruleTitle: string;
    selectedOptions: OptionItem[];
  }[];
  selectedFlavors?: OptionItem[];
  selectedAdditions: OptionItem[];
  observations?: string;
}

export interface CartItem {
  cartItemId: string;
  item: MenuItem;
  quantity: number;
  unitPrice: number;
  customization: CartCustomization;
  totalPrice: number;
}

export type PaymentMethod = 'Pix' | 'Dinheiro' | 'Cartão de Crédito (Aproximação)' | 'Cartão de Débito (Aproximação)';
export type OrderType = 'delivery' | 'pickup';
