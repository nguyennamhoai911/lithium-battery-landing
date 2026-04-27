/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Article {
  id: string;
  category: string;
  title: string;
  subtitle: string;
  author: string;
  publishDate: string;
  readingTime: string;
  heroImage: {
    url: string;
    ratio: '16:9' | '4:3';
  };
  takeaways: {
    title: string;
    description: string;
  }[];
  content: ContentBlock[];
}

export type ContentBlock = 
  | { type: 'paragraph'; headingSmall?: string; headingLarge?: string; body: string }
  | { type: 'image'; url: string; ratio: '16:9' | '4:3' | '1:1'; caption?: string }
  | { type: 'video'; url: string; poster?: string; title: string }
  | { type: 'table'; title: string; headers: string[]; rows: string[][] }
  | { type: 'file'; title: string; format: string; size: string; downloadUrl: string }
  | { type: 'quote'; text: string; author?: string };

export interface Product {
  id: string;
  name: string;
  useCase: string;
  imageUrl: string;
  link: string;
}

export interface RelatedArticle {
  id: string;
  title: string;
  imageUrl: string;
  category: string;
}
