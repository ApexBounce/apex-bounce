import { RentalListing } from '@/types';
import { sanityClient } from './client';

export default async function getAllRentalListings(): Promise<RentalListing[]> {
  const query = `*[_type == "rental"] {
  _id,
  category,
  title,
  description,
  image,
  price,
  available,
  features
}`;
  const rentalListings = await sanityClient.fetch(query);
  return rentalListings;
}
