import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Sidebar from '../../Layouts/Sidebar/Sidebar';
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Hidden from '@material-ui/core/Hidden';
import { setSnackbar } from "../../../../store/reducers/snackbarReducer";
import { newUser } from '../../../../store/actions/userAction';


import useStyles from './styles'; 

const AddUser = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();

    const { userInfo } = useSelector( state => state.auth );
    const { loading, success, error } = useSelector((state)=> state.newUser);

    const token = userInfo.userInfo.token;

    const [userData, setUserData] = useState({
        username: '', email: '', phone: '', password: '', role: '',
        address: {
            geolocation: {
                lat: '',
                long: '',
            },
            city: '',
            street: '',
            number: '',
            zipcode: ''
        }
    });

    // create new User
    useEffect(() => {
        if(error){
            dispatch(setSnackbar(true,"error","User Create Failed"));
        }
        if(success){
            dispatch(setSnackbar(true,"success","User Created Successfully"));
            history.push('/admin/users');
        }
    }, [dispatch, error, success, history])

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(newUser(userData, token))
    }

    return(
        <div className={classes.root} >
            <Hidden only="xs">
                <Sidebar />
            </Hidden>
            <main className={classes.content}>
                        <div className="appbarspace" />
                <Container maxWidth="lg">
                    <Grid container direction="column" spacing="2">
                        <Grid item xs={12}>
                            <Typography variant="h2" className="contentHeading">Create New User</Typography>
                        </Grid>
                        <Grid item sx={12} md={12}>
                            <Paper className={classes.paper}>
                                <form className={classes.form} encType="multipart/form-data" noValidate autoComplete="off" onSubmit={handleSubmit}>
                                    <Grid container direction="row" spacing="4">
                                        <Grid item xs={12} sm={6}>
                                            {/* <TextField
                                            name="fname"
                                            variant="outlined"
                                            label="First Name"
                                            fullWidth
                                            value={userData.fname}
                                            onChange={(e)=> setUserData({...userData, fname: e.target.value})} />
                                        
                                            <TextField
                                            name="lname"
                                            variant="outlined"
                                            label="Last Name"
                                            fullWidth
                                            value={userData.lname}
                                            onChange={(e)=> setUserData({...userData, lname: e.target.value})} /> */}

                                            <TextField
                                            name="username"
                                            variant="outlined"
                                            label="Username"
                                            fullWidth
                                            value={userData.username}
                                            onChange={(e)=> setUserData({...userData, username: e.target.value})} />

                                            <TextField
                                            name="email"
                                            variant="outlined"
                                            label="Email"
                                            fullWidth
                                            value={userData.email}
                                            onChange={(e)=> setUserData({...userData, email: e.target.value})} />   

                                            <TextField
                                            name="phone"
                                            type="number"
                                            variant="outlined"
                                            label="Phone"
                                            fullWidth
                                            value={userData.phone}
                                            onChange={(e)=> setUserData({...userData, phone: e.target.value })} />

                                            <TextField
                                            id="password"
                                            name="password"
                                            type="password"
                                            variant="outlined"
                                            label="Password"
                                            autoComplete="current-password"
                                            fullWidth
                                            value={userData.password}
                                            onChange={(e)=> setUserData({...userData, password: e.target.value })} />
                                    
                                            <FormControl variant="outlined" className={classes.formControl}>
                                                <InputLabel htmlFor="role">Role</InputLabel>
                                                <Select
                                                label="Role"
                                                onChange={(e)=> setUserData({...userData, role: e.target.value })}
                                                >
                                                    <MenuItem value="admin">Admin</MenuItem>
                                                    <MenuItem value="user">User</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <Typography variant="subtitle1" gutterBottom>
                                                Address:
                                            </Typography>
                                            <Grid container direction="row" spacing="2" alignItems="center">
                                                <Grid item xs>
                                                    <Typography variant="subtitle1" gutterBottom>
                                                        Geolocation:
                                                    </Typography>
                                                </Grid>
                                                <Grid item xs>
                                                    <TextField
                                                    name="lat"
                                                    variant="outlined"
                                                    label="Latitude "
                                                    fullWidth
                                                    value={userData.address.geolocation.lat}
                                                    onChange={(e)=> setUserData({
                                                        ...userData, 
                                                        address: {...userData.address, 
                                                        geolocation: {...userData.address.geolocation, lat: e.target.value}}})} />
                                                </Grid>
                                                <Grid item xs>
                                                    <TextField
                                                    name="long"
                                                    variant="outlined"
                                                    label="Longitude"
                                                    fullWidth
                                                    value={userData.address.geolocation.long}
                                                    onChange={(e)=> setUserData({
                                                    ...userData, 
                                                    address: {...userData.address, 
                                                    geolocation: {...userData.address.geolocation, long: e.target.value
                                                    }}})} />
                                                </Grid>
                                            </Grid>
                                            <TextField
                                            name="city"
                                            variant="outlined"
                                            label="City"
                                            fullWidth
                                            value={userData.address.city}
                                            onChange={(e)=> setUserData({...userData, address: {...userData.address, city: e.target.value} })} />

                                            <TextField
                                            name="street"
                                            variant="outlined"
                                            label="Street"
                                            fullWidth
                                            value={userData.address.street}
                                            onChange={(e)=> setUserData({...userData, address: {...userData.address, street: e.target.value} })} />

                                            <Grid container direction="row" spacing="2">
                                                <Grid item xs>
                                                    <TextField
                                                    name="number"
                                                    type="number"
                                                    variant="outlined"
                                                    label="Street Number"
                                                    fullWidth
                                                    value={userData.address.number}
                                                    onChange={(e)=> setUserData({...userData, address: {...userData.address, number: parseInt(e.target.value)} })} />
                                                </Grid>
                                                <Grid item xs>
                                                    <TextField
                                                    name="zipcode"
                                                    variant="outlined"
                                                    label="Zipcode"
                                                    fullWidth
                                                    value={userData.address.zipcode}
                                                    onChange={(e)=> setUserData({...userData, address: {...userData.address, zipcode: e.target.value} })} />
                                                </Grid>
                                            </Grid>

                                        </Grid>
                                    </Grid>
                                    
                                    <Box display="flex" justifyContent="flex-end">
                                        <Box p={1}>
                                            <Button
                                                type="submit"
                                                color="primary"
                                                variant="container"
                                                startIcon={<AddOutlinedIcon />}
                                                className="btn-submit">
                                                Create
                                            </Button>
                                        </Box>
                                    </Box>
                                </form>
                            </Paper>
                        </Grid>
                    </Grid>
                </Container>
            </main>
        </div>
    )
}
export default AddUser;