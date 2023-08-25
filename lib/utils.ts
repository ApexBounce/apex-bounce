import { RentalListing } from '@/types';

export const groupRentalsByCategory = (
  items: RentalListing[]
): {
  category: string;
  items: RentalListing[];
}[] => {
  const categories = new Map<string, RentalListing[]>();

  for (const item of items) {
    const category = categories.get(item.category);
    if (category) {
      category.push(item);
    } else {
      categories.set(item.category, [item]);
    }
  }

  return Array.from(categories).map((group) => ({
    category: group[0],
    items: group[1],
  }));
};
