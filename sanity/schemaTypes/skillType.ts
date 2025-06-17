import { defineType, defineField } from "sanity"

export const skillType = defineType({
    name:"skill",
    title:"Skill",
    type:"document",
    fields: [
        defineField({
            name:"name",
            type:"string",
            validation: (rule) => rule.required(),
        }),
        defineField({
            name:"image",
            type:"image",
        })
    ]
});