import {defineField, defineType} from 'sanity'

export const postType = defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {source: 'title'},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'excerpt',
      type: 'text',
      description: 'A short summary of the blog post',
      validation: (rule) => rule.required().max(200),
    }),
    defineField({
      name: 'publishedAt',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'readTime',
      type: 'number',
      description: 'Estimated reading time in minutes',
      validation: (rule) => rule.required().min(1),
    }),
    defineField({
      name: 'category',
      type: 'string',
      options: {
        list: [
          { title: 'Web Development', value: 'web development' },
          { title: 'AI', value: 'ai' },
          { title: 'Data Science', value: 'data science' },
        ],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'body',
      type: 'array',
      of: [{type: 'block'}],
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'category',
      media: 'image',
    },
  },
})