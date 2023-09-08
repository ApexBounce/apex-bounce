import { FAQ } from '@/app/_types';
import { sanityClient } from './client';

export default async function getFAQs(): Promise<FAQ[]> {
  const query = `*[_type == "faqs"]`;
  const faqs = await sanityClient.fetch(query);
  return faqs;
}
