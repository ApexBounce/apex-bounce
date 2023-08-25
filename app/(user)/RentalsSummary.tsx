import ImageList from '@mui/material/ImageList';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import { groupRentalsByCategory } from '@/lib/utils';
import { RentalListing } from '@/types';
import RentalCard from './rentals/RentalListItem';
import Button from '@mui/material/Button';

type Props = {
  heading: string;
  rentalListings: RentalListing[];
};

const RentalsSummary = ({ heading, rentalListings }: Props) => {
  return (
    <section className="pristine-dark-gradient bg-fixed grid grid-flow-row gap-12 max-w-[100vw] items-center justify-center bg-secondary py-12 px-4 lg:px-8">
      <Typography
        component="h2"
        className="text-3xl lg:text-4xl font-bold text-gold"
      >
        {heading}
      </Typography>
      {groupRentalsByCategory(rentalListings).map((group) => (
        <section key={group.category} className="w-full overflow-hidden">
          <Typography
            component="h3"
            className="text-2xl lg:text-3xl uppercase mb-4"
          >
            {group.category}
          </Typography>
          <ImageList
            className="no-scrollbar overflow-scroll h-fit w-full"
            sx={{ width: 500, height: 450 }}
            gap={16}
          >
            {group.items.map((item) => (
              <Link key={item.title} href={`rentals/${item._id}`}>
                <RentalCard rentalListing={item} />
              </Link>
            ))}
          </ImageList>
        </section>
      ))}
      <Link href={'rentals'}>
        <Button
          variant="outlined"
          size="large"
          className="w-full lg:w-52 mx-auto lg:mx-0 text-gold border-gold hover:border-gold hover:shadow-lg uppercase"
        >
          See all Rentals
        </Button>
      </Link>
    </section>
  );
};

export default RentalsSummary;
