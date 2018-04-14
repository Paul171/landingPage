import React from 'react';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
const menuItems = ['About Us', 'Fees Schedule', 'Suport','Faq'];
export const menuList = (
  <div>
  {menuItems.map((item, index) => {
    console.log("item");
    return (<ListItem key={index} button>
      <ListItemIcon>
      <InboxIcon />
    </ListItemIcon>
      <ListItemText primary={item} />
    </ListItem>);
  })}
</div>
);