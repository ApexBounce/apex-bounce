import getOrganizationInfo from '@/sanity/lib/getOrganization';
import Typography from '@mui/material/Typography';
import { Metadata } from 'next';
import Image from 'next/image';
import Overlay from '@/components/Overlay/Overlay';
import getAboutUsContent from '@/sanity/lib/getAboutUsContent';
import getStaffMembers from '@/sanity/lib/getStaffMembers';
import getBusinessValues from '@/sanity/lib/getBusinessValues';
import AboutUsContentSection from '@/app/_components/AboutUs/AboutUsContentSection';
import AboutUsValuesSection from '@/app/_components/AboutUs/AboutUsValuesSection';
import AboutUsStaffSection from '@/app/_components/AboutUs/AboutUsStaffSection';

const orgInfo = await getOrganizationInfo();
const aboutUsContent = await getAboutUsContent();
const staffMembers = await getStaffMembers();
const businessValues = await getBusinessValues();

export const metadata: Metadata = {
  title: `About Us | ${orgInfo.name}`,
  description: `
  Get to Know ${orgInfo.name} | Your Adventure Awaits! Learn about our mission, our passion, and the joy we bring to every bounce.
  Discover what makes us your ultimate destination for fun and adventure.`,
};

export default async function AboutUs() {
  return (
    <div className="bg-white">
      <div className="relative grid h-[33dvh] lg:h-[75dvh]">
        <Image
          src={'/images/about_us_main.jpg'}
          alt="Kids playing on an inflatable"
          fill
          priority
          className="z-0 object-cover"
        />
        <Overlay>
          <div className="grid w-fit h-fit self-center mx-auto items-center justify-center text-center">
            <Typography
              component="h1"
              className="text-2xl lg:text-5xl text-light-gray"
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
      <div className="gradient-bg-vertical px-4 py-12 lg:px-8">
        <main className="grid grid-flow-row gap-4 max-w-4xl mx-auto">
          {aboutUsContent.map((section, index) => (
            <AboutUsContentSection
              key={`about_us_content_${index + 1}`}
              content={section}
            />
          ))}
        </main>
      </div>
      <AboutUsValuesSection businessValues={businessValues} />
      <AboutUsStaffSection staff={staffMembers} />
    </div>
  );
}
