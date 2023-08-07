import { SvgIconTypeMap } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import InfoIcon from '@mui/icons-material/Info';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import CollectionsIcon from '@mui/icons-material/Collections';
import QuizIcon from '@mui/icons-material/Quiz';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import HomeIcon from '@mui/icons-material/Home';

export type Routes = {
  title: string;
  route: string;
  icon: OverridableComponent<SvgIconTypeMap<{}, 'svg'>> & {
    muiName: string;
  };
  childRoutes?: AppRoutes;
};

export type AppRoutes = {
  groupTitle: string;
  routes: Routes[];
};

export const APP_ROUTES: AppRoutes[] = [
  {
    groupTitle: 'Services',
    routes: [
      {
        title: 'Home',
        route: '/',
        icon: HomeIcon,
      },
      {
        title: 'Rental Listings',
        route: '/rental-listings',
        icon: FormatListNumberedIcon,
      },
      {
        title: 'Delivery & Setup',
        route: '/delivery-setup-process',
        icon: LocalShippingIcon,
      },
    ],
  },
  {
    groupTitle: 'General Info',
    routes: [
      {
        title: 'FAQs',
        route: '/faq',
        icon: QuizIcon,
      },
      {
        title: 'Event Planning Tips',
        route: '/event-planning-tips',
        icon: EventAvailableIcon,
      },
      {
        title: 'Safety Information',
        route: '/safety-information',
        icon: HealthAndSafetyIcon,
      },
    ],
  },
  {
    groupTitle: 'Company Info',
    routes: [
      {
        title: 'Gallery',
        route: '/gallery',
        icon: CollectionsIcon,
      },
      {
        title: 'About Us',
        route: '/about-us',
        icon: InfoIcon,
      },
      {
        title: 'Contact Us',
        route: '/contact-us',
        icon: ConnectWithoutContactIcon,
      },
    ],
  },
];
