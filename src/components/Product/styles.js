import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme)=>({
    cardMedia: {
        height: 0,
        paddingTop: '125%', // 16:9
    },
    productAction: {
        paddingTop: 0,
        paddingBottom: 0,
        position: 'relative',
    },
    CartButton: {
        textTransform: 'none',
    }

    
}));