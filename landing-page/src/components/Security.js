import React from 'react';
import Typography from 'material-ui/Typography';


const Security = () => {
  return (
  <section className="security">
    <Typography variant="headline" className="header" component="h1">
        Our Commitment to Security
    </Typography>
    <Typography variant="body1" gutterBottom align="left" color="textSecondary">
        We store your BTC and ETH in segregated wallets. BTC funds will be stored in multisig cold wallets to ensure the highest level of controls to manage your funds.
    </Typography>
  </section>);

};
export default Security;