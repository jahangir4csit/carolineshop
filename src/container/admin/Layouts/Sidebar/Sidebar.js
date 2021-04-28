import React, {useState, useEffect, Fragment} from 'react';
import {Link} from 'react-router-dom';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { useTheme, withStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import IconButton from '@material-ui/core/IconButton';
import MenuList from '@material-ui/core/MenuList';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Drawer from '@material-ui/core/Drawer';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import Badge from '@material-ui/core/Badge';
import { ThemeProvider } from '@material-ui/core/styles';
import profileImg from '../../assets/img/profile.jpg';
import {adminTheme} from '../../theme';
import useStyles from './styles';
import { Typography } from '@material-ui/core';

import AvTimerOutlinedIcon from '@material-ui/icons/AvTimerOutlined';
import AddShoppingCartOutlinedIcon from '@material-ui/icons/AddShoppingCartOutlined';
import ClearAllOutlinedIcon from '@material-ui/icons/ClearAllOutlined';
import ShopTwoOutlinedIcon from '@material-ui/icons/ShopTwoOutlined';
import SupervisorAccountOutlinedIcon from '@material-ui/icons/SupervisorAccountOutlined';

const StyledBadge = withStyles((theme) => ({
  badge: {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: '$ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}))(Badge);

const Sidebar = () => {
    const classes = useStyles();
    const theme = useTheme();

    const[value,setValue] = useState(0)
    const handleChange = (e, value) =>{
        setValue(value)
    }

    const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
    const matches = useMediaQuery(theme.breakpoints.down('sm'));
    const [openDrawer, setOpenDrawer] = useState(false);

    const tabs = (
        <React.Fragment>
          <Tabs 
          orientation="vertical" 
          variant="scrollable"
          indicatorColor="primary" 
          value={value} 
          onChange={handleChange} 
          className={classes.tabContainer}>
            <Tab icon={<AvTimerOutlinedIcon />} className={classes.tab} component={Link} to={'/admin/dashboard'} label="Dashboard" />
            <Tab icon={<AddShoppingCartOutlinedIcon />} className={classes.tab} component={Link} to="/admin/products" label="Products" />
            <Tab icon={<ClearAllOutlinedIcon />} className={classes.tab} component={Link} to="/admin/categories" label="Categories" />
            <Tab icon={<ShopTwoOutlinedIcon />} className={classes.tab} component={Link} to="/admin/orders" label="Orders" />
            <Tab icon={<SupervisorAccountOutlinedIcon />} className={classes.tab} component={Link} to="/admin/users" label="Users" />
          </Tabs>
        </React.Fragment>
    )
    const drawer = (
        <React.Fragment>
          <SwipeableDrawer 
          disableBackdropTransition={!iOS} 
          disableDiscovery={iOS} 
          open={openDrawer}
          onClose={()=>setOpenDrawer(false)} 
          onOpen={()=>setOpenDrawer(true)}
          classes={{paper: classes.drawerWrap}}>
            <List disablePadding>
              <ListItem 
              className={classes.drawerItem} 
              onClick={()=> {setOpenDrawer(false); setValue(0)}} 
              component={Link} to="/admin/dashboard"
              selected={value === 0}>
                <ListItemText 
                className={value===0 ? [classes.drawerItem,classes.drawerItemSelected] : classes.drawerItem} 
                disableTypography>Dashboard</ListItemText>
              </ListItem>
              <ListItem 
              className={classes.drawerItem} 
              onClick={()=> {setOpenDrawer(false); setValue(1)}} 
              component={Link} to="/admin/products"
              selected={value === 1}>
                <ListItemText
                className={value===1 ? [classes.drawerItem,classes.drawerItemSelected] : classes.drawerItem} 
                disableTypography>Products</ListItemText>
              </ListItem>
              <ListItem 
              className={classes.drawerItem} 
              onClick={()=> {setOpenDrawer(false); setValue(2)}}
              component={Link} to="/admin/categories"
              selected={value === 2}>
                <ListItemText 
                className={value===2 ? [classes.drawerItem,classes.drawerItemSelected] : classes.drawerItem}
                disableTypography>Categories</ListItemText>
              </ListItem>
              <ListItem 
              className={classes.drawerItem} 
              onClick={()=> {setOpenDrawer(false); setValue(3)}}  
              component={Link} to="/admin/orders"
              selected={value === 3}>
                <ListItemText 
                className={value===3 ? [classes.drawerItem,classes.drawerItemSelected] : classes.drawerItem} 
                disableTypography>Orders</ListItemText>
              </ListItem>
              <ListItem 
              className={classes.drawerItem} 
              onClick={()=> {setOpenDrawer(false); setValue(4)}}  
              component={Link} to="/admin/users"
              selected={value === 4}>
                <ListItemText 
                className={value===4 ? [classes.drawerItem,classes.drawerItemSelected] : classes.drawerItem} 
                disableTypography>Users</ListItemText>
              </ListItem>
            </List>
          </SwipeableDrawer>
          <IconButton className={classes.DrawerIconContainer} onClick={()=>setOpenDrawer(!openDrawer)} disableRipple>
            <MenuIcon className={classes.drawerIcon} />
          </IconButton>
        </React.Fragment>
      )

    return (
        <Fragment>
              <ThemeProvider theme={adminTheme}>
                <Drawer variant="permanent" className={classes.drawerWrap}>
                  <Paper className={classes.sideProfile}>
                    <ListItem>
                    <StyledBadge
                        overlap="circle"
                        anchorOrigin={{
                          vertical: 'bottom',
                          horizontal: 'right',
                        }}
                        variant="dot"
                      >
                        <Avatar alt="profile" src={profileImg} />
                      </StyledBadge>
                      <ListItemText className={classes.profileText} primary="Travis" secondary="admin" />
                    </ListItem>
                  </Paper>
                  <div className={classes.navWrap}>
                    <Typography component="h3" className={classes.navHeading}>GENERAL</Typography>
                    {matches ? drawer : tabs}
                  </div>
                </Drawer>
              </ThemeProvider>
        </Fragment>
    )
}
export default Sidebar;