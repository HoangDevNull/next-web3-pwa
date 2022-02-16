import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import { DialogTitle } from '@mui/material';

export const StyledDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialog-paper': {
    borderRadius: 8,
    [theme.breakpoints.down('sm')]: {
      borderRadius: 0,
    },
  },
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
}));

export const StyledDialogTitle = styled(DialogTitle)((theme) => ({
  fontSize: 16,
  fontWeight: 500,
  padding: '1rem',
}));
