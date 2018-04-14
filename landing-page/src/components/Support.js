import React from 'react';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';

const Support = () => {
  return (
    <div className="support">
      <Typography variant="headline" align="center" gutterBottom>
        Support
      </Typography>
      <Grid container spacing={24}>
        <Grid item xs={12}>
          <Button variant="raised" color="primary">24 hours trading</Button>
        </Grid>
        <Grid item xs={12}>
          <Button variant="raised" color="primary">Whats App support</Button>
        </Grid>
      </Grid>
    </div>
  )
}
export default withStyles()(Support);