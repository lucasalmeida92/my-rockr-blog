import { styled } from '@mui/material/styles';
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
} from '@mui/material';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import removeTags from '../utils/removeTags';

const Wrapper = styled(Card)(({ theme }) => ({
  display: 'flex',
  height: '200px',
  boxShadow: '0px 6px 10px rgba(0, 0, 0, 0.1)',
  marginBottom: theme.spacing(6),
  borderRadius: 0,
  transition: '150ms all ease-out',
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    height: 'auto',
  },
  '&:hover': {
    transform: 'scale(1.01)',
    'h2': {
      textShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
    },
    'svg': {
      transform: 'translateX(4px) scale(1.2)',
    },
  },
}));

const StyledCardContent = styled(CardContent)(({ theme }) => ({
  position: 'relative',
  flex: '1',
  paddingLeft: '48px',
  paddingRight: '48px',
  [theme.breakpoints.down('sm')]: {
    paddingLeft: '16px',
    paddingRight: '16px',
  },
}));

const StyledCardMedia = styled(CardMedia)(({ theme }) => ({
  width: '33.3%',
  minWidth: '180px',
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    height: '160px',
  },
}));

const DoubleArrow = styled(DoubleArrowIcon)(({ theme }) => ({
  position: 'absolute',
  right: '24px',
  bottom: '24px',
  transition: '150ms all ease-out',
  [theme.breakpoints.down('sm')]: {
    right: '16px',
    top: '12px',
  },
}));

export const Post = ({ post }) => {
  return (
    <Wrapper component="article" className="post">
      <StyledCardMedia
        component="img"
        className="postImage"
        image={post.imageUrl}
        alt="Post image"
      />
      <StyledCardContent className="postContent">
        <Typography
          component="h3"
          color="text"
          sx={{ fontSize: '14px', mb: 1, }}
        >
          {post.author}
        </Typography>
        <Typography
          component="h2"
          variant="h1"
          color="primary"
          sx={{
            mb: 1,
            transition: '200ms all ease-out',
            overflow: 'hidden',
            display: '-webkit-box',
            '-webkit-line-clamp': '2',
            '-webkit-box-orient': 'vertical',
          }}
        >
          {removeTags(post.title)}
        </Typography>
        <Typography
          component="p"
          sx={{
            overflow: 'hidden',
            display: '-webkit-box',
            '-webkit-line-clamp': '3',
            '-webkit-box-orient': 'vertical',
          }}
        >
          {removeTags(post.article)}
        </Typography>
        <DoubleArrow color="secondary" />
      </StyledCardContent>
    </Wrapper>
  );
};
