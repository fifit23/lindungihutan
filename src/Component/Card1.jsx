import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import gambar from '../image/lindungi.jpeg';
import Bottoom from './Botom';
const useStyles = makeStyles({
  card: {
    maxWidth: "100%",
    
  },
  media: {
    height: 140,
  },
});


 function Cards1() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <img src={gambar} width="112%" height="100%" />
        <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
        Hal sederhana, jadi lebih bermakna bersama LindungiHutan.
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
        Buat Aksi penanaman dan lingkungan dengan mudah, aman dan transparant. Mulai Tanam 
        #PohonPertama Kamu
        </Typography>
          <Bottoom />
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
export default Cards1;