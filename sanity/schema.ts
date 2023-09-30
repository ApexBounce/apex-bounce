import { type SchemaTypeDefinition } from 'sanity';
import organization from './schemas/organization';
import rental from './schemas/rental';
import faqs from './schemas/faqs';
import aboutUsSection from './schemas/aboutUsSection';
import aboutUsSummary from './schemas/aboutUsSummary';
import staffMember from './schemas/staffMember';
import value from './schemas/value';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    organization,
    rental,
    aboutUsSummary,
    aboutUsSection,
    staffMember,
    value,
    faqs,
  ],
};
