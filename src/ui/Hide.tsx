import { NoSsr } from '@mui/material';
import React, { FC } from 'react';

export const Hide: FC<{ if?: boolean }> = (props) => {
  return <NoSsr>{props.if ? null : <>{props.children}</>}</NoSsr>;
};
