import '../globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Navbar from '@/components/Navigation/ElevateNavbar';
import CssBaseline from '@mui/material/CssBaseline';
import { sanityClient } from '@/sanity/lib/client';
import { createClient } from 'next-sanity';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Apex Bounce',
  description: 'Apex Bounce LLC',
};

export default function RootLayout({
  children,
}: // props,
{
  children: React.ReactNode;
  // props: any;
}) {
  // console.log(props);
  return (
    <html lang="en">
      <body className={`${inter.className} bg-secondary`}>
        <CssBaseline />
        <Navbar />
        {/* <p className="h-9 bg-white text-black">{JSON.stringify(props)}</p> */}
        {children}
      </body>
    </html>
  );
}

// NEXT_PUBLIC_SANITY_PROJECT_ID = 'z6r64dbn';
// NEXT_PUBLIC_SANITY_DATASET = 'production';
// NEXT_PUBLIC_SANITY_API_VERSION = '2023-07-27';

// const client = createClient({
//   projectId: 'z6r64dbn',
//   dataset: 'production',
//   apiVersion: '2023-07-27',
//   useCdn: false,
// });

// export async function getStaticProps() {
//   const client = createClient({
//     projectId: 'z6r64dbn',
//     dataset: 'production',
//     // apiVersion: '2023-07-27',
//     useCdn: true,
//   });

//   const query = `*[_type == "organization"]`;

//   const orgInfo = await client.fetch(query);

//   console.log({ orgInfo });

//   return {
//     props: {
//       orgInfo,
//     },
//   };
// }
