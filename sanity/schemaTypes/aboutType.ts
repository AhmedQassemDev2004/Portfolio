import { defineType, defineField } from "sanity"

export const aboutType = defineType({
    name: "about",
    title: "About Section",
    type: "document",
    fields: [
        defineField({
            name: "title",
            type: "string",
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: "paragraphs",
            type: "array",
            of: [{ type: "text" }],
            description: "Add paragraphs for your about section",
            validation: (rule) => rule.required().min(1),
        }),
    ],
    preview: {
        select: {
            title: "title",
        },
    },
});
