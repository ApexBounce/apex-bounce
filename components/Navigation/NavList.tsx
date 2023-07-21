import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { APP_ROUTES } from '@/lib/routes';
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
      <div className="mt-[64px] grid grid-flow-row lg:grid-flow-col bg-secondary text-base-100">
        {APP_ROUTES.map((appRoute) => (
          <List key={appRoute.groupTitle} className="py-0">
            {appRoute.routes.map((option, index) => (
              <ListItem key={option + `_${index}`} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <option.icon className="text-base-100" />
                  </ListItemIcon>
                  <ListItemText primary={option.title} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        ))}
      </div>
    </Box>
  );
};

export default NavList;
