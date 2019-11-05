import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Bottomme from '../Kampanye/bottom';


const useStyles = makeStyles({
  card: {
    maxWidth: '100%',
    background: 'linear-gradient(#045f50,rgba(16, 186,158,1))',
    borderRadius:  "30px 30px",
    borderTopLeftRadius: "0px",
    borderTopRightRadius: "0px",
    borderBottomRightRadius: '30px',
    borderBottomLeftRadius: "30px",
    color: "white",

  },
});

 function Cardkam() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h4" component="h2">
            Kampanye Alam
          </Typography>
          <Typography variant="body2"  component="h5">
          Mulai Kampanye Alam pertamamu, buat gerakan penanaman atau aksi lingkungan dengan mudah, aman dan transparan. 
          </Typography>
        </CardContent>
        <div className={classes.Bottoom2}>
              <Bottomme />
          </div>
      </CardActionArea>
    </Card>
  );
}
export default Cardkam;