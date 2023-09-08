'use client';

import Carousel from 'react-material-ui-carousel';

type Props = {
  children: React.ReactNode;
  className?: string;
};

const ImageCarousel = (props: Props) => {
  return (
    <Carousel navButtonsAlwaysVisible={true} className={props.className}>
      {props.children}
    </Carousel>
  );
};

export default ImageCarousel;
