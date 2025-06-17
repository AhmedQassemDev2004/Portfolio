import { defineType, defineField } from "sanity"

export const heroType = defineType({
    name: "hero",
    title: "Hero Section",
    type: "document",
    fields: [
        defineField({
            name: "name",
            type: "string",
            description: "Your name",
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: "title",
            type: "string",
            description: "Your professional title",
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: "description",
            type: "text",
            description: "A brief description about yourself",
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: "profileImage",
            type: "image",
            options: {
                hotspot: true,
            },
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: "buttons",
            type: "array",
            of: [
                {
                    type: "object",
                    fields: [
                        {
                            name: "label",
                            type: "string",
                            validation: (rule) => rule.required(),
                        },
                        {
                            name: "link",
                            type: "string",
                            validation: (rule) => rule.required(),
                        },
                    ],
                },
            ],
        }),
    ],
    preview: {
        select: {
            title: "name",
            subtitle: "title",
            media: "profileImage",
        },
    },
});
