import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme)=>({
    
    /* ===== Button Style ======= */
    editBtn: {
        backgroundColor: 'rgba(0, 171, 85, 0.08)',
        borderRadius: 4,
        padding: '5px 3px 2px 7px',
        fontSize: 18,
        marginRight: 4,
    },
    deleteBtn: {
        backgroundColor: 'rgba(255,69,0, 0.09)',
        borderRadius: 4,
        padding: '6px 7px 1px 7px',
        fontSize: 18,
        verticalAlign: 'baseline',
        display: 'inline',
        marginLeft: 4,
        color: '#FF0000'
    }

}));