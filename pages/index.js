import Head from 'next/head';
import { DefaultLayout } from '../layouts/default';
import {
  Grid,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import Link from 'next/link';
import { Post } from '../components/Post';

const GridItem = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    '&:nth-child(3n)': {
      maxWidth: '66.6%',
      flexBasis: '66.6%',
      marginLeft: '33.37%',
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

let posts = [
  {
    id: 1,
    image: 'https://picsum.photos/640/640',
    author: 'Kelsi Monahan',
    title: 'Qui occaecati vero et quibusdam non',
    text: 'Saepe quia culpa vero. Velit numquam corporis nihil sint enim exercitationem. Rem nulla illum sint et id dolore voluptas ',
  },
  {
    id: 2,
    image: 'https://picsum.photos/640/640',
    author: 'Mrs. Alexanne Schneider',
    title: 'Architecto quos rem unde quia accusantium',
    text: 'Voluptatum omnis et dolor architecto non totam aspernatur sapiente. Et accusantium rem. Assumenda quia error ',
  },
  {
    id: 3,
    image: 'https://picsum.photos/640/640',
    author: 'Dagmar Ankunding',
    title: 'Repellat aliquam quo sit qui praesentium ut aliquid',
    text: 'Ea ut et labore quidem non sit in quidem. Provident est incidunt dignissimos enim qui consequatur numquam.',
  },
  {
    id: 4,
    image: 'https://picsum.photos/640/640',
    author: 'Kelsi Monahan',
    title: 'Qui occaecati vero et quibusdam non',
    text: 'Saepe quia culpa vero. Velit numquam corporis nihil sint enim exercitationem. Rem nulla illum sint et id dolore voluptas ',
  },
  {
    id: 5,
    image: 'https://picsum.photos/640/640',
    author: 'Mrs. Alexanne Schneider',
    title: 'Architecto quos rem unde quia accusantium',
    text: 'Voluptatum omnis et dolor architecto non totam aspernatur sapiente. Et accusantium rem. Assumenda quia error ',
  },
  {
    id: 6,
    image: 'https://picsum.photos/640/640',
    author: 'Dagmar Ankunding',
    title: 'Repellat aliquam quo sit qui praesentium ut aliquid',
    text: 'Ea ut et labore quidem non sit in quidem. Provident est incidunt dignissimos enim qui consequatur numquam.',
  },
  {
    id: 7,
    image: 'https://picsum.photos/640/640',
    author: 'Kelsi Monahan',
    title: 'Qui occaecati vero et quibusdam non',
    text: 'Saepe quia culpa vero. Velit numquam corporis nihil sint enim exercitationem. Rem nulla illum sint et id dolore voluptas ',
  },
  {
    id: 8,
    image: 'https://picsum.photos/640/640',
    author: 'Mrs. Alexanne Schneider',
    title: 'Architecto quos rem unde quia accusantium',
    text: 'Voluptatum omnis et dolor architecto non totam aspernatur sapiente. Et accusantium rem. Assumenda quia error ',
  },
];
posts = [...posts, ...posts];

export default function Home() {
  return (
    <DefaultLayout>
      <Head>
        <title>My Rockr Blog - Home</title>
      </Head>

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
      </Grid>
    </DefaultLayout>
  )
}
