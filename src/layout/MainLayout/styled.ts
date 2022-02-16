import { AppBar, ButtonGroup } from '@mui/material';
import { styled, css } from '@mui/material/styles';

export const StyledAppbar = styled(AppBar)(({ theme }) => ({
  background: theme.palette.background.paper,
  color: '#000',
  borderRadius: 0,
  '& > div': {
    minHeight: 72,
    display: 'grid',
    gridTemplateColumns: '120px 1fr 120px',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
}));

export const Content = styled('main')(({ theme }) => ({
  marginTop: 64,
  minHeight: 'calc(100vh - 64px)',
  width: '100%',
  // background: `url('/images/background.svg') 0% 0% / cover no-repeat rgba(255, 255, 255, 0.86)`,
  backgroundAttachment: 'fixed',
}));

export const StyledLink = styled('a', {
  shouldForwardProp: (prop) => prop !== 'active',
})<{ active?: boolean }>`
  color: ${({ theme }) => theme.palette.text.primary};
  text-decoration: unset;
  font-weight: bold;
  position: relative;

  &::before {
    content: '';
    width: 0%;
    height: 2px;
    position: absolute;
    bottom: -3px;
    background: ${({ theme }) => theme.palette.primary.main};
    transition: 0.5s;
  }
  &:hover::before {
    width: 100%;
  }

  ${(p) =>
    p.active &&
    css(`
    &::before {
      width: 100%;
    }
  `)}
`;

export const StyledButtonGroup = styled(ButtonGroup)(({ theme }) => ({
  width: '100%',
  '& > button': {
    justifyContent: 'flex-start',
    padding: '12px 32px',
    borderRadius: 'unset !important',
  },
}));
