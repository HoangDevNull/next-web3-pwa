import { styled } from '@mui/material';
import { Box } from '@mui/material/node_modules/@mui/system';
import Paper from '@mui/material/Paper';

export const StatisticCard = styled(Paper)(({ theme }) => ({
  background: theme.palette.background.paper,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  padding: '12px 5px',
  border: '2px solid #40454f',
  '& > div': {
    background: theme.palette.background.paper,
    marginTop: -75,
    zIndex: -1,
    marginBottom: 10,
    padding: '0px 12px 4px 12px',
    borderRadius: 8,
    color: theme.palette.text.primary,
    width: '70%',
    textAlign: 'center',
    // boxShadow: theme.shadows[1],
    border: '2px solid #40454f',
  },
  '& > h6': {
    fontSize: 20,
  },
}));

export const NextSaleContainer = styled('div')(({ theme }) => ({
  maxWidth: 920,
  margin: '55px auto',
}));

export const NextSaleCard = styled(Paper)(({ theme }) => ({
  width: '100%',
  overflow: 'hidden',
  borderRadius: 12,
  position: 'relative',
  background: theme.palette.common.black,
  // '& > div': {
  //   minHeight: 700,
  // },
}));

export const SHOTag = styled(Paper)(({ theme }) => ({
  width: 'fit-content',
  height: 32,
  background: theme.palette.info.main,
  borderRadius: '4px',
  padding: '4px 12px',
  fontWeight: 700,
  color: '#fff',
  position: 'absolute',
  top: 0,
  right: 20,
}));

export const ImageCoin = styled('img')(({ theme }) => ({
  position: 'absolute',
  zIndex: -1,
  userSelect: 'none',
  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
}));
