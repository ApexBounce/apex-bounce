import Overlay from '@/components/Overlay/Overlay';
import getAllRentalListings from '@/sanity/lib/getRentalListings';
import sanityUrlFor from '@/sanity/lib/sanityUrlFor';
import { RentalListing } from '@/types';
import {
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Typography,
} from '@mui/material';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

const rentalListings = await getAllRentalListings();

export const metadata: Metadata = {
  title: 'Rental Listings',
  description: `Rental listings.`,
};

const getLink = (title: string): string => {
  return title.trim().toLowerCase().replaceAll(' ', '-');
};

const groupByCategory = (
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

export default async function RentalListings() {
  return (
    <>
      <div className="relative h-[33dvh] lg:h-[75dvh]">
        <Image
          src={'/images/home_bg.jpg'}
          alt="Kids playing on an inflatable"
          fill
          priority
          className="z-0 object-cover"
        />
        <Overlay>
          <Typography
            component="h1"
            className="text-5xl lg:text-9xl absolute top-1/2 left-1/4 transform -translate-x-1/4 -translate-y-1/2 uppercase"
          >
            Rental Listings
          </Typography>
        </Overlay>
      </div>
      <main className="grid grid-flow-row gap-12 max-w-[100vw] items-center justify-center bg-secondary py-12 px-4 lg:px-8">
        <Typography component="h2" className="text-4xl lg:text-5xl font-bold">
          Choose your adventure!
        </Typography>
        {groupByCategory(rentalListings).map((group) => (
          <section key={group.category} className="w-full overflow-hidden">
            <Typography
              component="h3"
              className="text-2xl lg:text-3xl uppercase mb-4"
            >
              {group.category}
            </Typography>
            <ImageList
              className="no-scrollbar overflow-scroll h-fit w-full"
              sx={{ width: 500, height: 450 }}
              gap={16}
            >
              {group.items.map((item) => (
                <Link
                  key={item.title}
                  href={`rental-listings/${getLink(item.title)}`}
                >
                  <ImageListItem className="group w-[300px] max-w-[80vw]">
                    <div className="relative overflow-hidden w-full h-[250px]">
                      <Image
                        src={`${sanityUrlFor(item.image).url()}`}
                        alt={item.title}
                        fill
                        sizes="300px"
                        className="object-cover transform transition duration-500 group-hover:scale-110"
                      />
                    </div>
                    <ImageListItemBar
                      title={item.title}
                      position="below"
                      className="group-hover:bg-accent transform transition duration-500 bg-primary text-white uppercase text-center p-4 pb-[10px]"
                    />
                  </ImageListItem>
                </Link>
              ))}
            </ImageList>
          </section>
        ))}
      </main>
    </>
  );
}
