import { ButtonGroup, styled } from '@mui/material';

export const StyledButtonGroup = styled(ButtonGroup)(({ theme }) => ({
  width: '100%',
  '& > button': {
    justifyContent: 'flex-start',
    padding: '8px 22px',
    borderRadius: 'unset !important',
  },
}));
