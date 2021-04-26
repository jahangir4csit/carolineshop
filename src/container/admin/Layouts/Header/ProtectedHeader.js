import React from 'react'
//import useStyles from './styles';
import { fade, makeStyles } from '@material-ui/core/styles';
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
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuList from '@material-ui/core/MenuList';

import '../../assets/css/dashboard.css'

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'rgb(99, 115, 129)',
    fontSize: '20px'
  },
  inputRoot: {
    color: 'inherit',  
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      alignItems: 'center',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  appBar: {
      width: 'calc(100% - 281px)',
      boxShadow: 'none',
      backgroundColor: 'rgba(255, 255, 255, 0.72)',
      backdropFilter: 'blur(6px)',
  },
  iconRoot: {
    height: 42,
    '& span': {
        color: 'rgb(99, 115, 129)',
        fontSize: '20px',
    }
  },
  iconProfile: {
    height: 52,
    marginRight: 0,
    '& span': {
        color: 'rgb(99, 115, 129)',
        fontSize: '30px',
    }
  },
  paper: {
    marginRight: theme.spacing(4),
  },
  userprofile: {
    left: '-18px!important',
    zIndex: '111111'
  },
  userNav: {
    paddingTop: 0,
    paddingBottom: 0,
    '& li': {
      padding: '12px 24px',
      fontSize: 15,
      textAlign: 'center',
      '& div': {
        minWidth: 'auto',
        marginRight: 15,
      }
    },
  }


}));

const ProtectedHeader = () => {
    const classes = useStyles();

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

    return(
        <div className={classes.root}>
            <div className={classes.grow}>
                <AppBar position="fixed" className={classes.appBar }>
                    <Toolbar>
                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="open drawer"
                    >
                        <MenuIcon />
                    </IconButton>
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
                                      <Typography variant="inherit">Logout</Typography>
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
                        color="inherit"
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