import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import { ReactNode } from 'react';
import Overlay from '../Overlay/Overlay';

type Props = {
  imgSrc: string;
  imgAlt: string;
  imgHeight?: number | string;
  title?: string;
  description?: string;
  maxWidth?: number | string;
  children?: ReactNode;
};

export default function ImgMediaCard(props: Props) {
  return (
    <Card
      sx={{
        maxWidth: props.maxWidth ?? 345,
      }}
      className="group grid grid-flow-row rounded-none lg:rounded-md"
    >
      <div
        style={{
          height: props.imgHeight ?? 'fit-content',
        }}
        className="relative min-w-[150px] min-h-[150px] h-full w-full"
      >
        <Image
          src={props.imgSrc}
          alt={props.imgAlt}
          fill
          sizes="300px"
          className="object-cover transform transition duration-500 group-hover:scale-110"
        />
        {props.title && (
          <div className="absolute top-0 left-0 right-0 h-1/4">
            <Overlay>
              <Typography
                gutterBottom
                component="h5"
                className="text-xl text-white mx-auto my-0 self-center"
              >
                {props.title}
              </Typography>
            </Overlay>
          </div>
        )}
      </div>
      <div>
        {props.description && (
          <Typography variant="body2" color="text.secondary">
            {props.description}
          </Typography>
        )}
        {props.children && (
          <CardActions sx={{ padding: 0 }}>{props.children}</CardActions>
        )}
      </div>
    </Card>
  );
}
