export enum InquiryType {
  QUOTE = "QUOTE",
  DEALER = "DEALER",
  OEM_ODM = "OEM_ODM",
  TECHNICAL = "TECHNICAL",
  WARRANTY = "WARRANTY",
  PARTNERSHIP = "PARTNERSHIP"
}

export interface Dealer {
  id: string;
  name: string;
  address: string;
  phone: string;
  email?: string;
  region: "North" | "Central" | "South";
  description: string;
  lat: number;
  lng: number;
}

export interface SocialPost {
  id: string;
  type: "Video" | "Post" | "Update";
  title: string;
  thumbnail: string;
  link: string;
  category: "Product Test" | "Dealer Activity" | "Factory Insight" | "Technical Guide";
}
