import { styled } from '@mui/material/styles';
import {
  Box,
  Typography,
} from '@mui/material';

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
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  height: '56px',
  backgroundColor: theme.palette.neutral.main,
  color: '#ffffff',
}));

const PageContentWrapper = styled(Box)(() => ({
  gridArea: 'main',
  overflowY: 'auto',
}));

export const DefaultLayout = ({ children }) => {
  return (
    <Wrapper>
      <Header component="header">
        <Typography variant="h1">Rockr Blog</Typography>
        <ul>
          <li>Posts</li>
          <li>Contact</li>
        </ul>
      </Header>
      <PageContentWrapper component="main">
        {children}
      </PageContentWrapper>
    </Wrapper>
  );
};
