import Overlay from '@/components/Overlay/Overlay';
import { Typography } from '@mui/material';
import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Apex Bounce',
  description: 'Apex Bounce home page',
};

export default function Home() {
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
            Defy Gravity with Apex
          </Typography>
        </Overlay>
      </div>
    </main>
  );
}
