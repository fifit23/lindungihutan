import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  button: {
    borderRadius: "50px",
    marginTop: "50px",
   
  },
  input: {
    display: 'none',
  },
}));

 function ContainedButtons() {
  const classes = useStyles();

  return (
    <div>
      
      <Button variant="contained" color="secondary" className={classes.button}>
       lengkapi profile
      </Button>
      
      <input
        accept="image/*"
        className={classes.input}
        id="contained-button-file"
        multiple
        type="file"
      />
    </div>
  );
}
export default ContainedButtons;