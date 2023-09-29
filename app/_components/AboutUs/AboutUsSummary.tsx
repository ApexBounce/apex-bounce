import { AboutUsContent } from '@/app/_types';
import sanityUrlFor from '@/sanity/lib/sanityUrlFor';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import Link from 'next/link';

const AboutUsSummary = ({
  sectionTitle,
  sectionText,
  sectionImage,
}: AboutUsContent) => {
  return (
    <section className="grid grid-flow-row gap-12 items-center justify-center max-w-[100vw] bg-secondary py-12 px-4 lg:px-8">
      <Typography
        component="h2"
        className="prose xl:prose-xl text-3xl lg:text-5xl font-bold text-gold"
      >
        {sectionTitle}
      </Typography>
      <Typography className="prose xl:prose-xl text-light-gray whitespace-pre-wrap">
        {sectionText}
      </Typography>
      {sectionImage && (
        <div className="relative overflow-hidden w-full max-h-[500px] aspect-square rounded-lg shadow-lg">
          <Image
            src={`${sanityUrlFor(sectionImage).url()}`}
            alt="About Us summary image"
            fill
            sizes="300px"
            className="object-cover"
          />
        </div>
      )}
      <Link href="about-us">
        <Button
          variant="outlined"
          size="large"
          className="w-full lg:w-52 mx-auto lg:mx-0 text-light-gray border-light-gray hover:border-light-gray hover:shadow-lg uppercase"
        >
          Learn More
        </Button>
      </Link>
    </section>
  );
};

export default AboutUsSummary;
