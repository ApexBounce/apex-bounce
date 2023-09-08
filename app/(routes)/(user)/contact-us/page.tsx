import Overlay from '@/components/Overlay/Overlay';
import getOrganizationInfo from '@/sanity/lib/getOrganization';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Metadata } from 'next';
import Image from 'next/image';
import ContactUsForm from '@/components/Forms/ContactUsForm';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import Link from 'next/link';

const orgInfo = await getOrganizationInfo();

export const metadata: Metadata = {
  title: `Contact Us | ${orgInfo.name}`,
  description: `Contact us. Ask us a question we would love to hear from you! Please fill out the information below and we will get back to you soon! More ways to react out to us: Give us a call at ${orgInfo.phoneNumber}, or email us at ${orgInfo.email}`,
};

export default async function ContactUs() {
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
              Contact Us
            </Typography>
            <Typography
              component="h1"
              className="text-3xl lg:text-7xl font-bold uppercase"
            >
              Ask Us Anything
            </Typography>
          </div>
        </Overlay>
      </div>
      <main className="grid grid-flow-row lg:grid-flow-col gap-8 lg:gap-12 max-w-[100vw] items-center justify-center text-center lg:text-start py-12 px-4 lg:px-8 bg-white">
        <div className="grid gap-4 h-fit">
          <Typography
            component="h2"
            className="text-4xl lg:text-6xl font-bold text-secondary"
          >
            We would love to hear from you!
          </Typography>
          <Typography variant="body1" className="text-gray">
            Please fill out the form and we will get back to you as soon as
            possible!
          </Typography>
        </div>
        <ContactUsForm orgInfo={orgInfo} />
      </main>
      <section className="bg-white lg:py-12">
        <Card
          className="grid gap-8 items-center justify-center mx-auto pristine-dark-gradient px-4 lg:px-8 py-12 rounded-none lg:rounded-xl text-white w-full lg:w-[80vw] shadow-xl"
          sx={{ minWidth: 275 }}
        >
          <Typography
            variant="h3"
            className="text-2xl lg:text-5xl text-center font-bold uppercase text-gold w-full"
          >
            More Ways To Connect
          </Typography>
          <CardContent className="grid grid-flow-row lg:grid-cols-2 gap-8 lg:gap-12 justify-evenly w-full">
            <Link
              href={`tel:${orgInfo.phoneNumber}`}
              className="grid grid-flow-row gap-4 items-center justify-items-center"
            >
              <CallIcon fontSize="large" />
              {orgInfo.phoneNumber}
            </Link>
            <Link
              href={`mailto:${orgInfo.email}`}
              className="grid grid-flow-row gap-4 items-center justify-items-center"
            >
              <EmailIcon fontSize="large" />
              {orgInfo.email}
            </Link>
          </CardContent>
        </Card>
      </section>
    </>
  );
}
