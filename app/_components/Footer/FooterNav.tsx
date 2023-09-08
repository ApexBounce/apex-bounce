import { APP_ROUTES } from '@/lib/routes';
import { Typography } from '@mui/material';
import Link from 'next/link';

const FooterNav = () => {
  return (
    <div className="grid grid-flow-row gap-4 text-sm h-fit">
      <Typography
        variant="h4"
        component="h4"
        className="text-2xl lg:text-3xl uppercase mb-4 text-base-100"
      >
        Navigation
      </Typography>
      <div className="grid grid-flow-row lg:grid-cols-2 gap-x-4 gap-y-2">
        {APP_ROUTES.map((group) => (
          <div
            key={group.groupTitle}
            className="grid grid-flow-row gap-2 h-fit"
          >
            {group.routes.map((route) => (
              <Link key={route.title} href={route.route}>
                {route.title}
              </Link>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FooterNav;
