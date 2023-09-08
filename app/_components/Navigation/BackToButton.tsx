import Typography from '@mui/material/Typography';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Link from 'next/link';
import React from 'react';

type Props = {
  text: string;
  route: string;
  className?: string;
};

const BackToButton = (props: Props) => {
  return (
    <div className={props.className}>
      <Link href={props.route}>
        <Typography
          component="p"
          className="relative grid grid-flow-col gap-2 items-center w-fit"
        >
          <ArrowBackIcon />
          {props.text}
        </Typography>
      </Link>
    </div>
  );
};

export default BackToButton;
