import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, IconButton, List, ListItem, ListItemIcon, ListItemText, Drawer, Hidden } from '@material-ui/core';
import { Home, Description, WbIncandescent, Info, Mail, Menu as MenuIcon } from '@material-ui/icons';
import { useSpring, animated } from 'react-spring';

const useStyles = makeStyles((theme) => ({
  appBar: {
    background: '#BFAE9F', // --primary-100
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    color: '#4D4D4D', // --text-100
    textDecoration: 'none',
    marginRight: '2rem',
  },
  listItem: {
    color: '#9e9e9e', // --text-200
    marginLeft: '2rem',
  },
  navMenu: {
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      width: '100%',
      marginTop: '1rem',
    },
    
  },
  drawer: {
    background: '#EEE3D7', // --bg-200
    width: '240px',
  },
}));

const Header = () => {
  const classes = useStyles();
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
  const drawerAnimation = useSpring({
    transform: isDrawerOpen ? 'translateX(0)' : 'translateX(-100%)',
  });

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6" component={Link} to="/" className={classes.logo}>
          DevWise
        </Typography>
        <Hidden smUp>
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer}>
            <MenuIcon />
          </IconButton>
          <Drawer anchor="right" open={isDrawerOpen} onClose={toggleDrawer}>
            <animated.div style={drawerAnimation}>
              <List className={classes.drawer}>
                <ListItem button component={Link} to="/">
                  <ListItemIcon><Home /></ListItemIcon>
                  <ListItemText primary="Início" />
                </ListItem>
                <ListItem button component={Link} to="/articles">
                  <ListItemIcon><Description /></ListItemIcon>
                  <ListItemText primary="Artigos" />
                </ListItem>
                <ListItem button component={Link} to="/tutorials">
                  <ListItemIcon><Home /></ListItemIcon>
                  <ListItemText primary="Tutoriais" />
                </ListItem>
                <ListItem button component={Link} to="/tips">
                  <ListItemIcon><WbIncandescent /></ListItemIcon>
                  <ListItemText primary="Dicas" />
                </ListItem>
                <ListItem button component={Link} to="/about">
                  <ListItemIcon><Info /></ListItemIcon>
                  <ListItemText primary="Sobre" />
                </ListItem>
                <ListItem button component={Link} to="/contact">
                  <ListItemIcon><Mail /></ListItemIcon>
                  <ListItemText primary="Contato" />
                </ListItem>
              </List>
            </animated.div>
          </Drawer>
        </Hidden>
        <Hidden xsDown>
          <List component="nav" className={classes.navMenu}>
            <ListItem button component={Link} to="/">
              <ListItemIcon><Home /></ListItemIcon>
              <ListItemText primary="Início" />
            </ListItem>
            <ListItem button component={Link} to="/articles">
              <ListItemIcon><Description /></ListItemIcon>
              <ListItemText primary="Artigos" />
            </ListItem>
            <ListItem button component={Link} to="/tutorials">
              <ListItemIcon><Home /></ListItemIcon>
              <ListItemText primary="Tutoriais" />
            </ListItem>
            <ListItem button component={Link} to="/tips">
              <ListItemIcon><WbIncandescent /></ListItemIcon>
              <ListItemText primary="Dicas" />
            </ListItem>
            <ListItem button component={Link} to="/about">
              <ListItemIcon><Info /></ListItemIcon>
              <ListItemText primary="Sobre" />
            </ListItem>
            <ListItem button component={Link} to="/contact">
              <ListItemIcon><Mail /></ListItemIcon>
              <ListItemText primary="Contato" />
            </ListItem>
          </List>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
