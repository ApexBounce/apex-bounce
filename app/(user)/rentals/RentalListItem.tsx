import sanityUrlFor from '@/sanity/lib/sanityUrlFor';
import { RentalListing } from '@/types';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Image from 'next/image';

type Props = {
  rentalListing: RentalListing;
};

const RentalListItem = ({ rentalListing }: Props) => {
  return (
    <ImageListItem className="group w-[300px] max-w-[80vw]">
      {rentalListing?.images?.length > 0 && (
        <div className="relative overflow-hidden w-full h-[250px]">
          <Image
            src={`${sanityUrlFor(rentalListing.images[0]?.asset).url()}`}
            alt={rentalListing.title}
            fill
            sizes="300px"
            className="object-cover transform transition duration-500 group-hover:scale-110"
          />
        </div>
      )}
      <ImageListItemBar
        title={rentalListing.title}
        position="below"
        className="group-hover:bg-accent transform transition duration-500 bg-primary text-white uppercase text-center p-4 pb-[10px]"
      />
    </ImageListItem>
  );
};

export default RentalListItem;
