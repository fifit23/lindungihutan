import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Border from '../Profile/border';
import IconAvatars from '../Profile/grid';



const useStyles = makeStyles({
  card: {
    maxWidth: "100%",
    background: 'linear-gradient(#045f50,rgba(16, 186,158,1))',
    color: "white",
    textAlign: "center",
  },
  gird: {
    marginTop: 0,
  }
});

 function Cardsakn() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
    
      <CardActionArea>
       <Border />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Fifit Qurnianti
          </Typography>
        </CardContent>
        <Typography variant="body2" component="p">
            Gabung Relawan Sekarang
        </Typography>
        <IconAvatars />
      </CardActionArea>
      <CardActions>
      </CardActions>
    </Card>
  );
}
export default Cardsakn;