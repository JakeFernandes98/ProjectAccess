import type { NextPage } from 'next';
import Typography from '../components/Typography/Typography';

const Home: NextPage = () => {
  return (
    <div>
      <Typography
        variant="body1"
        component="h1"
        align="center"
      >
        Landing page.
      </Typography>
    </div>
  );
};

export default Home;
