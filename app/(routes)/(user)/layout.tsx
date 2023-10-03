import '../../globals.css';
import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import Navbar from '@/components/Navigation/ElevateNavbar';
import CssBaseline from '@mui/material/CssBaseline';
import getOrganizationInfo from '@/sanity/lib/getOrganization';
import Footer from '@/components/Footer/Footer';
import ScrollToTop from '@/components/Scroll/ScrollToTop';
import { MuiSetup } from './_mui-setup';

const font = Montserrat({ subsets: ['latin'], variable: '--font-montserrat' });

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
    <html
      lang="en"
      className={`${font.variable}`}
      style={{ scrollBehavior: 'smooth' }}
    >
      <body className={`bg-secondary`}>
        <CssBaseline />
        <ScrollToTop />
        <MuiSetup>
          <Navbar text={orgInfo.name} />
          {children}
          <Footer organizationData={orgInfo} />
        </MuiSetup>
      </body>
    </html>
  );
}
