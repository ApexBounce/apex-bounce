import { RentalListing } from '@/app/_types';
import { sanityClient } from './client';

type Props =
  | {
      onlyAvailableItems?: boolean;
    }
  | undefined;

export default async function getAllRentalListings(
  props?: Props
): Promise<RentalListing[]> {
  const query = `*[_type == "rental"${
    props?.onlyAvailableItems ? ` && available == true` : ''
  }] {
  _id,
  category,
  title,
  description,
  images,
  price,
  available,
  features
}`;
  const rentalListings = await sanityClient.fetch(query);
  return rentalListings;
}
