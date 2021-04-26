import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme)=>({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        margin: '70px auto',
        maxWidth: 600,
        boxShadow: 'none'
      },
      appHeader: {
        backgroundColor: 'transparent',
        boxShadow: 'none',
      },
      tabHeading:{
          fontSize: '24px',
          textTransform: 'capitalize',
      },
      formActionBottom: {
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(1),
        '& a':{
          color: '#211f1f',
        }
      },
      remember: {
        '& svg':{
          fontSize: '20px',
        }
      }
}));