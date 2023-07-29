import { type SchemaTypeDefinition } from 'sanity';
import organization from './schemas/organization';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [organization],
};
