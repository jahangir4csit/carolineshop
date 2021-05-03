import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme)=>({
    root: { 
        display: 'flex',
    },
    content: {
        flexGrow: 1,
        overflow: 'hidden',
      },
    form: {
        margin: theme.spacing(3),
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(3),
        '& .MuiTextField-root': {
            marginBottom: theme.spacing(2),
        },
    },
    formControl: {
        marginBottom: theme.spacing(4),
        minWidth: 230,
      },

}));