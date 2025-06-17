import { type SchemaTypeDefinition } from 'sanity'
import { postType } from "@/sanity/schemaTypes/postType";
import { skillType } from './skillType';
import { projectType } from './projectType';
import { aboutType } from './aboutType';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    postType,
    skillType,
    projectType,
    aboutType,
  ],
}
