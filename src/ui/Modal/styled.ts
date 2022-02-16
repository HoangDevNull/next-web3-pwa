import { Button, InputBase } from '@mui/material';
import { styled } from '@mui/material/styles';

export const ConnectButton = styled(Button)(({ theme }) => ({
  minHeight: 58,
  borderRadius: 12,
  background: theme.palette.mode === 'light' ? '#edeef2' : theme.palette.background.paper,
  border: theme.palette.mode === 'light' ? '1px solid #ced0d9' : '1px solid #333',
  color: theme.palette.text.primary,
  display: 'flex',
  justifyContent: 'space-between',
  padding: '6px 16px',
  fontWeight: 500,
  '&:hover': {
    borderColor: '#e8006f',
    background: theme.palette.mode === 'light' ? '#edeef2' : theme.palette.background.paper,
    borderWidth: 1,
  },

  '& > img': {
    width: 24,
    height: 24,
  },
}));

export const CommonInput = styled(InputBase)(({ theme }) => ({
  'label + &': {
    marginTop: theme.spacing(3),
  },
  '& .MuiInputBase-input': {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.mode === 'light' ? '#fcfcfb' : '#2b2b2b',
    border: `1px solid ${theme.palette.primary.main}`,
    padding: '10px 12px',
    transition: theme.transitions.create(['border-color', 'background-color', 'box-shadow']),
  },
}));

export const SocialButton = styled(Button)(({ theme }) => ({
  minHeight: 30,
  borderRadius: 4,
  background: 'transparent',
  color: theme.palette.text.primary,
  display: 'flex',
  border: `2px solid ${theme.palette.primary.main}`,
  justifyContent: 'space-between',
  fontWeight: 500,
  padding: '0 16px',
  '&:hover': {
    borderColor: 'red',
    border: `2px solid ${theme.palette.primary.main}`,
  },
}));
