import { defineType, defineField } from "sanity"

export const contactType = defineType({
    name: "contact",
    title: "Contact Information",
    type: "document",
    fields: [
        defineField({
            name: "email",
            type: "string",
            validation: (rule) => rule.required().email(),
        }),
        defineField({
            name: "discord",
            type: "string",
        }),
        defineField({
            name: "socialLinks",
            type: "array",
            of: [
                {
                    type: "object",
                    fields: [
                        {
                            name: "name",
                            type: "string",
                            options: {
                                list: [
                                    { title: "GitHub", value: "GitHub" },
                                    { title: "LinkedIn", value: "LinkedIn" },
                                    { title: "Twitter", value: "Twitter" },
                                    { title: "Instagram", value: "Instagram" },
                                    { title: "Facebook", value: "Facebook" },
                                    { title: "YouTube", value: "YouTube" },
                                    { title: "Discord", value: "Discord" },
                                    { title: "Other", value: "Other" },
                                ],
                            },
                            validation: (rule) => rule.required(),
                        },
                        {
                            name: "url",
                            type: "url",
                            validation: (rule) => rule.required(),
                        },
                        {
                            name: "customName",
                            type: "string",
                            description: "Only fill this if you selected 'Other' as the name",
                        },
                    ],
                },
            ],
            validation: (rule) => rule.required(),
        }),
    ],
    preview: {
        select: {
            title: "email",
        },
        prepare({ title }) {
            return {
                title: "Contact Information",
                subtitle: title,
            }
        },
    },
});
