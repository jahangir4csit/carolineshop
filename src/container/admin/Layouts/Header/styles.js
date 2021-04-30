import { fade, makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme)=>({
    grow: {
        flexGrow: 1,
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
      [theme.breakpoints.down('sm')]: {
        width: '100%',
      },
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


}))