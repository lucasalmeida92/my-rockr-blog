import { useState, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router'
import { DefaultLayout } from '../../layouts/default';
import {
  Container,
  Box,
  CircularProgress,
  Card,
  CardMedia,
  CardContent,
  Typography,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import removeTags from '../../utils/removeTags';

const Wrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  marginBottom: theme.spacing(6),
  borderRadius: 0,
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    height: 'auto',
  },
}));

const PostImage = styled(CardMedia)(({ theme }) => ({
  width: '50%',
  height: '400px',
  backgroundColor: '#eee',
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    height: '220px',
  },
}));

const PostHeader = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  position: 'relative',
  flex: '1',
  width: '50%',
  height: '400px',
  padding: '32px 80px',
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    padding: '32px 16px',
  },
}));

const PostText = styled(Typography)(({ theme }) => ({
  width: '100%',
  maxWidth: '620px',
  margin: '0 auto',
  padding: '72px 16px',
  [theme.breakpoints.down('sm')]: {
    padding: '0 16px 40px 16px',
  },
}));

export default function PostPage() {
  const router = useRouter()
  const { id: postId } = router.query;
  const [post, setPost] = useState(null);
  const [hasError, setHasError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.toLocaleString('en-US', { day: 'numeric' });
    const month = date.toLocaleString('en-US', { month: 'short' });
    const year = date.toLocaleString('en-US', { year: 'numeric' });

    return `${month} ${day}, ${year}`;
  }

  useEffect(() => {
    setIsLoading(true);
    const url =
      `https://stormy-shelf-93141.herokuapp.com/articles?id=${postId}`;

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();

        setPost(json[0]);
      } catch (error) {
          console.log('error', error);
          setHasError(error);
      }
    };

    fetchData();
    setIsLoading(false);
  }, [postId]);

  return (
    <DefaultLayout>
      <Head>
        <title>My Rockr Blog - Post</title>
      </Head>

      <Container maxWidth="md">
        <Box sx={{ mt: [2, 7], backgroundColor: '#fff' }}>
          {isLoading &&
            <Box sx={{ display: 'flex' }}>
              <CircularProgress />
            </Box>}

          {(!hasError && post) &&
            (
              <Wrapper component="article">
                <PostImage
                  component="img"
                  image={post.imageUrl}
                  alt="Post image"
                />
                <PostHeader>
                  <Typography
                    component="span"
                    color="secondary"
                    sx={{ fontSize: '12px', mb: 3, }}
                  >
                    {formatDate(post.date)}
                  </Typography>
                  <Typography
                    component="h3"
                    color="text"
                    sx={{ fontSize: '16px', mb: 2, }}
                  >
                    {post.author}
                  </Typography>
                  <Typography
                    component="h2"
                    variant="h1"
                    color="primary"
                    sx={{
                      mb: 1,
                    }}
                  >
                    {post.title}
                  </Typography>
                </PostHeader>
                <PostText component="p">
                  {removeTags(post.article)}
                </PostText>
              </Wrapper>
            )}

          {hasError &&
            <p>It was not possible to load the post. Try again later</p>}

          {(!hasError && !post) &&
            <p>No post found.</p>}
        </Box>
      </Container>

    </DefaultLayout>
  )
}
