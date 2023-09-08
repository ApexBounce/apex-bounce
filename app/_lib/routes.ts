import { SvgIconTypeMap } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import InfoIcon from '@mui/icons-material/Info';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import QuizIcon from '@mui/icons-material/Quiz';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
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
        title: 'Rentals',
        route: '/rentals',
        icon: FormatListNumberedIcon,
      },
    ],
  },
  {
    groupTitle: 'General Info',
    routes: [
      {
        title: 'About Us',
        route: '/about-us',
        icon: InfoIcon,
      },
      {
        title: 'Event Planning Tips',
        route: '/event-planning-tips',
        icon: EventAvailableIcon,
      },
    ],
  },
  {
    groupTitle: 'Company Info',
    routes: [
      {
        title: 'FAQs',
        route: '/faqs',
        icon: QuizIcon,
      },
      {
        title: 'Contact Us',
        route: '/contact-us',
        icon: ConnectWithoutContactIcon,
      },
    ],
  },
];
