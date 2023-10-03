import Overlay from '@/components/Overlay/Overlay';
import getOrganizationInfo from '@/sanity/lib/getOrganization';
import getAllRentalListings from '@/sanity/lib/getRentalListings';
import { Typography } from '@mui/material';
import { Metadata } from 'next';
import Image from 'next/image';
import RentalsSummary from '@/components/Rentals/RentalsSummary';
import FaqsSummary from '@/components/FAQs/FaqsSummary';
import AboutUsSummary from '@/components/AboutUs/AboutUsSummary';
import getAboutUsSummary from '@/sanity/lib/getAboutUsSummary';
import ContactUsSummary from '@/components/ContactUs/ContactUsSummary';

const orgInfo = await getOrganizationInfo();
const rentalListings = await getAllRentalListings({
  onlyAvailableItems: true,
});
const aboutUsSummary = await getAboutUsSummary();

export const metadata: Metadata = {
  title: orgInfo.name,
  description: `${orgInfo.name} Home page.`,
};

export default async function Home() {
  return (
    <>
      <main>
        <div className="relative h-[33dvh] lg:h-[75dvh] min-h-[250px]">
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
              {orgInfo.slogan}
            </Typography>
          </Overlay>
        </div>
      </main>
      <RentalsSummary
        heading={`See what ${orgInfo.name} has to offer`}
        rentalListings={rentalListings}
      />
      <AboutUsSummary {...aboutUsSummary} />
      <ContactUsSummary />
      <FaqsSummary />
    </>
  );
}
