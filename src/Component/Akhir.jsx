import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Bottomakhir from './Bottomakhir';


const useStyles = makeStyles({
  card: {
    maxWidth: "100%",
    marginTop: 8,
    position: "sticky",
    marginBottom: 35,
  },
});

 function Akhir() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardContent>
          Selengkapnya
          <Typography gutterBottom variant="h5" component="h2" class="Bolt">
          Ambil bagian untuk menghijaukan kembali Indonesia
          </Typography>
          <Bottomakhir />
        </CardContent>
      </CardActionArea>
      <CardActions>
      </CardActions>
    </Card>
  );
}
export default Akhir;