import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {Link} from "react-router-dom";
import Button from '@material-ui/core/Button';
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
import Sidebar from '../Layouts/Sidebar/Sidebar';
import useStyles from './styles';
import DataTable from './userList'; 
import Hidden from '@material-ui/core/Hidden';

import {getUsers} from '../../../store/actions/userAction';

const Users = () => {
    const classes = useStyles();
    const { userInfo } = useSelector( state => state.auth );
    const { loading, users, error } = useSelector((state)=> state.users);
    const token = userInfo.userInfo.token;

        // Get Products
        const dispatch = useDispatch();
        useEffect(() => {
            dispatch(getUsers(token));
        }, [dispatch, token])
       
    return(
        <div className={classes.root} >
            <Hidden only="xs">
                <Sidebar />
            </Hidden>
            <main className={classes.content}>
                <div className="appbarspace" />
                <Container maxWidth="lg">
                    <Grid container direction="column" spacing="3">
                        <Grid item xs={12}>
                            <Box display="flex">
                                <Box flexGrow={1}>
                                    <Typography variant="h2" className="contentHeading">All Users</Typography>
                                </Box>
                                <Box>
                                    <Button
                                    variant="contained"
                                    className="createButton"
                                    component={Link} to="/admin/user/create"
                                    startIcon={<AddOutlinedIcon />}
                                    >
                                        Create User
                                    </Button>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={7}>
                            {users ? <DataTable /> : 'Empty data' }
                        </Grid>
                    </Grid>
                </Container>
            </main>
        </div>
    )
}
export default Users;