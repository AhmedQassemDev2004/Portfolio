import { Rule } from '@sanity/types'

export default {
  name: 'about',
  title: 'About',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'paragraphs',
      title: 'Paragraphs',
      type: 'array',
      of: [{ type: 'text' }],
      validation: (Rule: Rule) => Rule.required().min(1),
    },
    {
      name: 'location',
      title: 'Location',
      type: 'string',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'yearsOfExperience',
      title: 'Years of Experience',
      type: 'number',
      validation: (Rule: Rule) => Rule.required().min(0),
    },
  ],
} 