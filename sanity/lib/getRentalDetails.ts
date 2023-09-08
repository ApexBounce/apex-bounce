import { RentalListing } from '@/app/_types';
import { sanityClient } from './client';

export default async function getRentalDetails(
  id: string
): Promise<RentalListing> {
  const query = `*[_type == "rental" && _id == $id][0] {
    _id,
    title,
    description,
    images,
    price,
    available,
    features
  }`;

  const params = { id };
  const rental = await sanityClient.fetch(query, params);

  return rental;
}
