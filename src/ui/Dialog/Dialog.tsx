import React, { FC } from 'react';
import { StyledDialog } from './styled';
import { DialogProps, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/system';

const Dialog: FC<DialogProps> = ({ children, ...props }) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <StyledDialog fullScreen={fullScreen} {...props}>
      {children}
    </StyledDialog>
  );
};

export default Dialog;
