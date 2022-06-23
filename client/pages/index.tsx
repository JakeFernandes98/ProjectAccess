import type { NextPage } from 'next';

import Button from '../components/Button/Button';
import TextField from '../components/TextField/TextField';
import Typography from '../components/Typography/Typography';

const Home: NextPage = () => {
  return (
    <div>
      <header>
        <Typography
          variant="h2"
          component="h1"
          align="center"
          gutterBottom
        >
          Hello, welcome to our homepage
        </Typography>
        <Typography
          variant="body1"
          component="p"
          align="center"
          color="primary"
        >
          This is an example of our body typography text using the primary
          color.
        </Typography>
        <Typography
          variant="body1"
          component="p"
          align="center"
          color="secondary"
          gutterBottom
        >
          This is an example using the secondary color.
        </Typography>
      </header>
      <div>
        <Button
          label="This is a button"
          variant="contained"
        ></Button>
        <br />
        <Button
          label="This is another button"
          variant="outlined"
          color="secondary"
        ></Button>
        <br />
        <TextField
          label="Email text field"
          variant="filled"
          type="email"
        ></TextField>
        <br />
        <TextField
          label="Password text field"
          variant="filled"
          type="password"
        ></TextField>
      </div>
    </div>
  );
};

export default Home;
