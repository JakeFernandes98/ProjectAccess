import * as React from 'react';
import Card from '../Card/Card';
import CardActions from '../CardActions/CardActions';
import CardContent from '../CardContent/CardContent';
import CardMedia from '../CardMedia/CardMedia';
import Button from '../../Button/Button';
import Typography from '../../Typography/Typography';

export default function BasicCard() {
  return (
    <Card sx={{ maxWidth: 400 }}>
      <CardMedia
        component="img"
        height="180"
        image="https://i0.wp.com/sbcf.fr/wp-content/uploads/2018/03/sbcf-default-avatar.png?ssl=1"
        alt="default image - grey avatar"
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="h1"
        >
          Mentor
        </Typography>
        <Typography
          variant="body1"
          component="p"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Typography>
      </CardContent>
      <CardActions>
        <Button label="Learn More"></Button>
        <Button label="Contact Me"></Button>
      </CardActions>
    </Card>
  );
}
