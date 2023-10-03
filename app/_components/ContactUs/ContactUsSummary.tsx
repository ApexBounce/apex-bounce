import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from 'next/link';

const ContactUsSummary = () => {
  return (
    <section className="grid grid-flow-row gap-12 items-center justify-center max-w-[100vw] bg-black py-12 px-4 lg:px-8">
      <Typography
        component="h2"
        className="prose xl:prose-xl text-3xl lg:text-5xl font-bold text-gold flex"
      >
        Contact Us
      </Typography>
      <Typography className="prose xl:prose-xl text-light-gray whitespace-pre-wrap">
        Have a question or ready to plan your next event? Contact us today and
        let's make your celebration unforgettable! Our friendly team is here to
        assist you with all your party needs. Get in touch now.
      </Typography>
      <Link href="contact-us">
        <Button
          variant="outlined"
          size="large"
          className="w-full lg:w-52 mx-auto lg:mx-0 text-light-gray border-light-gray hover:border-light-gray hover:shadow-lg uppercase"
        >
          Contact Us
        </Button>
      </Link>
    </section>
  );
};

export default ContactUsSummary;
