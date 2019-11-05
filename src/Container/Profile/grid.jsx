import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import PageviewIcon from '@material-ui/icons/Facebook';
import AssignmentIcon from '@material-ui/icons/Twitter';
import Grid from '@material-ui/core/Grid';
import ContainedButtons from '../Profile/bottom';

const useStyles = makeStyles({
  bagikan:{
      marginTop: "60px",
      marginLeft: "20px",
    
  },
  pinkAvatar: {
    margin: 5,
    color: '#fff',
    backgroundColor: "#3f51b5",
    marginTop: "50px",
    width: 30,
    height: 30,
    
  },
  greenAvatar: {
    margin: 5,
    color: '#fff',
    backgroundColor: "#2196f3",
    marginTop: "50px",
    width: 30,
    height: 30,
  },
});
 function IconAvatars() {
  const classes = useStyles();

  return (
    <Grid container justify="center" alignItems="center">
      <h3 className={classes.bagikan}>
          Bagikan:
     </h3>
      <Avatar className={classes.pinkAvatar}>
        <PageviewIcon />
      </Avatar>
      <Avatar className={classes.greenAvatar}>
        <AssignmentIcon />
      </Avatar>
      <ContainedButtons />
    </Grid>
  );
}
export default IconAvatars;