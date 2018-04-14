import React from 'react';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
const CallForAction = () => {
  return (
    <div className="call-for-action">
      <Typography variant="headline" align="center" gutterBottom>
        Call For Action
      </Typography>
      <Grid container spacing={24}>
        <Grid item xs={12} align="center">
          <TextField
            id="email"
            label="Email"
            placeholder="Email"
            inputProps={{
              'aria-label': 'Email',
            }}
          />
        </Grid>
        <Grid item xs={12} align="center">
            <TextField
              id="password"
              label="Password"
              type="password"
              placeholder="Password"
              inputProps={{
                'aria-label': 'Password',
              }}
            />
        </Grid>
        <Grid item xs={12} align="center">
          <TextField
            id="confirmPassword"
            type="password"
            label="Confirm Passowrd"
            placeholder="Confirm Password"
            inputProps={{
              'aria-label': 'Confirm Password',
            }}
          />
        </Grid>
        <Grid item xs={12} align="center">
          <Button variant="raised" color="primary">SignUp</Button>
        </Grid>
      </Grid>
    </div>
  )
}
export default withStyles()(CallForAction);