import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme)=>({
    root: { 
        display: 'flex',
    },
    content: {
        flexGrow: 1,
        overflow: 'hidden',
      },
}));