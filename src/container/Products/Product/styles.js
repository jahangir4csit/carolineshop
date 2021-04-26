import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme)=>({
    thumb: {
        maxHeight: '450px',
    },
    btnSize: {
        padding: '4px 12px',
        borderRadius: 0,
        marginRight: '10px',
        '&:not(:last-child)':{
            borderLeft: '1px solid rgba(0, 0, 0, 0.12)',
            marginLeft: 'auto',
        },
        '&:not(:first-child)':{
            borderLeft: '1px solid rgba(0, 0, 0, 0.12)',
            marginLeft: 'auto',
        },
        '&:hover': {
            backgroundColor: '#000',
            color: '#fff'
        }
    }


    
}));