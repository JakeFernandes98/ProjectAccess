import type { NextPage } from 'next';

import Button from '../components/Button/Button';
import TextField from '../components/TextField/TextField';
import Typography from '../components/Typography/Typography';
import Avatar from '../components/Avatar/Avatar';
import FormControlLabel from '../components/FormControlLabel/FormControlLabel';
import Checkbox from '../components/Checkbox/Checkbox';

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
        <br />
        <Avatar
          src="https://i0.wp.com/sbcf.fr/wp-content/uploads/2018/03/sbcf-default-avatar.png?ssl=1"
          alt="Avatar image"
          sx={{ width: 24, height: 24 }}
        ></Avatar>
        <FormControlLabel
          control={<Checkbox color="primary" />}
          label="Remember me"
          value="Remember me"
        />
      </div>
    </div>
  );
};

export default Home;
