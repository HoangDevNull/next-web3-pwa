import { TextField } from '@mui/material';
import { styled } from '@mui/material/styles';

export const TextInput = styled(TextField)(({ theme }) => ({
  'label + &': {
    marginTop: theme.spacing(3),
  },
  '& .MuiInputBase-root': {
    paddingRight: 4,
  },
  '& .MuiSvgIcon-root': {
    marginRight: 4,
  },
  '& .MuiInputBase-input': {
    borderRadius: 4,
    position: 'relative',
    padding: '10px 12px',
  },
}));
