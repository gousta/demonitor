import AppBar from '@material-ui/core/AppBar';
import { withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import React from 'react';

const styles = () => ({
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
});

const Header = ({ classes }) => (
  <div className={classes.root}>
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" color="inherit" className={classes.grow}>
          Deploy & Monitor Dashboard
        </Typography>
      </Toolbar>
    </AppBar>
  </div>
);

export default withStyles(styles)(Header);
