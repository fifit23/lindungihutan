import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import gambar from '../image/Card2.png';
import Grid from '@material-ui/core/Grid';



const useStyles = makeStyles({
  card: {
    maxWidth: "100%",
    Height: "200px",
    backgroundImage: `url(${gambar})`,
    marginTop: 8,
    color: 'white',
  },
  grid: {
    flexGrow: 1,
    textAlign: 'center',
    height:100,
    color:'white',
  }
});

 function Card2() {
  const classes = useStyles();
 
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="body" component="body"> 
          LindungiHutan adalah platform crowdplanting penggalangan dana online untuk konservasi hutan dan lingkungan.
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          </Typography>
          <div className={classes.grid}>
          <Grid container spacing={3}>
          <Grid item xs={6} xs={3}>
           <h2>754.1jt</h2>
           Donasi
           Alam
          </Grid>
          <Grid item xs={6} xs={3}>
            <h2>74.2k</h2>
            Pohon
            Tertanam
          </Grid>
          <Grid item xs={6} xs={3}>
          <h2>4.2k</h2>
            Sahabat
            Alam
          </Grid>
          <Grid item xs={6} xs={3}>
          <h2>317</h2>
            Kampanye
            Alam
            </Grid>
          </Grid>
        </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
export default Card2;