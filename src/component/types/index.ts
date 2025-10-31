// src/types/index.ts

// 🔹 Represents each feature item (e.g., icon, title, description)
export interface FeatureItem {
  backgroundImage?: string;
  textColor: string;
  icon?: string; // Can be an emoji, image path, or icon name
  title: string;
  description: string;
  background?: string; // <-- Add this line
}
// 🔹 Represents each benefit item (e.g., icon, title, description)
export interface BenefitItem {
  image: any;
  icon: string;
  title: string;
  description: string;
  stats?: string; // Optional stats or highlights
}

// 🔹 Page-level structure for section data (you can extend this later)
export interface PageData {
  // Header section
  header_title?: string;
  header_subtitle?: string;
  header_description?: string;
  header_cta_primary?: string;
  header_cta_secondary?: string;

  // Features & Benefits
  features_list?: FeatureItem[];
  benefits_list?: BenefitItem[];

  // Future sections (optional for now)
  cta_title?: string;
  cta_description?: string;
  testimonials?: {
    quote: string;
    name: string;
    title: string;
    company: string;
    rating: number;
  }[];

  // Any other optional metadata
  [key: string]: any;
}

// 🔹 Props for each section component
export interface SectionProps {
  data: PageData;
  className?: string;
}
