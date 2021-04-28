import { makeStyles } from '@material-ui/core/styles';
export default makeStyles((theme)=>({
    root: {
      flexGrow: 1,
      backgroundColor: '#fff',
    },
    toolbarTop: {
      backgroundColor: '#211f1f',
      padding: '6px 25px',
      position: 'relative',
      minHeight: 'auto',
      '& p':{
        color: '#fff',
        fontSize: '14px',
        textTransform: 'uppercase',
        marginBottom: '0',
        '& small':{
          fontWeight: '400',
          fontSize: '14px',
          textTransform: 'none',
        }
      },
    },
    contact: {
      color: '#fff',
      fontSize: '13px',
      '& span': {
        marginLeft: '5px',
      },
      [theme.breakpoints.down("sm")]: {
        justifyContent: 'center',
      },
    },
    socialLink: {
      '& a': {
        color: '#fff',
        fontSize: '17px',
        margin: '0 5px',
        '&:hover':{
          color: theme.palette.primary.main,
        },
      },
      [theme.breakpoints.down("sm")]: {
        textAlign: 'center',
      }
    },
    tabContainer: {
      background: 'transparent',
      border: 0,
      marginLeft: 'auto',
      paddingTop: '28px',
      paddingBottom: '28px',
    },
    tab: {
      color: '#000',
      opacity: 1,
      '&:hover': {
        color: theme.palette.primary.main,
      },
      '&:focus': {
        color: theme.palette.primary.main,
      }
    },
    cartNav: {
      color: '#000',
      '& button':{
        '&:hover': {
          color: theme.palette.primary.main,
          background: 'transparent',
        },
        '&:focus': {
          color: theme.palette.primary.main,
          background: 'transparent',
        }
      },
      '& svg': {
        fontSize: '26px',
      },
    },
    badge: {
      '& span': {
        color: '#fff',
      }
    },
    mainNavContainer: {
      [theme.breakpoints.down("sm")]: {
        paddingTop: '12px',
        paddingBottom: '12px'
      },
    },
    mainNav: {
      [theme.breakpoints.down("sm")]: {
        flexDirection: 'row-reverse',
      },
    },
    navContainer: {
      [theme.breakpoints.down("sm")]: {
        justifyContent: 'flex-end',
      },
    },
    paper: {
      marginRight: theme.spacing(2),
    },
    userprofile: {
      left: '-15px!important',
      zIndex: '111111'
    }
  }));