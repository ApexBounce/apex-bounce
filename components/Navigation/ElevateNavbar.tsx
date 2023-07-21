'use client';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import MenuIcon from '@mui/icons-material/Menu';
import { cloneElement, useState } from 'react';
import Drawer from '@mui/material/Drawer';
import Fade from '@mui/material/Fade';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import NavList from './NavList';

interface Props {
  children: React.ReactElement;
}

function ElevationScroll(props: Props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

export default function ElevateAppBar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = (state: boolean) => setIsOpen(state);

  return (
    <>
      <ElevationScroll>
        <AppBar className="sticky z-[1201] bg-gradient-to-r from-primary via-accent to-secondary text-base-100">
          <Toolbar className="grid grid-flow-col h-16 justify-between uppercase">
            <Typography variant="h6" component="div">
              Apex Bounce
            </Typography>
            <IconButton
              onClick={() => toggleDrawer(!isOpen)}
              size="large"
              color="inherit"
              aria-label="menu"
            >
              {!isOpen && <MenuIcon className="text-3xl" />}
              {isOpen && <CloseIcon className="text-3xl" />}
            </IconButton>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Drawer
        disableScrollLock
        anchor={'top'}
        open={isOpen}
        onClose={() => toggleDrawer(false)}
        sx={{
          backdropFilter: 'blur(4px)',
        }}
      >
        <NavList onCLick={() => toggleDrawer(false)} />
      </Drawer>
    </>
  );
}
