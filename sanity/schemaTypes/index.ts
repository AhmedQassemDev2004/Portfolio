import { type SchemaTypeDefinition } from 'sanity'
import { postType } from "@/sanity/schemaTypes/postType";
import { skillType } from './skillType';
import { projectType } from './projectType';
import { heroType } from './heroType';
import { aboutType } from './aboutType';
import { contactType } from './contactType';
import { footerType } from './footerType';
import { contactSubmissionType } from './contactSubmissionType';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    postType,
    skillType,
    projectType,
    heroType,
    aboutType,
    contactType,
    footerType,
    contactSubmissionType
  ],
}
