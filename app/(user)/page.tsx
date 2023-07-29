import Overlay from '@/components/Overlay/Overlay';
import getOrganizationInfo from '@/sanity/lib/getOrganization';
import { Typography } from '@mui/material';
import { Metadata } from 'next';
import Image from 'next/image';

const orgInfo = await getOrganizationInfo();

export const metadata: Metadata = {
  title: orgInfo.name,
  description: `${orgInfo.name} Home page.`,
};

export default async function Home() {
  return (
    <main className="min-h-[1200px]">
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
            {orgInfo.slogan}
          </Typography>
        </Overlay>
      </div>
    </main>
  );
}
