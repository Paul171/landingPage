import React from 'react';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import Copyright from '@material-ui/icons/Copyright';


const Footer = (props) => {

  return (
    <footer>
      <Grid container spacing={24}>
        <Grid item xs>
          <Typography variant="body1" align="center" gutterBottom>
            About Us
          </Typography>
        </Grid>
        <Grid item xs>
          <Typography variant="body1" align="center" gutterBottom>
            Faq
          </Typography>
        </Grid>
        <Grid item xs>
          <Typography variant="body1" align="center" gutterBottom>
            WhatsApp #
          </Typography>
        </Grid>
        <Grid item xs>
          <Typography variant="body1" align="center" gutterBottom>
            Fees Structure
          </Typography>
        </Grid>        
      </Grid>
      <Grid container spacing={24}>
        <Grid item xs>
          <Typography variant="body1" align="center" gutterBottom>
            Terms and Condition
          </Typography>
        </Grid>
        <Grid item xs>
          <Typography variant="body1" align="center" gutterBottom>
            Privacy Policy
          </Typography>
        </Grid>
        <Grid item xs>
          <Typography variant="body1" align="center" gutterBottom>
            Copyright <Copyright style={{ fontSize: 14 }}/> Coinbama 2018
          </Typography>
        </Grid>
        <Grid item xs>
          <Typography variant="body1" align="center" gutterBottom>
            &nbsp;
          </Typography>
        </Grid>        
      </Grid>
      <Grid className="sub-content" container spacing={24}>
        <Grid item xs>
          <Typography variant="body1" gutterBottom>
          Disclaimer: High Risk Warning: Trading cryptocurrencies such as bitcoin and blockchain tokens such as ether carries a high level of risk, and may not be suitable for all investors. The high degree of price volatility can result in incredible losses as well as gains. Before deciding to trade cryptocurrencies or blockchain tokens you should carefully consider your investment objectives, level of experience, and risk appetite. The possibility exists that you could sustain a loss of some or all of your initial investment and therefore you should not invest using funds that you cannot afford to lose. You should be aware of all the risks associated with the trading of digital assets, and seek advice from an independent financial advisor if you have any specific concerns. Please read our full risk warning.
          </Typography>
        </Grid>        
      </Grid>
      <Grid className="sub-content" container spacing={24}>
        <Grid item xs>
          <Typography variant="body1" align="center" gutterBottom>
          Company Ltd. is a private limited company registered in Hong Kong SAR. ####. All references on this site to 'Gatecoin' refer to Gatecoin Ltd. and its consolidated subsidiaries.
          </Typography>
        </Grid>        
      </Grid>
      <Grid className="sub-content" container spacing={24}>
        <Grid item xs>
          <Typography variant="body1" align="center" gutterBottom>
          #address
          </Typography>
        </Grid>        
      </Grid>      
    </footer>
  )
};

export default withStyles()(Footer);