import getRentalDetails from '@/sanity/lib/getRentalDetails';
import sanityUrlFor from '@/sanity/lib/sanityUrlFor';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import { Metadata } from 'next';
import Image from 'next/image';
import ImageCarousel from '@/components/Carousels/ImageCarousel';
import FeaturesBlock from '@/components/Feature/FeaturesBlock';
import BookingForm from '@/components/Forms/BookingForm';
import getOrganizationInfo from '@/sanity/lib/getOrganization';
import BackToButton from '@/components/Navigation/BackToButton';

const orgInfo = await getOrganizationInfo();

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
    title: `${data?.title ?? 'Item not found'} | ${orgInfo.name}`,
    description: !!data
      ? `${data.title} item rental details from ${orgInfo.name}.`
      : 'Item not found.',
  };
}

export default async function Page({ params }: Props) {
  const data = await getRentalData(params.selectedId);

  return (
    <>
      <BackToButton
        text="All Rentals"
        route="/rentals"
        className="sticky top-16 w-full bg-secondary/50 backdrop-blur text-base-100 p-2 z-10"
      />
      {!!data && (
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
                href="#booking-form"
                size="large"
                className="w-full lg:w-52 mx-auto lg:mx-0 text-white bg-primary hover:bg-accent hover:shadow-lg uppercase"
              >
                Book NOW
              </Button>
            </div>
          </div>
          <FeaturesBlock features={data.features} />
          <div
            id="booking-form"
            className="pristine-dark-gradient grid items-center justify-center py-16 px-4 lg:px-8 shadow-lg"
          >
            <BookingForm rental={data} orgInfo={orgInfo} />
          </div>
        </main>
      )}
    </>
  );
}
