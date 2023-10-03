'use client';
import { ThemeProvider } from '@mui/material';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'Montserrat, sans-serif',
  },
});

export const MuiSetup = ({ children }: Props) => {
  return (
    <>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </>
  );
};
