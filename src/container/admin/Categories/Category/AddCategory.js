import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { TextField, Button, Paper } from '@material-ui/core';
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
import Typography from '@material-ui/core/Typography';
import Sidebar from '../../Layouts/Sidebar/Sidebar';
import Hidden from '@material-ui/core/Hidden';
import useStyles from './styles'; 

import { setSnackbar } from "../../../../store/reducers/snackbarReducer";
import { newCategory } from '../../../../store/actions/categoryAction';

const AddCategory = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();

    const { isAuthenticated, userInfo } = useSelector( state => state.auth );
    const { success, error } = useSelector((state)=> state.newCategory);

    const token = userInfo.userInfo.token;
    const [productData, setProductData] = useState({
        name: '', description: '',
    });

    // create new Category
    useEffect(() => {
        if(error){
            dispatch(setSnackbar(true,"error","Category Create Failed"));
            history.push('/admin/categories');
        }
        if(success){
            dispatch(setSnackbar(true,"success","Category Created Successfully"));
            history.push('/admin/categories');
        }
    }, [dispatch, error, success, history])

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(newCategory(productData, token));
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
                            <Typography variant="h2" className="contentHeading">Create New Category</Typography>
                        </Grid>
                        <Grid item sx={12} md={6}>

                            <Paper className={classes.paper}>
                                <form className={classes.form} noValidate autoComplete="off" onSubmit={handleSubmit}>
                                    <TextField
                                    name="title"
                                    variant="outlined"
                                    label="Title"
                                    fullWidth
                                    value={productData.name}
                                    onChange={(e)=> setProductData({...productData, name: e.target.value})} />

                                    <TextField
                                    name="description"
                                    variant="outlined"
                                    label="Description"
                                    fullWidth
                                    value={productData.description}
                                    onChange={(e)=> setProductData({...productData, description: e.target.value})} />

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
export default AddCategory;