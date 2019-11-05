import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Progress from '../Component/Progress';



const useStyles = makeStyles(theme => ({
  card: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 250,
    height: 100,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
}));

 function Card4() {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Card className={classes.card}>
         <CardMedia
        className={classes.cover}
        image={require("../image/Tanam.png")}
        title="Live from space album cover"
      />
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5" class="Bolt">
           #SatuHutan: Pohon Untuk Masa Depan Bedono
          </Typography>
          <Progress />
        </CardContent>
      </div>
    </Card>
  );
}
export default Card4;