import Overlay from '@/components/Overlay/Overlay';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from 'next/link';

const FaqsSummary = () => {
  return (
    <section className="relative grid bg-[url('/images/faqs_summary.jpg')] bg-cover bg-center bg-no-repeat w-full h-[450px] lg:h-[700px] text-white">
      <Overlay>
        <div className="grid self-center text-center gap-2 lg:gap-4 p-4 lg:p-8">
          <Typography variant="h4" className="text-3xl lg:text-5xl">
            Have Questions?
          </Typography>
          <Typography variant="body1" className="mb-4 text-neutral">
            Take a look at our FAQs
          </Typography>
          <Link href="faqs">
            <Button
              variant="outlined"
              size="large"
              className="w-full lg:w-52 mx-auto lg:mx-0 text-white border-white hover:border-white hover:shadow-lg"
            >
              See FAQs
            </Button>
          </Link>
        </div>
      </Overlay>
    </section>
  );
};

export default FaqsSummary;
