import getOrganizationInfo from '@/sanity/lib/getOrganization';
import Typography from '@mui/material/Typography';
import { Metadata } from 'next';
import Image from 'next/image';
import Overlay from '@/components/Overlay/Overlay';
import getAboutUsContent from '@/sanity/lib/getAboutUsContent';
import getStaffMembers from '@/sanity/lib/getStaffMembers';
import getBusinessValues from '@/sanity/lib/getBusinessValues';
import FavoriteIcon from '@mui/icons-material/Favorite';

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
            <section
              key={`about_section_${index + 1}`}
              className="prose lg:prose-lg whitespace-pre-wrap"
            >
              <Typography
                component="h2"
                className="text-4xl lg:text-5xl text-secondary underline underline-offset-4 decoration-primary"
              >
                {section.sectionTitle}
              </Typography>
              <Typography className="text-gray">
                {section.sectionText}
              </Typography>
            </section>
          ))}
        </main>
      </div>
      <section className="bg-light-gray px-4 py-12 lg:px-8">
        <div className="grid grid-flow-row gap-4 max-w-4xl mx-auto">
          <div className="prose lg:prose-lg whitespace-pre-wrap">
            <Typography
              component="h2"
              className="text-4xl lg:text-5xl text-secondary underline underline-offset-4 decoration-primary"
            >
              Our Values
            </Typography>
            {businessValues.map((value, index) => (
              <section key={`values_section_${index + 1}`}>
                <div className="grid grid-flow-col gap-2 items-center w-fit">
                  <FavoriteIcon className="text-primary" />
                  <Typography
                    component="h3"
                    className="text-2xl lg:text-4xl text-gray !m-0"
                  >
                    {value.name}
                  </Typography>
                </div>
                <Typography>{value.description}</Typography>
              </section>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
