import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import mobileTrading from './public/mobile-trading.jpg';
import backgroundImage from './public/background-image.jpg';
import Header from './components/Header';
import Footer from './components/Footer';
import TradeFlow from './components/TradeFlow';
import Support from './components/Support';
import CallForAction from './components/CallForAction';
import TradingPlatform from './components/TradingPlatform';
import Landing from './components/Landing';
import Security from './components/Security';
import './App.css';


const languages = ['Chinese', 'English'];
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
  
  state = {
    isOpen: false,
    anchorEl: null,
  }
  
  toggleMenu = (open) => {
    this.setState({
      isOpen: open
    });
  }
  handleClose = () => {
    this.setState({
      anchorEl: null
    })
  }
  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };
  render() {
    const { classes } = this.props;
    const { isOpen, anchorEl } = this.state;
    const open = Boolean(anchorEl);

    console.log("classses", classes);
    return (
      <div>
        <Header/>
          <img className="mobile-img" src={mobileTrading} />
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
