import { BusinessValue } from '@/types';
import { sanityClient } from './client';

export default async function getBusinessValues(): Promise<BusinessValue[]> {
  const query = `*[_type == "value"] {
    _id,
    name,
    description
    }`;
  const businessValues = await sanityClient.fetch(query);
  return businessValues;
}
