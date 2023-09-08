import Overlay from '@/components/Overlay/Overlay';
import { groupRentalsByCategory } from '@/utils/groupRentalsByCategory';
import getOrganizationInfo from '@/sanity/lib/getOrganization';
import getAllRentalListings from '@/sanity/lib/getRentalListings';
import sanityUrlFor from '@/sanity/lib/sanityUrlFor';
import Typography from '@mui/material/Typography';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import ImgMediaCard from '@/components/Cards/ImgMediaCard';
import Button from '@mui/material/Button';

const orgInfo = await getOrganizationInfo();
const rentalListings = await getAllRentalListings();

export const metadata: Metadata = {
  title: `Rental Listings ${orgInfo.name}`,
  description: `Rental listings for ${orgInfo.name}`,
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
      <main className="pristine-dark-gradient grid grid-flow-row gap-12 max-w-[100vw] justify-center bg-secondary py-12 lg:px-8">
        <Typography
          component="h2"
          className="text-4xl lg:text-5xl font-bold px-4 lg:px-0 text-gold"
        >
          Choose your adventure!
        </Typography>
        {groupRentalsByCategory(rentalListings).map((group) => (
          <section key={group.category}>
            <Typography
              component="h3"
              className="text-2xl lg:text-3xl uppercase px-4 lg:px-0 mb-8"
            >
              {group.category}
            </Typography>
            <div className="grid grid-flow-row gap-8 lg:gap-16">
              {group.items.map((item) => (
                <Link
                  key={item.title}
                  href={!item.available ? '#' : `rentals/${item._id}`}
                >
                  <ImgMediaCard
                    title={item.title}
                    imgSrc={`${sanityUrlFor(item.images[0]?.asset).url()}`}
                    imgAlt={item.title}
                    maxWidth="100%"
                    imgHeight="275px"
                  >
                    <Button
                      disabled={!item.available}
                      size="large"
                      className="w-full h-16 text-base rounded-none text-white bg-primary group-hover:bg-accent uppercase"
                    >
                      {!item.available ? 'Unavailable' : 'See Details'}
                    </Button>
                  </ImgMediaCard>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </main>
    </>
  );
}
