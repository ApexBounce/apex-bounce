import { SvgIconTypeMap } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import InfoIcon from '@mui/icons-material/Info';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import CollectionsIcon from '@mui/icons-material/Collections';
import QuizIcon from '@mui/icons-material/Quiz';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import GroupIcon from '@mui/icons-material/Group';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';

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
    groupTitle: 'group 1',
    routes: [
      {
        title: 'Rental Listings',
        route: '/rental-listings',
        icon: FormatListNumberedIcon,
      },
      {
        title: 'Customer Testimonials',
        route: '/customer-testimonials',
        icon: GroupIcon,
      },
      {
        title: 'Safety Information',
        route: '/safety-information',
        icon: HealthAndSafetyIcon,
      },
    ],
  },
  {
    groupTitle: 'group 2',
    routes: [
      {
        title: 'Event Planning Tips',
        route: '/event-planning-tips',
        icon: EventAvailableIcon,
      },
      {
        title: 'FAQs',
        route: '/faq',
        icon: QuizIcon,
      },
      {
        title: 'Gallery and Videos',
        route: '/gallery',
        icon: CollectionsIcon,
      },
    ],
  },
  {
    groupTitle: 'group 3',
    routes: [
      {
        title: 'Delivery and Setup Process',
        route: '/delivery-setup-process',
        icon: LocalShippingIcon,
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
