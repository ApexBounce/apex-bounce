import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { APP_ROUTES } from '@/lib/routes';
import Link from 'next/link';
type Props = {
  onCLick: (val: boolean) => any;
};

const NavList = (props: Props) => {
  return (
    <Box
      sx={{ width: 'auto' }}
      role="presentation"
      onClick={() => props.onCLick(false)}
    >
      <div className="mt-[64px] bg-secondary text-base-100">
        <div className="p-4 lg:p-6 grid grid-flow-row lg:grid-flow-col">
          {APP_ROUTES.map((appRoute) => (
            <List key={appRoute.groupTitle} className="py-0">
              {appRoute.routes.map((option, index) => (
                <ListItem key={option + `_${index}`} disablePadding>
                  <Link
                    href={option.route}
                    className="grid grid-flow-col gap-2"
                  >
                    <ListItemIcon className="grid items-center min-w-[20px]">
                      <option.icon className="text-base-100" />
                    </ListItemIcon>
                    <ListItemText primary={option.title} />
                  </Link>
                </ListItem>
              ))}
            </List>
          ))}
        </div>
      </div>
    </Box>
  );
};

export default NavList;
