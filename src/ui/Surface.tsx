import { styled } from '@mui/material/styles';

export const Surface = styled('div')(({ theme }) => ({
  background: theme.palette.mode === 'dark' ? '#181a1c' : '#fafbfd',
  padding: 12,
  borderRadius: 10,
}));
