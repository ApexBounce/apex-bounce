'use client';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';
import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

interface Props {
  children: React.ReactElement;
}

function HideOnScroll(props: Props) {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

export default function HideNavbar() {
  return (
    <HideOnScroll>
      <AppBar className="bg-neutral/0 mt-2 lg:mt-4 shadow-none">
        <Toolbar className="grid grid-flow-col justify-between bg-gradient-to-r from-primary via-accent to-secondary text-base-100 uppercase mx-auto rounded-full w-[calc(100%_-_1em)] lg:w-[calc(100%_-_2em)] shadow-xl">
          <Typography variant="h6" component="div">
            Apex Bounce
          </Typography>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  );
}
