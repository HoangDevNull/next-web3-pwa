import React, { FC } from 'react';
import { StyledDialogTitle } from './styled';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

interface DialogTitleProps {
  onClose?: () => void;
}

const DialogTitle: FC<DialogTitleProps> = ({ children, onClose }) => {
  return (
    <StyledDialogTitle>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.common.black,
          }}
        >
          <CloseIcon sx={{ color: 'text.primary' }} fontSize="small" />
        </IconButton>
      ) : null}
    </StyledDialogTitle>
  );
};

export default DialogTitle;
