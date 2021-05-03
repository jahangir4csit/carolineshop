import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme)=>({
      root: { 
        display: 'flex',
    },
    content: {
        flexGrow: 1,
        overflow: 'hidden',
      },
      paper: {
        width: '100%',
        paddingTop: theme.spacing(1),
        marginBottom: theme.spacing(2),
      },
      table: {
        minWidth: 750,
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
      rowProductImg: {
        width: 64,
        height: 64,
        objectFit: 'cover',
        margin: '0px 16px',
        borderRadius: 12,
      },
      visuallyHidden: {
        border: 0,
        clip: 'rect(0 0 0 0)',
        height: 1,
        margin: -1,
        overflow: 'hidden',
        padding: 0,
        position: 'absolute',
        top: 20,
        width: 1,
      },

}));