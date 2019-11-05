import React from 'react';
import { lighten, makeStyles, withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';


const ColorLinearProgress = withStyles({
  colorPrimary: {
    backgroundColor: '#26a69a',
  },
  barColorPrimary: {
    backgroundColor: '#e0e0e0',
  },
})(LinearProgress);

const BorderLinearProgress = withStyles({
  root: {
    height: 5,
    backgroundColor: lighten('#e0e0e0', 0.5),
  },
  bar: {
    borderRadius: 10,
    backgroundColor: '#26a69a',
  },
})(LinearProgress);

// Inspired by the Facebook spinners.
const useStylesFacebook = makeStyles({
  root: {
    position: 'relative',
  },
  
  bottom: {
    color: '#26a69a',
    animationDuration: '30ms',
    position: 'absolute',
    left: 0,
  },
});

function FacebookProgress(props) {
  const classes = useStylesFacebook();

  return (
    <div className={classes.root}>
      
    </div>
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  margin: {
    margin: theme.spacing(1),
  },
}));

 function Progress() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <BorderLinearProgress
        className={classes.margin}
        variant="determinate"
        value={50}
      />
      <FacebookProgress />
      Penanaman
      1 Hari
    </div>
  );
}
export default Progress;