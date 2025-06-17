import { defineType, defineField } from "sanity"

export const contactSubmissionType = defineType({
    name: "contactSubmission",
    title: "Contact Submission",
    type: "document",
    fields: [
        defineField({
            name: "name",
            type: "string",
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: "email",
            type: "string",
            validation: (rule) => rule.required().email(),
        }),
        defineField({
            name: "subject",
            type: "string",
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: "message",
            type: "text",
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: "submittedAt",
            type: "datetime",
            initialValue: () => new Date().toISOString(),
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: "status",
            type: "string",
            options: {
                list: [
                    { title: "New", value: "new" },
                    { title: "Read", value: "read" },
                    { title: "Replied", value: "replied" },
                ],
            },
            initialValue: "new",
            validation: (rule) => rule.required(),
        }),
    ],
    preview: {
        select: {
            title: "name",
            subtitle: "email",
            status: "status",
        },
        prepare({ title, subtitle, status }) {
            return {
                title: `${title} (${status})`,
                subtitle,
            }
        },
    },
}); 