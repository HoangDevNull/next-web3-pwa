import { ThemeOptions } from '@mui/material/styles';

const overrides: ThemeOptions['components'] = {
  MuiButton: {
    defaultProps: {
      variant: 'outlined',
      disableElevation: true,
    },
    styleOverrides: {
      root: {
        textTransform: 'unset',
        whiteSpace: 'nowrap',
        borderRadius: 999,
        fontWeight: 'bold',
      },
    },
  },
  MuiPaper: {
    defaultProps: {
      variant: 'outlined',
    },
  },
  MuiBackdrop: {
    styleOverrides: {
      root: {
        // background: `linear-gradient(180deg, rgba(19, 19, 19, 0.5) 0%, rgba(19, 19, 19, 0) 100%), rgba(51, 51, 51, 0.75)`,
        backdropFilter: `blur(3px)`,
      },
    },
  },

  MuiCard: {
    defaultProps: {
      variant: 'outlined',
    },
  },
};

export default overrides;
