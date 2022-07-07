import type { NextPage } from 'next';
import Link from 'next/link';

import Button from '../components/Button/Button';
import TextField from '../components/TextField/TextField';
import Typography from '../components/Typography/Typography';
import Avatar from '../components/Avatar/Avatar';
import Checkbox from '../components/Checkbox/Checkbox';
import Box from '../components/Box/Box';
import Grid from '../components/Grid/Grid';
import Container from '../components/Container/Container';
import List from '../components/List/List/List';
import ListItem from '../components/List/ListItem/ListItem';
import ListItemButton from '../components/List/ListItemButton/ListItemButton';
import ListItemIcon from '../components/List/ListItemIcon/ListItemIcon';
import InboxIcon from '@mui/icons-material/Inbox';
import DeleteIcon from '@mui/icons-material/Delete';

const Sandbox: NextPage = () => {
  return (
    <div>
      <div>
        <Typography
          variant="h2"
          component="h1"
          align="center"
        >
          Sandbox
        </Typography>
        <Typography
          variant="body2"
          component="h2"
          align="center"
          gutterBottom
        >
          <Link href="/">
            <a>Back to home</a>
          </Link>{' '}
        </Typography>
        <Typography
          variant="h5"
          component="h2"
          align="center"
          gutterBottom
        >
          Just a page to test out the components
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
        <List>
          <ListItem divider>
            <ListItemButton
              primary="Primary text"
              secondary="Secondary text"
            >
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
          <ListItem divider>
            <ListItemButton
              primary="Primary text2"
              secondary="Secondary text2"
            >
              <ListItemIcon>
                <DeleteIcon />
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
        </List>
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

export default Sandbox;
