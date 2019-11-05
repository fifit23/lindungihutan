import React from 'react';
import Box from '@material-ui/core/Box';

const defaultProps = {
  bgcolor: 'linear-gradient(#045f50,rgba(16, 186,158,1))',
  borderColor: '#045f50',
  border: 1,
  style: { width: '8rem', height: '8rem' },
  marginTop: "20%",
  boxShadow: "0px 5px #00897b",
};

 function BorderRadius() {
  return (
    <Box display="flex" justifyContent="center">
      <Box borderRadius="50%" {...defaultProps} />
    </Box>
  );
}
export default BorderRadius;