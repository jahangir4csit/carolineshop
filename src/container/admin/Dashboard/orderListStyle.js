import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme)=>({
    tableTitle: {
        padding: '24px 0 24px 30px',
        fontWeight: 500,
        fontSize: 20,
    },
    table: {
        width: '98%',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    tableHeading: {
        backgroundColor: 'rgb(244, 246, 248)',
        '& tr': {
            '& th':{
                borderBottom: '0',
            }
        }
    },
    cellRadiusLeft: {
        borderTopLeftRadius: 4,
        borderBottomLeftRadius: 4,
    },
    cellRadiusRight: {
        borderTopRightRadius: 4,
        borderBottomRightRadius: 4,
    },
    badge: {
        fontSize: 13,
      }
}));