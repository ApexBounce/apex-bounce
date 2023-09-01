import getOrganizationInfo from '@/sanity/lib/getOrganization';
import Typography from '@mui/material/Typography';
import { Metadata } from 'next';
import Image from 'next/image';
import Overlay from '@/components/Overlay/Overlay';

const orgInfo = await getOrganizationInfo();

export const metadata: Metadata = {
  title: `About Us | ${orgInfo.name}`,
  description: `
  Get to Know ${orgInfo.name} | Your Adventure Awaits! Learn about our mission, our passion, and the joy we bring to every bounce.
  Discover what makes us your ultimate destination for fun and adventure.`,
};

export default async function AboutUs() {
  return (
    <>
      <div className="relative grid h-[33dvh] lg:h-[75dvh]">
        <Image
          src={'/images/contact_us_main.jpg'}
          alt="Kids playing on an inflatable"
          fill
          priority
          className="z-0 object-cover"
        />
        <Overlay>
          <div className="grid w-fit h-fit self-center mx-auto items-center justify-center text-center">
            <Typography
              component="h1"
              className="text-2xl lg:text-5xl text-neutral"
            >
              About Us
            </Typography>
            <Typography
              component="h1"
              className="text-3xl lg:text-7xl font-bold uppercase"
            >
              {orgInfo.name}
            </Typography>
          </div>
        </Overlay>
      </div>
    </>
  );
}
