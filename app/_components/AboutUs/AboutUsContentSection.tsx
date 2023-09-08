import { AboutUsContent } from '@/app/_types';
import Typography from '@mui/material/Typography';

type Props = {
  content: AboutUsContent;
};

const AboutUsContentSection = ({ content }: Props) => {
  return (
    <section className="prose lg:prose-lg whitespace-pre-wrap">
      <Typography
        component="h2"
        className="text-4xl lg:text-5xl text-secondary underline underline-offset-4 decoration-primary"
      >
        {content.sectionTitle}
      </Typography>
      <Typography className="text-gray">{content.sectionText}</Typography>
    </section>
  );
};

export default AboutUsContentSection;
