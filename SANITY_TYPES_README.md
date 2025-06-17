# Sanity Types for Portfolio Project

This document explains how to use the TypeScript types defined for your Sanity schema models.

## Available Types

The following types have been defined in `sanity/lib/types.ts`:

### Base Types

- `SanityImage`: Represents a Sanity image with its asset reference and optional hotspot

### Document Types

- `Skill`: Represents a skill with a name and image
- `Project`: Represents a project with title, description, link, image, category, and technologies
- `Post`: Represents a blog post with title, slug, excerpt, publish date, read time, category, image, and body content
- `Hero`: Represents the hero section with name, title, description, profile image, and navigation buttons
- `About`: Represents the about section with title and paragraphs
- `Contact`: Represents contact information with email, optional Discord username, and social links
- `Footer`: Represents the footer with copyright text and navigation links

## How to Use These Types

### In Query Functions

The query functions in `sanity/lib/queries.ts` have been updated to use these types:

```typescript
// Example: Getting skills with proper typing
import { getSkills } from "@/sanity/lib/queries";
import { Skill } from "@/sanity/lib/types";

// The function is typed to return Promise<Skill[]>
const skills = await getSkills();
```

### In React Components

#### Server Components

```typescript
// In a server component
import { getSkills } from "@/sanity/lib/queries";
import { Skill } from "@/sanity/lib/types";
import { urlFor } from "@/sanity/lib/image";

export default async function SkillsComponent() {
  // skills is typed as Skill[]
  const skills = await getSkills();
  
  return (
    <div>
      {skills.map(skill => (
        <div key={skill._id}>
          <h3>{skill.name}</h3>
          <img src={urlFor(skill.image).url()} alt={skill.name} />
        </div>
      ))}
    </div>
  );
}
```

#### Client Components

```typescript
// In a client component
"use client";

import { useState, useEffect } from "react";
import { getSkills } from "@/sanity/lib/queries";
import { Skill } from "@/sanity/lib/types";
import { urlFor } from "@/sanity/lib/image";

export default function ClientSkillsComponent() {
  // Initialize state with the correct type
  const [skills, setSkills] = useState<Skill[]>([]);
  
  useEffect(() => {
    async function fetchSkills() {
      const skillsData = await getSkills();
      setSkills(skillsData);
    }
    
    fetchSkills();
  }, []);
  
  return (
    <div>
      {skills.map(skill => (
        <div key={skill._id}>
          <h3>{skill.name}</h3>
          <img src={urlFor(skill.image).url()} alt={skill.name} />
        </div>
      ))}
    </div>
  );
}
```

### Working with Sanity Images

Always use the `urlFor` helper function to convert Sanity image references to URLs:

```typescript
import { urlFor } from "@/sanity/lib/image";

// In a component
<img src={urlFor(skill.image).url()} alt={skill.name} />

// With Next.js Image component
<Image 
  src={urlFor(skill.image).url()} 
  alt={skill.name}
  width={100}
  height={100}
/>
```

## Type Safety Benefits

Using these types provides several benefits:

1. **Autocomplete**: Your IDE will suggest available properties when working with Sanity documents
2. **Error Prevention**: TypeScript will catch errors if you try to access properties that don't exist
3. **Refactoring Support**: When you rename fields in your schema, TypeScript will help identify places that need updates
4. **Documentation**: The types serve as documentation for your data structure

## Extending Types

If you need to add new fields to your schema, make sure to update the corresponding type in `sanity/lib/types.ts`.

Example:

```typescript
// If you add a "level" field to your skill schema
export interface Skill extends SanityDocument {
  _type: 'skill';
  name: string;
  image: SanityImage;
  level: number; // New field
}
```
