import type { NextPage } from 'next';

import Button from '../components/Button/Button';
import TextField from '../components/TextField/TextField';
import Typography from '../components/Typography/Typography';
import Avatar from '../components/Avatar/Avatar';
import Checkbox from '../components/Checkbox/Checkbox';
import Box from '../components/Box/Box';
import Grid from '../components/Grid/Grid';
import Container from '../components/Container/Container';

const Home: NextPage = () => {
  return (
    <div>
      <div>
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
      </div>
      <Container
        component="main"
        maxWidth="xs"
      >
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
          component="span"
        >
          <Grid
            container
            columns={12}
            direction="column"
            rowSpacing={1}
          >
            <Grid
              container
              item
              xs={6}
              justifyContent="center"
            >
              <Avatar
                src="https://i0.wp.com/sbcf.fr/wp-content/uploads/2018/03/sbcf-default-avatar.png?ssl=1"
                alt="Avatar image"
                sx={{ width: 48, height: 48 }}
              ></Avatar>
            </Grid>
            <Grid
              container
              item
              xs={6}
              justifyContent="center"
            >
              <TextField
                label="Email text field"
                variant="filled"
                type="email"
              ></TextField>
            </Grid>
            <Grid
              container
              item
              xs={6}
              justifyContent="center"
            >
              <TextField
                label="Password text field"
                variant="filled"
                type="password"
              ></TextField>
            </Grid>
          </Grid>
          <Grid
            container
            direction="row"
            rowSpacing={3}
          >
            <Grid
              container
              item
              xs={3}
            />
            <Grid
              container
              item
              xs={6}
              justifyContent="flex-start"
            >
              <Checkbox label="My Checkbox" />
            </Grid>
            <Grid
              container
              item
              xs={3}
            />
            <Grid
              container
              item
              xs={3}
            />
            <Grid
              container
              item
              xs={6}
            >
              <Button
                label="Sign In"
                variant="contained"
                color="primary"
                fullWidth
              ></Button>
            </Grid>
            <Grid
              container
              item
              xs={3}
            />
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default Home;
