import { RentalListing } from '@/types';
import { sanityClient } from './client';

export default async function getRentalDetails(
  id: string
): Promise<RentalListing> {
  const query = `*[_type == "rental" && _id == $id][0] {
    title,
    description,
    image,
    price,
    available,
    features
  }`;

  const params = { id };
  const rental = await sanityClient.fetch(query, params);

  return rental;
}
