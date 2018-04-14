import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import Button from 'material-ui/Button';
import Divider from 'material-ui/Divider';
import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import List from 'material-ui/List';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import { menuList } from '../menuList';
import Menu, { MenuItem } from 'material-ui/Menu';
import Fade from 'material-ui/transitions/Fade';


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
class Header extends Component {
  
  state = {
    isOpen: false,
    anchorEl: null,
    lang: 'English'
  }
  
  toggleMenu = (open) => {
    this.setState({
      isOpen: open
    });
  }
  handleClose = (event) => {
    const lang = event.currentTarget.innerText;
    this.setState({
      anchorEl: null,
      lang
    })
  }
  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };
  render() {
    const { classes } = this.props;
    const { lang, isOpen, anchorEl } = this.state;
    const open = Boolean(anchorEl);
  
    console.log("classses", classes);
    return (
      <div className="header-color">
        <Drawer anchor="right" open={isOpen} onClose={() => this.toggleMenu(false)}>          
        <div
            tabIndex={0}
            role="button"
            onClick={()=>this.toggleMenu(false)}
            onKeyDown={()=>this.toggleMenu(false)}
          >
          <div>
            <Divider />
            <List>
            {menuList}
            </List>
          </div>
        </div>
          
        </Drawer>
          <AppBar style={{ background: 'white'}} position="static">
            <Toolbar>
              <Typography className={classes.flex} variant="title" color="inherit" noWrap>
                Logo
              </Typography>
              
              <Button>Login</Button>
              <Button>Register</Button>
              <Button onClick={this.handleMenu}>{lang}</Button>
              <Menu
          id="fade-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
          transition={Fade}
        >
         {languages.map((language, index) => <MenuItem onClick={this.handleClose}>{language}</MenuItem>)}
        </Menu>            
              <IconButton
                color="primary"
                aria-label="open menu"
                onClick={() => this.toggleMenu(!this.state.isOpen)}
              >
                <MenuIcon />
              </IconButton>
            </Toolbar>
          </AppBar>
          
      </div>
    );
  }
}

export default withStyles(styles, {withTheme: true})(Header);
