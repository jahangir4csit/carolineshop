import React from 'react';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Sidebar from '../../Layouts/Sidebar/Sidebar';
import useStyles from './styles'; 

const AddUser = () => {
    const classes = useStyles();
    return(
        <div className={classes.root} >
            <Box display="flex" >
                <Box>
                    <Sidebar />
                </Box>
                <Box flexGrow={1}>
                    <main className={classes.content}>
                        <div className="appbarspace" />
                        <Container maxWidth="lg">
                            <Grid container direction="row">
                                <Grid item xs={12}>
                                    <Typography variant="h2">Add User</Typography>
                                </Grid>
                            </Grid>
                        </Container>
                    </main>
                </Box>
            </Box>
        </div>
    )
}
export default AddUser;