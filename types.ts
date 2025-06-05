export interface NavLink {
  label: string;
  path: string;
}

export interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  longDescription: string;
  features: string[];
  benefits: string[];
  imageUrl?: string; // Optional: e.g., 'https://picsum.photos/seed/product-{id}/600/400'
  relatedServiceIds?: string[];
}

export interface Service {
  id: string;
  name: string;
  tagline: string;
  description: string;
  longDescription: string;
  process?: string[]; // Steps in the service
  benefits: string[];
  imageUrl?: string; // Optional
  relatedProductIds?: string[];
}

export interface CaseStudy {
  id: string;
  title: string;
  clientName?: string;
  industry?: string;
  challenge: string;
  solution: string;
  results: string[];
  technologiesUsed?: string[];
  imageUrl?: string; // Optional
  relatedProductIds?: string[];
  relatedServiceIds?: string[];
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'ai';
  text: string;
  timestamp: Date;
}

export interface GroundingChunk {
  web?: {
    uri?: string;
    title?: string;
  };
  retrievedPassage?: {
    uri?: string;
    title?: string;
  };
}

export interface AIAssistantData {
  products: Product[];
  services: Service[];
}