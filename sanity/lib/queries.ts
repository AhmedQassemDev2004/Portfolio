import { client } from '../client';
import {
  Hero,
  About,
  Skill,
  Project,
  Post,
  Contact,
  Footer
} from './types';

// Hero section queries
export async function getHero(): Promise<Hero> {
  return client.fetch(`*[_type == "hero"][0]`);
}

// About section queries
export async function getAbout(): Promise<About> {
  return client.fetch(`*[_type == "about"][0]`);
}

// Skills queries
export async function getSkills(): Promise<Skill[]> {
  return client.fetch(`*[_type == "skill"] | order(_createdAt asc)`);
}

// Projects queries
export async function getProjects(): Promise<Project[]> {
  return client.fetch(`*[_type == "project"] | order(order asc)`);
}

export async function getProjectsByCategory(category: string): Promise<Project[]> {
  if (category === "ALL") {
    return getProjects();
  }

  return client.fetch(`*[_type == "project" && category == $category] | order(order asc)`, {
    category: category.toLowerCase(),
  });
}

// Blog/Post queries
export async function getPosts(limit?: number): Promise<Post[]> {
  const query = `*[_type == "post"] | order(publishedAt desc)${limit ? `[0...${limit}]` : ''}`;
  return client.fetch(query);
}

export async function getPostsByCategory(category: string, limit?: number): Promise<Post[]> {
  if (category === "ALL") {
    return getPosts(limit);
  }

  const query = `*[_type == "post" && category == $category] | order(publishedAt desc)${limit ? `[0...${limit}]` : ''}`;
  return client.fetch(query, {
    category: category.toLowerCase(),
  });
}

export async function getPostBySlug(slug: string): Promise<Post> {
  return client.fetch(`*[_type == "post" && slug.current == $slug][0]`, {
    slug,
  });
}

// Contact queries
export async function getContact(): Promise<Contact> {
  return client.fetch(`*[_type == "contact"][0]`);
}

// Footer queries
export async function getFooter(): Promise<Footer> {
  return client.fetch(`*[_type == "footer"][0]`);
}
