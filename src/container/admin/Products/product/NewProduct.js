import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import FileBase from 'react-file-base64';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Sidebar from '../../Layouts/Sidebar/Sidebar';
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';

import { newProduct } from '../../../../store/actions/productAction';


import useStyles from './styles'; 

const NewProduct = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const { isAuthenticated, userInfo } = useSelector( state => state.auth );
    const { loading, success, error } = useSelector((state)=> state.newProduct);
    const token = userInfo.userInfo.token;

    const [productData, setProductData] = useState({
        title: '', price: '', description: '', category: '', stock: 0, image: ''
    });

    // create new product
    useEffect(() => {
        if(error){
            console.log('Product Create Failed');
        }
        if(success){
            console.log('Product Created Successfully');
        }
    }, [dispatch, error, success ])

    console.log(productData);
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(newProduct(productData, token))
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
                                    <Typography variant="h2" className="contentHeading">Create New Product</Typography>
                                </Grid>
                                <Grid item sx={12} md={6}>
                                    <Paper className={classes.paper}>
                                        <form className={classes.form} noValidate autoComplete="off" onSubmit={handleSubmit}>
                                            <TextField
                                            name="title"
                                            variant="outlined"
                                            label="Title"
                                            fullWidth
                                            value={productData.Title}
                                            onChange={(e)=> setProductData({...productData, title: e.target.value})} />

                                            <TextField
                                            name="price"
                                            variant="outlined"
                                            label="Price"
                                            fullWidth
                                            value={productData.price}
                                            onChange={(e)=> setProductData({...productData, price: e.target.value})} />

                                            <TextField
                                            name="description"
                                            variant="outlined"
                                            label="Description"
                                            fullWidth
                                            value={productData.description}
                                            onChange={(e)=> setProductData({...productData, description: e.target.value})} />

                                            <TextField
                                            name="category"
                                            variant="outlined"
                                            label="Category"
                                            fullWidth
                                            value={productData.category}
                                            onChange={(e)=> setProductData({...productData, category: e.target.value})} />

                                            <div className={classes.fileInput}>
                                                <FileBase 
                                                    type="file"
                                                    name="image"
                                                    multiple="false"
                                                    onDone={({base64})=>setProductData({...productData, selectedFile: base64})}
                                                />
                                            </div>
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
export default NewProduct;