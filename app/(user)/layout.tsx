import '../globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Navbar from '@/components/Navigation/ElevateNavbar';
import CssBaseline from '@mui/material/CssBaseline';
import getOrganizationInfo from '@/sanity/lib/getOrganization';

const inter = Inter({ subsets: ['latin'] });

const orgInfo = await getOrganizationInfo();

export const metadata: Metadata = {
  title: orgInfo.name,
  description: `${orgInfo.name} - ${orgInfo.slogan}.`,
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-secondary`}>
        <CssBaseline />
        <Navbar text={orgInfo.name} />
        {children}
      </body>
    </html>
  );
}