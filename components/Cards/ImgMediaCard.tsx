import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import { ReactNode } from 'react';

export type Props = {
  imgSrc: string;
  imgAlt: string;
  title?: string;
  description?: string;
  children?: ReactNode;
};

export default function ImgMediaCard(props: Props) {
  return (
    <Card sx={{ maxWidth: 345 }} className="grid grid-flow-row">
      <div className="relative min-w-[150px] min-h-[150px] h-full w-full">
        <Image
          src={props.imgSrc}
          alt={props.imgAlt}
          fill
          className="object-cover"
        />
      </div>
      <div>
        {props.title && (
          <Typography gutterBottom variant="h5" component="div">
            {props.title}
          </Typography>
        )}
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
