import React from 'react';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Sidebar from '../Layouts/Sidebar/Sidebar';
import Hidden from '@material-ui/core/Hidden';
import useStyles from './styles'; 

const Orders = () => {
    const classes = useStyles();
    return(
        <div className={classes.root} >
            <Hidden only="xs">
                <Sidebar />
            </Hidden>
            <main className={classes.content}>
                <div className="appbarspace" />
                <Container maxWidth="lg">
                    <Grid container direction="row">
                        <Grid item xs={12}>
                            <Typography variant="h2">Orders</Typography>
                        </Grid>
                    </Grid>
                </Container>
            </main>
        </div>
    )
}
export default Orders;