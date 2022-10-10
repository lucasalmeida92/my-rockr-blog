import { useState } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import {
  Box,
  Container,
  Typography,
  Button,
  Drawer,
} from '@mui/material';
import Link from 'next/link';
import useMediaQuery from '@mui/material/useMediaQuery';
import MenuIcon from '@mui/icons-material/Menu';
import { ContactModal } from '../components/ContactModal';

const Wrapper = styled(Box)(() => ({
  height: '100vh',
  display: 'grid',
  gridTemplateColumns: '1fr',
  gridTemplateRows: 'auto 1fr',
  gridTemplateAreas: `'header' 'main'`,
}));

const Header = styled(Box)(({ theme }) => ({
  overflow: 'hidden',
  gridArea: 'header',
  height: '64px',
  backgroundColor: theme.palette.neutral.main,
  color: '#ffffff',
}));

const PageContentWrapper = styled(Box)(() => ({
  gridArea: 'main',
  overflowY: 'auto',
  overflowX: 'hidden',
}));

export const DefaultLayout = ({ children }) => {
  const theme = useTheme();
  const isGreaterThanSmBreakpoint = useMediaQuery(theme.breakpoints.up('sm'));
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  const Menu = () => (
    <Box
      component="ul"
      sx={{
        listStyle: 'none',
        '& > li': {
          display: 'inline-block',
          ml: 5,
          fontSize: '20px',
          fontWeight: '500',
          color: '#ffffff',
          [theme.breakpoints.down('sm')]: {
            display: 'block',
            ml: 0,
            mb: 5,
          },
        },
        [theme.breakpoints.down('sm')]: {
          minWidth: '220px',
          minHeight: '100%',
          backgroundColor: theme.palette.neutral.main,
          p: 4,
        },
      }}
    >
      <li>
        <Link href="/">
          <a title="Posts" onClick={() => setIsMenuOpen(false)}>Posts</a>
        </Link>
      </li>
      <li>
        <a
          title="Contact"
          href="#"
          onClick={() => {
            setIsContactOpen(true);
            setIsMenuOpen(false);
          }}
        >
          Contact
        </a>
      </li>
    </Box>
  );

  return (
    <Wrapper>
      <Header component="header">
        <Container
          maxWidth="md"
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: 'inherit',
          }}
        >
          <Typography variant="h1">
            <Link href="/">
              <a title="Rockr Blog">Rockr Blog</a>
            </Link>
          </Typography>
          {isGreaterThanSmBreakpoint
            ? <Menu />
            : <>
                <Button onClick={() => setIsMenuOpen(prev => !prev)}>
                  <MenuIcon sx={{ fontSize: '24px', color: '#fff' }} />
                </Button>
                <Drawer
                  anchor="right"
                  open={isMenuOpen}
                  onClose={() => setIsMenuOpen(false)}
                >
                  <Menu />
                </Drawer>
              </>
          }
        </Container>
      </Header>
      <PageContentWrapper component="main">
        {children}
      </PageContentWrapper>
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </Wrapper>
  );
};
