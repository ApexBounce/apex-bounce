import getRentalDetails from '@/sanity/lib/getRentalDetails';
import sanityUrlFor from '@/sanity/lib/sanityUrlFor';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import { Metadata } from 'next';
import Image from 'next/image';
import ImageCarousel from '@/components/Carousels/ImageCarousel';
import FeaturesBlock from '@/components/Feature/FeaturesBlock';
import BookingForm from '@/components/Forms/BookingForm';

async function getRentalData(id: string) {
  const rentalDetails = await getRentalDetails(id);
  return rentalDetails;
}

type Props = {
  params: { selectedId: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const data = await getRentalData(params.selectedId);

  return {
    title: data.title,
    description: `${data.title} rental details.`,
  };
}

export default async function Page({ params }: Props) {
  const data = await getRentalData(params.selectedId);

  return (
    <>
      <main className="bg-secondary">
        <div className="gradient-bg-vertical grid grid-flow-row lg:grid-flow-col gap-8 lg:gap-8 justify-center pb-8 pt-4 px-4 lg:px-8 lg:py-12">
          <ImageCarousel className="h-[284px] lg:h-[384px] w-[550px] max-w-[90vw] mx-auto">
            {data.images.map((image, i) => (
              <div
                key={'image-' + i}
                className="relative h-[250px] lg:h-[350px] w-[550px] max-w-[90vw] mx-auto"
              >
                <Image
                  src={`${sanityUrlFor(image).url()}`}
                  alt={data.title}
                  fill
                  sizes="100%"
                  priority={i === 0}
                  className="shadow-xl rounded-md"
                />
              </div>
            ))}
          </ImageCarousel>
          <div className="grid grid-flow-row gap-8">
            <div className="prose lg:prose-xl">
              <Typography
                component="h1"
                className="text-3xl lg:text-6xl text-center lg:text-start font-extrabold"
              >
                {data.title}
              </Typography>
              <Typography component="p">{data.description}</Typography>
            </div>
            <Button
              href="/rentals/checkout"
              size="large"
              className="w-full lg:w-[200px] mx-auto lg:mx-0 text-white bg-primary hover:bg-accent hover:shadow-lg uppercase"
            >
              Book NOW
            </Button>
          </div>
        </div>
        <FeaturesBlock features={data.features} />
        <div className="pristine-dark-gradient py-12 px-4 lg:px-8">
          <BookingForm rental={data} />
        </div>
      </main>
    </>
  );
}
