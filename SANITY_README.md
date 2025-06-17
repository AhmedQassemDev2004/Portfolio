# Sanity Backend for Portfolio Project

This document provides instructions on how to use the Sanity backend for your portfolio project.

## Setup

1. Make sure you have the following environment variables set in your `.env.local` file:

```
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
```

2. Access the Sanity Studio at `/studio` route in your application.

## Schema Types

The following schema types have been created for your portfolio:

### 1. Hero Section
- **Name**: Your name
- **Title**: Your professional title
- **Description**: A brief description about yourself
- **Profile Image**: Your profile picture
- **Buttons**: Navigation buttons for your hero section

### 2. About Section
- **Title**: Section title
- **Paragraphs**: Multiple paragraphs for your about section

### 3. Skills
- **Name**: Skill name
- **Image**: Skill logo/image

### 4. Projects
- **Title**: Project title
- **Description**: Project description
- **Link**: Project URL
- **Image**: Project image
- **Category**: Project category (Web Development, AI, Data Science)
- **Technologies**: Array of technologies used
- **Order**: Display order

### 5. Blog Posts
- **Title**: Post title
- **Slug**: URL-friendly identifier
- **Excerpt**: Short summary
- **Published At**: Publication date
- **Read Time**: Estimated reading time in minutes
- **Category**: Post category
- **Image**: Featured image
- **Body**: Rich text content

### 6. Contact Information
- **Email**: Your email address
- **Discord**: Your Discord username (optional)
- **Social Links**: Array of social media links

### 7. Footer
- **Copyright**: Copyright text
- **Links**: Footer navigation links

## Using Dynamic Components

Example dynamic components have been created in the `components/examples` directory:

- `DynamicHero.tsx`: Fetches and displays hero section data
- `DynamicAbout.tsx`: Fetches and displays about section data
- `DynamicSkills.tsx`: Fetches and displays skills data
- `DynamicProjects.tsx`: Fetches and displays projects data
- `DynamicBlog.tsx`: Fetches and displays blog posts data
- `DynamicContact.tsx`: Fetches and displays contact information

To use these components, replace the static components in your `app/page.tsx` file:

```tsx
// Replace
import Hero from "@/components/Hero";
// With
import Hero from "@/components/examples/DynamicHero";

// And so on for other components
```

## Querying Data

The `sanity/lib/queries.ts` file contains functions for fetching data from Sanity:

```tsx
// Example: Fetching projects by category
import { getProjectsByCategory } from "@/sanity/lib/queries";

// In a React component
const projects = await getProjectsByCategory("web");
```

## Images

To display Sanity images, use the `urlFor` helper function:

```tsx
import { urlFor } from "@/sanity/lib/image";

// In a React component
<img src={urlFor(imageObject).url()} alt="Description" />
```

## Adding Content

1. Navigate to `/studio` in your application
2. Log in with your Sanity credentials
3. Use the Sanity Studio interface to add and edit content
4. Your changes will be reflected in your application

## Deployment

When deploying your application, make sure to:

1. Set the required environment variables in your hosting platform
2. Deploy both your Next.js application and Sanity Studio

## Troubleshooting

- If images don't load, check that your Sanity project settings allow CORS from your domain
- If data doesn't update, try clearing your browser cache or using the `useCdn: false` option in the Sanity client configuration

For more information, refer to the [Sanity documentation](https://www.sanity.io/docs).
