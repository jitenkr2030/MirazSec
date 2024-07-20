import React from 'react';
import { Drawer, List, ListItem, ListItemText } from '@material-ui/core';
import { Link } from 'react-router-dom';

const Sidebar: React.FC = () => (
  <Drawer variant="permanent">
    <List>
      <ListItem button component={Link} to="/">
        <ListItemText primary="Dashboard" />
      </ListItem>
      <ListItem button component={Link} to="/guard-management">
        <ListItemText primary="Guard Management" />
      </ListItem>
      <ListItem button component={Link} to="/client-management">
        <ListItemText primary="Client Management" />
      </ListItem>
      <ListItem button component={Link} to="/field-officer-features">
        <ListItemText primary="Field Officer Features" />
      </ListItem>
    </List>
  </Drawer>
);

export default Sidebar;
