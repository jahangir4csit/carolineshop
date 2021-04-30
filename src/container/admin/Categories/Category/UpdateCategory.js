import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { TextField, Button, Paper } from '@material-ui/core';
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
import Typography from '@material-ui/core/Typography';
import Sidebar from '../../Layouts/Sidebar/Sidebar';
import useStyles from './styles'; 

import { setSnackbar } from "../../../../store/reducers/snackbarReducer";
import { updateCategory, getCategoryDetails } from '../../../../store/actions/categoryAction';

const AddCategory = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const params = useParams();
    const history = useHistory();

    const categoryId = params.id;

    const { userInfo } = useSelector( state => state.auth );
    const { isUpdated, error } = useSelector((state)=> state.updateCategory);
    const {loading, category } = useSelector((state)=> state.categoryDetails);

    const token = userInfo.userInfo.token;
    const [formData, setFormData] = useState({
        name: '', description: '',
    });

    // update Category
    useEffect(() => {
        if(category && category._id !== categoryId){
            dispatch(getCategoryDetails(categoryId));
        }else{
            setFormData({ name: category.name, description: category.description })
        }
        if(error){
            dispatch(setSnackbar(true,"error","Category Update Failed"));
            history.push('/admin/categories');
        }
        if(isUpdated){
            dispatch(setSnackbar(true,"success","Category Update Successfully"));
            history.push('/admin/categories');
        }
    }, [dispatch, error, isUpdated, history, categoryId, category])

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updateCategory(categoryId, token, formData));
    }

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
                                            value={formData.name}
                                            onChange={(e)=> setFormData({...formData, name: e.target.value})} />

                                            <TextField
                                            name="description"
                                            variant="outlined"
                                            label="Description"
                                            fullWidth
                                            value={formData.description}
                                            onChange={(e)=> setFormData({...formData, description: e.target.value})} />

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
                </Box>
            </Box>
        </div>
    )
}
export default AddCategory;