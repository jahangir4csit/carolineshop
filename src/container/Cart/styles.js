import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme)=>({

    table: {
        width: '100%',
    },
    cartTable: {
        boxShadow: 'none',
        marginBottom: '3rem',
    },
    button: {
        borderRadius: '0px',
        fontSize: '13px',
        lineHeight: '1.5',
        color: '#fff',
        padding: '15px 28px',
        letterSpacing: '0.125rem',
        background: '#141414',
        textTransform: 'uppercase',
        fontWeight: '500',
        boxShadow: 'none',
        '&:hover':{
            background: '#141414',
        }
    },
    btn_outline:{
        background: 'transparent',
        border: '1px solid #CFCFCF',
        color: '#000',
        boxShadow: 'none',
        '&:hover':{
            background: 'transparent',
        }
    },
    cuponInput:{
        marginRight: theme.spacing(2),
        '& input':{
            backgroundColor: '#fff',
            padding: '22px 12px 10px',
        }
    },
    mb3: {
        marginBottom: theme.spacing(3),
    },
    my3: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
    },
    cartTotal: {
        marginTop: '8rem',
    },
    cartTotalTable: {
        margin: '3rem 0',
        boxShadow: 'none',
    },
    radiobutton: {
        '& svg':{
            width: '1.5em',
            height: '1.5em'
        }
    },
    
}));