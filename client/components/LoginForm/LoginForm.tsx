import * as React from 'react';
import Avatar from '../Avatar/Avatar';
import Button from '../Button/Button';
import TextField from '../TextField/TextField';
import Checkbox from '../Checkbox/Checkbox';
import Grid from '../Grid/Grid';
import Box from '../Box/Box';
import Typography from '../Typography/Typography';
import Container from '../Container/Container';

import Link from 'next/link';

export default function LoginForm() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    {
      /** NOTE: call to db and verification of credentials will be needed here. To access the input, use `data.get('email')` and `data.get('password')` */
    }
  };

  return (
    <Container
      component="main"
      maxWidth="xs"
      sx={{
        marginTop: '20vh',
      }}
    >
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
          borderRadius: 2,
          p: 2,
        }}
        component="div"
      >
        <Avatar
          src="https://i0.wp.com/sbcf.fr/wp-content/uploads/2018/03/sbcf-default-avatar.png?ssl=1"
          alt="Default avatar image"
          sx={{ m: 1, bgcolor: 'secondary.main' }}
        />
        <Typography
          component="h1"
          variant="h5"
        >
          Sign in
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{ m: 2 }}
        >
          <TextField
            required
            fullWidth
            label="Email Address"
            type="email"
            name="email"
            id="email"
            sx={{ pb: 1 }}
          />
          <TextField
            required
            fullWidth
            label="Password"
            type="password"
            name="password"
            id="password"
            sx={{ pb: 1 }}
          />
          <Checkbox label="Remember me" />
          <Button
            fullWidth
            color="primary"
            variant="contained"
            label="Sign In"
            type="submit"
            sx={{ mb: 1, mt: 1 }}
          />
          <Grid container>
            <Grid
              item
              xs
            >
              {/** NOTE: currently sends user back to home page - needs to be replaced by relevant link */}
              <Typography
                component="p"
                variant="body2"
              >
                <Link href="/">Forgot password?</Link>
              </Typography>
            </Grid>
            <Grid item>
              {/** NOTE: currently sends user back to home page - needs to be replaced by relevant link*/}
              <Typography
                component="p"
                variant="body2"
              >
                <Link href="/">No account? Sign up</Link>
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
