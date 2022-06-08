import type { NextPage } from 'next';

import Button from '../components/Button/Button';

const Home: NextPage = () => {
  return (
    <div>
      <p>This is the home page.</p>
      <Button label="My Button" variant="contained"></Button>
    </div>
  );
};

export default Home;
