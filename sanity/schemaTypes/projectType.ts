import { defineType, defineField } from "sanity"

export const projectType = defineType({
    name: "project",
    title: "Project",
    type: "document",
    fields: [
        defineField({
            name: "title",
            type: "string",
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: "description",
            type: "text",
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: "link",
            type: "url",
            validation: (rule) => rule.required(),
        }),
        defineField({
            name:"images",
            title:"Images",
            type:"array", 
            of: [
                {
                    type:"image",
                    options:{
                        hotspot:true
                    }
                }
            ],
            validation: rule => rule.required().min(1)
        }),
        defineField({
            name: "category",
            type: "string",
            options: {
                list: [
                    { title: "Web Development", value: "web" },
                    { title: "AI", value: "ai" },
                ],
            },
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: "order",
            type: "number",
            description: "Order in which this project should appear",
        }),
        defineField({
            name: "skills",
            title: "Skills",
            type: "array",
            of: [
              {
                type: "reference",
                to: [{ type: "skill" }],
              },
            ],
          }),
      
    ],
    preview: {
        select: {
            title: "title",
            media: "image",
            category: "category",
        },
        prepare({ title, media, category }) {
            return {
                title,
                subtitle: `Category: ${category}`,
                media,
            }
        },
    },
});
