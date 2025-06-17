import { defineType, defineField } from "sanity"

export const footerType = defineType({
    name: "footer",
    title: "Footer",
    type: "document",
    fields: [
        defineField({
            name: "copyright",
            type: "string",
            description: "Copyright text",
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: "links",
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
                            name: "url",
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
            title: "copyright",
        },
        prepare({ title }) {
            return {
                title: "Footer",
                subtitle: title,
            }
        },
    },
});
