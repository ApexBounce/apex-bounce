import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { ReactNode } from 'react';
import Image from 'next/image';

export type Props = {
  imgSrc: string;
  imgAlt: string;
  title?: string;
  description?: string;
  children?: ReactNode;
};

export default function ActionAreaCard(props: Props) {
  return (
    <Card className="group max-w-[100vw] w-fit transform transition duration-500 hover:shadow-xl">
      <CardActionArea>
        <div className="relative overflow-hidden w-[300px] h-[250px]">
          <Image
            src={props.imgSrc}
            alt={props.imgAlt}
            fill
            className="object-cover transform transition duration-500 group-hover:scale-110"
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
          {props.children && <div>{props.children}</div>}
        </div>
      </CardActionArea>
    </Card>
  );
}
