import { type SchemaTypeDefinition } from 'sanity';
import organization from './schemas/organization';
import rental from './schemas/rental';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [organization, rental],
};
