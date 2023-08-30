import getFAQs from '@/sanity/lib/getFAQs';
import getOrganizationInfo from '@/sanity/lib/getOrganization';
import Paper from '@mui/material/Paper';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import HelpIcon from '@mui/icons-material/Help';
import Typography from '@mui/material/Typography';
import { Metadata } from 'next';
import React from 'react';
import Link from 'next/link';

const orgInfo = await getOrganizationInfo();
const faqs = await getFAQs();

export const metadata: Metadata = {
  title: `FAQs | ${orgInfo.name}`,
  description: `FAQs for ${orgInfo.name}`,
};

export default async function FAQs() {
  return (
    <div className="bg-white text-light-gray">
      <section className="grid items-center min-h-[60vh] max-w-4xl mx-auto pt-8 px-4 lg:px-0">
        <div className="grid">
          <Typography
            variant="h4"
            component="h1"
            className="mb-4 text-4xl lg:text-7xl"
          >
            Got Questions?
          </Typography>
          <Typography
            variant="h4"
            component="h2"
            className="mb-4 text-6xl lg:text-8xl font-bold text-secondary drop-shadow-2xl"
          >
            We&apos;ve got answers!
          </Typography>
          <Typography variant="body1" className="my-4">
            We totally get it—sometimes you&apos;ve got questions, and
            we&apos;ve got answers.
            <br />
            Please checkout our FAQs to find answers to our most frequently
            asked questions.
          </Typography>
          <Typography variant="body1" className="my-4">
            Still don&apos;t see what you&apos;re looking for?{' '}
            <Link
              href="/contact-us"
              className="underline underline-offset-2 decoration-primary"
            >
              Contact us!
            </Link>
          </Typography>
        </div>
      </section>
      <main className="pt-12 lg:py-12">
        <Paper
          className="dark-bubble-flare-bg grid grid-flow-row gap-8 max-w-4xl mx-auto pb-8 rounded-none lg:rounded-lg"
          elevation={8}
        >
          <div className="w-full bg-secondary shadow-lg text-gold p-4 lg:rounded-t-lg text-center">
            <Typography variant="h3">FAQs</Typography>
          </div>
          {faqs.map((faq, index) => (
            <section
              key={`faq_${index + 1}`}
              className="grid grid-flow-row gap-8 w-full px-4"
            >
              <div className="relative max-w-[80%] justify-self-end bg-secondary text-neutral rounded-xl p-4 shadow-lg">
                <HelpIcon className="text-3xl absolute -top-3 -right-3" />
                <Typography variant="h5">{faq.question}</Typography>
              </div>
              <div className="relative items-center max-w-[80%] justify-self-start bg-accent text-neutral rounded-xl p-4 shadow-lg">
                <CheckCircleIcon className="text-3xl absolute -top-3 -left-3" />
                <Typography variant="body1">{faq.answer}</Typography>
              </div>
            </section>
          ))}
        </Paper>
      </main>
    </div>
  );
}
