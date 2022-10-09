import { useState, useEffect } from 'react';
import Head from 'next/head';
import { DefaultLayout } from '../layouts/default';
import {
  Grid,
  Box,
  CircularProgress,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import Link from 'next/link';
import { Post } from '../components/Post';

const GridItem = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    '&:nth-child(3n)': {
      maxWidth: '66.6%',
      flexBasis: '66.6%',
      marginLeft: '33.38%',
      '& .post': {
        height: '400px',
        alignItems: 'center',
      },
      '& .postImage': {
        width: '50%',
        height: '100%',
      },
      '& .postContent': {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        height: '100%',
      },
    },
    '&:nth-child(6n)': {
      maxWidth: '66.6%',
      flexBasis: '66.6%',
      marginLeft: 0,
      marginRight: '33.37%',
    },
    '&:nth-child(6n+4), &:nth-child(6n+5)': {
      '& .post': {
        flexDirection: 'row-reverse',
      },
    },
  },
}));

export default function HomePage() {
  const [posts, setPosts] = useState(null);
  const [hasError, setHasError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const postsByPage = 10;

  useEffect(() => {
    setIsLoading(true);
    const url =
      `https://stormy-shelf-93141.herokuapp.com/articles?_page=${currentPage}&_limit=${postsByPage}`;

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();

        setPosts(json);
      } catch (error) {
          console.log('error', error);
          setHasError(error);
      }
    };

    fetchData();
    setIsLoading(false);
  }, []);



  return (
    <DefaultLayout>
      <Head>
        <title>My Rockr Blog - Home</title>
      </Head>

      {isLoading &&
        <Box sx={{ display: 'flex' }}>
          <CircularProgress />
        </Box>}

      {(!hasError && posts && posts.length !== 0) &&
        <Grid container spacing={0} sx={{ mt: 4 }}>
          {posts.map(item => (
            <GridItem key={item.id} item md={6}>
              <Link href={`/post/${item.id}`}>
                <a title={item.title}>
                  <Post post={item} />
                </a>
              </Link>
            </GridItem>
          ))}
        </Grid>}

      {hasError &&
        <p>It was not possible to load Posts. Try again later</p>}

      {(!hasError && posts?.length === 0) &&
        <p>No posts found.</p>}
    </DefaultLayout>
  )
}
