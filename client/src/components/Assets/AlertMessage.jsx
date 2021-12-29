import React from "react";
import Alert from '@mui/material/Alert';
import { Grid } from '@mui/material';

const AlertMassage = ({ setOpenAlert, message }) => {

  return (
    <Grid item>
      <Alert
        severity="error"
        onClose={() => {
          setOpenAlert(false);
        }}
      >
        {message}
      </Alert>
    </Grid>
  );
}

export default AlertMassage;