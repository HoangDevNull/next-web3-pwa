import { Box, styled, SxProps, Theme } from '@mui/material';
import { FC } from 'react';

const Wrapper = styled(Box)(({ theme }) => ({
  maskImage: `url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTAwIDBDMjAgMCAwIDIwIDAgMTAwczIwIDEwMCAxMDAgMTAwIDEwMC0yMCAxMDAtMTAwUzE4MCAwIDEwMCAweiIvPjwvc3ZnPg==)`,
  maskSize: 'contain',
  maskRepeat: 'no-repeat',
  maskPosition: 'center',
  '& > img': {
    height: '100%',
    width: '100%',
    objectFit: 'cover',
  },
}));

interface LogoProps {
  src: string;
  alt?: string;
  sx: SxProps<Theme>;
}

export const Logo: FC<LogoProps> = ({ alt, src, sx }) => {
  return (
    <Wrapper sx={sx}>
      <img src={src} alt={alt} />
    </Wrapper>
  );
};
