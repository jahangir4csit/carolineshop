import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme)=>({
    root: { 
        display: 'flex',
    },
    content: {
        flexGrow: 1,
        overflow: 'hidden',
      },
    wbox: {
        backgroundColor: 'rgb(200, 250, 205)',
        display: 'flex',
        padding: theme.spacing(2),
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(3),
    },
    wboxContentWrap: {
        display: 'flex',
        flexDirection: 'column',
    },
    wboxContent: {
        flex: '1 0 auto',
        padding: theme.spacing(3),
        '& h2': {
            fontSize: 30,
            fontWeight: 500,
            marginBottom: 15,
        },
        '& p': {
            fontSize: 20,
            lineHeight: 1.3,
        }
    },
    cover: {
        width: 760,
        backgroundSize: 'contain'
    },
    paper: {
        padding: theme.spacing(3),
        color: '#fff',
        '& h4':{
            fontSize: '16px',
            fontWeight: '600',
        },
        '& h2': {
            fontSize: '22px',
            fontWeight: '500',
            color: '#fff',
        },
        '& p': {
            color: '#fff',
        }
    },
    success: {
        backgroundColor: theme.palette.success.main,
    },
    warning: {
        backgroundColor: theme.palette.warning.main,
    },
    danger: {
        backgroundColor: theme.palette.danger.main,
    },
    progress: {
        backgroundColor: theme.palette.progress.main,
    },
    cardIcon: {
        fontSize: 50,
        borderRadius: '50%',
        padding: 10,
        backgroundColor: '#fff',
    },
    icon1: {
        color: theme.palette.success.main,
    },
    icon2: {
        color: theme.palette.warning.main,
    },
    icon3: {
        color: theme.palette.progress.main,
    },
    icon4: {
        color: theme.palette.danger.main,
    },

    ContentSpacer: {
        padding: theme.spacing(3),
    }
    
    
}));
