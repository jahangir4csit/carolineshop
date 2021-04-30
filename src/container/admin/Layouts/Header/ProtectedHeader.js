import React, {useState} from 'react'
import {useHistory, Link} from "react-router-dom";
import ListItemText from '@material-ui/core/ListItemText';
import {useSelector, useDispatch} from 'react-redux';
import { useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import PermIdentityOutlinedIcon from '@material-ui/icons/PermIdentityOutlined';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import MenuList from '@material-ui/core/MenuList';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import { logout } from '../../../../store/actions/authAction';
import { setSnackbar } from "../../../../store/reducers/snackbarReducer";

import '../../assets/css/dashboard.css'
import useStyles from './styles'; 

const ProtectedHeader = () => {
    const classes = useStyles();
    const theme = useTheme();
    const history = useHistory();
    const dispatch = useDispatch();

    // user Logout process
    const logoutHandler = () => {
    dispatch(logout());
    dispatch(setSnackbar(true,"success","Logged Out Successfully"));
    history.push('/');
  };

  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
  const matches = useMediaQuery(theme.breakpoints.down('sm'));
  const [openDrawer, setOpenDrawer] = useState(false);

    // Profile dropdown
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);


  // ** end dropdown

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  
    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  
    const handleProfileMenuOpen = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleMobileMenuClose = () => {
      setMobileMoreAnchorEl(null);
    };
  
    const handleMenuClose = () => {
      setAnchorEl(null);
      handleMobileMenuClose();
    };
  
    const handleMobileMenuOpen = (event) => {
      setMobileMoreAnchorEl(event.currentTarget);
    };
    const menuId = 'primary-search-account-menu';

    const renderMenu = (
        <Menu
          anchorEl={anchorEl}
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
          id={menuId}
          keepMounted
          transformOrigin={{ vertical: 'top', horizontal: 'right' }}
          open={isMenuOpen}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
          <MenuItem onClick={handleMenuClose}>Settings</MenuItem>
          <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
        </Menu>
      );
    
      const mobileMenuId = 'primary-search-account-menu-mobile';

    const renderMobileMenu = (
        <Menu
          anchorEl={mobileMoreAnchorEl}
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
          id={mobileMenuId}
          keepMounted
          transformOrigin={{ vertical: 'top', horizontal: 'right' }}
          open={isMobileMenuOpen}
          onClose={handleMobileMenuClose}
        >
          <MenuItem>
            <IconButton aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="secondary">
                <MailIcon />
              </Badge>
            </IconButton>
            <p>Messages</p>
          </MenuItem>
          <MenuItem>
            <IconButton aria-label="show 11 new notifications" color="inherit">
              <Badge badgeContent={11} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <p>Notifications</p>
          </MenuItem>
          <MenuItem onClick={handleProfileMenuOpen}>
            <IconButton
              aria-label="account of current user"
              aria-controls="primary-search-account-menu"
              aria-haspopup="true"
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <p>Profile</p>
          </MenuItem>
        </Menu>
      );

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
              onClick={()=> {setOpenDrawer(false); }} 
              component={Link} to="/admin/dashboard"
              >
                <ListItemText 
                disableTypography>Dashboard</ListItemText>
              </ListItem>
              <ListItem 
              className={classes.drawerItem} 
              onClick={()=> {setOpenDrawer(false); }} 
              component={Link} to="/admin/products"
              >
                <ListItemText
                disableTypography>Products</ListItemText>
              </ListItem>
              <ListItem 
              className={classes.drawerItem} 
              onClick={()=> {setOpenDrawer(false);}}
              component={Link} to="/admin/categories"
              >
                <ListItemText 
                disableTypography>Categories</ListItemText>
              </ListItem>
              <ListItem 
              className={classes.drawerItem} 
              onClick={()=> {setOpenDrawer(false);}}  
              component={Link} to="/admin/orders"
              >
                <ListItemText 
                disableTypography>Orders</ListItemText>
              </ListItem>
              <ListItem 
              className={classes.drawerItem} 
              onClick={()=> {setOpenDrawer(false)}}  
              component={Link} to="/admin/users">
                <ListItemText 
                disableTypography>Users</ListItemText>
              </ListItem>
            </List>
          </SwipeableDrawer>
          <IconButton 
          aria-label="open drawer"
          edge="start" 
          className={classes.DrawerIconContainer} 
          onClick={()=>setOpenDrawer(!openDrawer)} 
          disableRipple>
            <MenuIcon className={classes.drawerIcon} />
          </IconButton>
        </React.Fragment>
      )

    return(
        <div className={classes.root}>
            <div className={classes.grow}>
                <AppBar position="fixed" className={classes.appBar }>
                    <Toolbar>
                      {matches ? drawer : ''}
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                        <SearchIcon />
                        </div>
                        <InputBase
                        placeholder="Search…"
                        classes={{
                            root: classes.inputRoot,
                            input: classes.inputInput,
                        }}
                        inputProps={{ 'aria-label': 'search' }}
                        />
                    </div>
                    <div className={classes.grow} />
                    <div className={classes.sectionDesktop}>
                        <IconButton className={classes.iconRoot} aria-label="show mails" color="inherit">
                        <Badge variant="dot" color="primary">
                            <MailIcon />
                        </Badge>
                        </IconButton>
                        <IconButton className={classes.iconRoot} aria-label="show notifications" color="inherit">
                        <Badge variant="dot" color="primary">
                            <NotificationsIcon />
                        </Badge>
                        </IconButton>
                        <IconButton
                        edge="end"
                        ref={anchorRef}
                        aria-controls={open ? 'menu-list-grow' : undefined}
                        aria-haspopup="true"
                        onClick={handleToggle}
                        className={classes.iconProfile}
                        >
                        <AccountCircle />
                        </IconButton>
                        <Popper open={open} anchorEl={anchorRef.current} role={undefined} 
                        transition disablePortal className={classes.userprofile}>
                          {({ TransitionProps, placement }) => (
                            <Grow
                              {...TransitionProps}
                              style={{ transformOrigin: placement === 'bottom' ? 'left top' : 'left bottom' }}
                            >
                              <Paper>
                                <ClickAwayListener onClickAway={handleClose}>
                                  <MenuList className={classes.userNav} autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                                    <MenuItem onClick={handleClose}>
                                      <ListItemIcon>
                                        <PermIdentityOutlinedIcon />
                                      </ListItemIcon>
                                      <Typography variant="inherit">Profile</Typography>
                                    </MenuItem>
                                    <MenuItem onClick={handleClose}>
                                      <ListItemIcon>
                                        <SettingsOutlinedIcon />
                                      </ListItemIcon>
                                      <Typography variant="inherit">Settings</Typography>
                                    </MenuItem>
                                    <MenuItem onClick={handleClose}>
                                      <ListItemIcon>
                                        <ExitToAppOutlinedIcon />
                                      </ListItemIcon>
                                      <Typography onClick={logoutHandler} variant="inherit">Logout</Typography>
                                    </MenuItem>
                                  </MenuList>
                                </ClickAwayListener>
                              </Paper>
                            </Grow>
                          )}
                        </Popper>
                    </div>
                    <div className={classes.sectionMobile}>
                        <IconButton
                        aria-label="show more"
                        aria-controls={mobileMenuId}
                        aria-haspopup="true"
                        onClick={handleMobileMenuOpen}
                        >
                        <MoreIcon />
                        </IconButton>
                    </div>
                    </Toolbar>
                </AppBar>
                {renderMobileMenu}
                {renderMenu}
            </div>
        </div>
    )
}
export default ProtectedHeader;