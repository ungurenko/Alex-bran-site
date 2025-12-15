export interface NavItem {
  label: string;
  href: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface PricingTier {
  name: string;
  price: string;
  features: string[];
  isRecommended: boolean;
  cta: string;
}

export interface ResultCardProps {
  number: string;
  title: string;
  description: string;
  inverse?: boolean;
}