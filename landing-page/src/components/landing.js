import React from 'react';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
const Landing = () => {
  return (
    <div className="landing">
            <Paper className="tag-line" elevation={4}>
              <Typography variant="headline" component="h1">
              next generation cryptocurrencies exchange
              </Typography>              
            </Paper>
            
            <Button variant="raised" color="primary">Create Account/Sign In</Button>
          </div>
  );
}

export default Landing;
