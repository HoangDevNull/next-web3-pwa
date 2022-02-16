import React, { FC } from 'react';
import { getColorMode, ToggleColorMode } from '@/store/ducks/system/slice';
import { darkTheme, lightTheme } from '@/styles/theme';
import { CssBaseline, Fab } from '@mui/material';
import { ThemeProvider } from '@mui/system';
import { useAppDispatch, useAppSelector } from 'hooks/useRedux';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

const ThemeLayout: FC = ({ children }) => {
  const dispatch = useAppDispatch();
  const mode = useAppSelector(getColorMode);

  const toggle = () => {
    dispatch(ToggleColorMode());
  };

  const theme = React.useMemo(
    () => (mode === 'dark' ? darkTheme : lightTheme),
    [mode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}

      <Fab
        onClick={toggle}
        size="small"
        color="primary"
        sx={{ position: 'fixed', right: 20, bottom: 20 }}
      >
        {theme.palette.mode === 'dark' ? (
          <Brightness7Icon fontSize="small" />
        ) : (
          <Brightness4Icon fontSize="small" />
        )}
      </Fab>
    </ThemeProvider>
  );
};

export default ThemeLayout;
