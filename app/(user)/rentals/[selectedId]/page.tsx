import getRentalDetails from '@/sanity/lib/getRentalDetails';
import sanityUrlFor from '@/sanity/lib/sanityUrlFor';
import { Typography } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Metadata } from 'next';
import Image from 'next/image';
import CheckIcon from '@mui/icons-material/Check';

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
        <div className="gradient-bg-vertical bg-fixed grid grid-flow-row lg:grid-flow-col gap-8 lg:gap-8 justify-center pb-8 pt-4 px-4 lg:px-8 lg:py-12">
          <div className="relative h-[250px] lg:h-[350px] w-[550px] max-w-[90vw] mx-auto">
            <Image
              src={`${sanityUrlFor(data.image).url()}`}
              alt={data.title}
              fill
              priority
              className="shadow-xl rounded-md"
            />
          </div>
          <div className="prose lg:prose-xl">
            <Typography
              component="h1"
              className="text-3xl lg:text-6xl text-center lg:text-start font-extrabold"
            >
              {data.title}
            </Typography>
            <Typography component="p" className="">
              {data.description}
            </Typography>
          </div>
        </div>
        <section className="pristine-dark-gradient grid grid-flow-row gap-4 justify-center items-center bg-secondary text-white py-8 px-4">
          <Typography
            component="h3"
            className="text-3xl lg:text-5xl text-gold text-center lg:text-start font-extrabold"
          >
            Features
          </Typography>
          <List dense={true}>
            {data.features.map((feature) => (
              <ListItem key={feature}>
                <ListItemIcon>
                  <CheckIcon className="text-info" />
                </ListItemIcon>
                <ListItemText primary={feature} />
              </ListItem>
            ))}
          </List>
        </section>
      </main>
    </>
  );
}
