import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { BusinessValue } from '@/app/_types';
import Overlay from '../Overlay/Overlay';

type Props = {
  businessValues: BusinessValue[];
};

const AboutUsValuesSection = ({ businessValues }: Props) => {
  return (
    <section className="relative bg-[url('/images/values_bg.jpg')] bg-cover bg-center bg-no-repeat px-4 py-12 lg:px-8">
      <Overlay />
      <div className="grid grid-flow-row gap-4 max-w-4xl mx-auto">
        <div className="z-10 prose lg:prose-lg whitespace-pre-wrap">
          <Typography
            component="h2"
            className="text-4xl lg:text-5xl text-white underline underline-offset-4 decoration-primary"
          >
            Our Values
          </Typography>
          {businessValues.map((value, index) => (
            <section key={`values_section_${index + 1}`}>
              <div className="grid grid-flow-col gap-2 items-center w-fit">
                <FavoriteIcon className="text-primary" />
                <Typography
                  component="h3"
                  className="text-2xl lg:text-4xl text-white !m-0"
                >
                  {value.name}
                </Typography>
              </div>
              <Typography className="text-white">
                {value.description}
              </Typography>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUsValuesSection;
