// Sanity image type
export interface SanityImage {
  _type: 'image';
  asset: {
    _type: 'reference';
    _ref: string;
  };
  hotspot?: {
    x: number;
    y: number;
    height: number;
    width: number;
  };
}

// Base document type with common fields
interface SanityDocument {
  _id: string;
  _type: string;
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
}

// Skill type
export interface Skill extends SanityDocument {
  _type: 'skill';
  name: string;
  image: SanityImage;
}

// Project type
export interface Project extends SanityDocument {
  _type: 'project';
  title: string;
  description: string;
  link: string;
  image: SanityImage;
  category: 'web' | 'ai' | 'data';
  techs: string[];
  order?: number;
}

// Post/Blog type
export interface Post extends SanityDocument {
  _type: 'post';
  title: string;
  slug: {
    _type: 'slug';
    current: string;
  };
  excerpt: string;
  publishedAt: string;
  readTime: number;
  category: 'web development' | 'ai' | 'data science';
  image: SanityImage;
  body: any[]; // This is a portable text array
}

// Hero type
export interface Hero extends SanityDocument {
  _type: 'hero';
  name: string;
  title: string;
  description: string;
  profileImage: SanityImage;
  buttons?: {
    label: string;
    link: string;
  }[];
}

// About type
export interface About extends SanityDocument {
  _type: 'about';
  title: string;
  paragraphs: string[];
}

// Contact type
export interface Contact extends SanityDocument {
  _type: 'contact';
  email: string;
  discord?: string;
  socialLinks: {
    name: string;
    url: string;
    customName?: string;
  }[];
}

// Footer type
export interface Footer extends SanityDocument {
  _type: 'footer';
  copyright: string;
  links?: {
    label: string;
    url: string;
  }[];
}
