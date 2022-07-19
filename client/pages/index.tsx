import type { NextPage } from 'next';
import Link from 'next/link';
import Typography from '../components/Typography/Typography';

const Home: NextPage = () => {
  return (
    <div>
      <Typography
        variant="body1"
        component="h1"
        align="center"
      >
        Hello world dashboard.
      </Typography>
      <Typography
        variant="body2"
        component="h2"
        align="center"
      >
        <Link href="/sandbox">
          <a>Sandbox</a>
        </Link>{' '}
      </Typography>
    </div>
  );
};

export default Home;
