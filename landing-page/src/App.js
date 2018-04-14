import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import mobileTrading from './public/mobile-trading.jpg';
import Header from './components/Header';
import Footer from './components/Footer';
import TradeFlow from './components/TradeFlow';
import Support from './components/Support';
import CallForAction from './components/CallForAction';
import TradingPlatform from './components/TradingPlatform';
import Landing from './components/Landing';
import Security from './components/Security';
import './App.css';


const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};
class App extends Component {
  
  render() {
  
    return (
      <div>
        <Header/>
          <img className="mobile-img" src={mobileTrading} alt="mobile" />
          <Landing />
          <Security />     
          <TradeFlow/>
          <TradingPlatform/>
          <Support/>
          <CallForAction/>
          <Footer/>
      </div>
    );
  }
}

export default withStyles(styles)(App);
