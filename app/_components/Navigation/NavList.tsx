import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { APP_ROUTES } from '@/lib/routes';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';

type Props = {
  onCLick: (val: boolean) => any;
};

const NavList = (props: Props) => {
  const pathname = usePathname();

  const isActiveRoute = (route: string, exact = false) => {
    if (exact) {
      return route === pathname;
    }
    return pathname.includes(route);
  };

  return (
    <Box
      sx={{ width: 'auto' }}
      role="presentation"
      onClick={() => props.onCLick(false)}
    >
      <div className="mt-[64px] bg-secondary text-base-100">
        <div className="grid grid-flow-row lg:grid-flow-col gap-y-2 py-4">
          {APP_ROUTES.map((appRoute) => (
            <List key={appRoute.groupTitle} className="grid gap-2 py-0">
              {appRoute.routes.map((option, index) => (
                <Link key={option + `_${index}`} href={option.route}>
                  <ListItem
                    disablePadding
                    className="group hover:bg-black hover:shadow-2xl grid grid-flow-col gap-2 px-4 py-2"
                  >
                    <ListItemIcon className="grid items-center min-w-[20px]">
                      <option.icon className="text-base-100 group-hover:text-white" />
                    </ListItemIcon>
                    <div className="grid items-center grid-flow-col gap-2">
                      <ListItemText
                        primary={option.title}
                        className="group-hover:text-white"
                      />
                      {isActiveRoute(option.route, option.route === '/') && (
                        <KeyboardDoubleArrowLeftIcon className="text-primary" />
                      )}
                    </div>
                  </ListItem>
                </Link>
              ))}
            </List>
          ))}
        </div>
      </div>
    </Box>
  );
};

export default NavList;
