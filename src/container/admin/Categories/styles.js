import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme)=>({
    paper: {
        width: '100%',
        paddingTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
      },
      table: {
        minWidth: 650,
        marginLeft: 'auto',
        marginRight: 'auto',
      },
      tableHeading: {
        '& tr': {
            '& th':{
                borderBottom: '0',
                backgroundColor: 'rgb(244, 246, 248)',
            }
        }
    },

}));