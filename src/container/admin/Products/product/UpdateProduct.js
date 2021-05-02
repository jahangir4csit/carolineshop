import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router';
import FileBase64 from 'react-file-base64';
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

import { setSnackbar } from "../../../../store/reducers/snackbarReducer";
import { updateProduct, getProductDetails } from '../../../../store/actions/productAction';
import { getCategories} from '../../../../store/actions/categoryAction';


import useStyles from './styles'; 

const UpdateProduct = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();
    const params = useParams();

    const productId = params.id;

    const { userInfo } = useSelector( state => state.auth );
    const { loading, isUpdated, error } = useSelector((state)=> state.updateProduct);
    const { categories } = useSelector((state)=> state.categories);
    const { product } = useSelector((state)=> state.productDetails);

    const token = userInfo.userInfo.token;

    const [productData, setProductData] = useState({
        title: '', price: '', description: '', category_id: '', stock: '', image: ''
    });
    
    // create new product
    useEffect(() => {
        if(product && product._id !== productId){
            dispatch(getProductDetails(productId));
        }else{
            setProductData({ 
                title: product.title,
                price: product.price,
                description: product.description, 
                category_id: product.category._id,
                stock: product.stock,
                //image: product.image
             })
        }
        if(error){
            dispatch(setSnackbar(true,"error","Product Update Failed"));
        }
        if(isUpdated){
            dispatch(setSnackbar(true,"success","Product Update Successfully"));
            history.push('/admin/products');
        }
        dispatch(getCategories());
    }, [dispatch, error, isUpdated, history, product, productId])

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updateProduct(product._id, productData, token))
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
                                    <Typography variant="h2" className="contentHeading">Update Product</Typography>
                                </Grid>
                                <Grid item sx={12} md={6}>
                                    <Paper className={classes.paper}>
                                        <form className={classes.form} encType="multipart/form-data" noValidate autoComplete="off" onSubmit={handleSubmit}>
                                            <TextField
                                            name="title"
                                            variant="outlined"
                                            label="Title"
                                            fullWidth
                                            value={productData.title}
                                            onChange={(e)=> setProductData({...productData, title: e.target.value})} />

                                            <TextField
                                            name="price"
                                            type="number"
                                            variant="outlined"
                                            label="Price"
                                            fullWidth
                                            value={productData.price}
                                            onChange={(e)=> setProductData({...productData, price: parseInt(e.target.value) })} />

                                            <TextField
                                            name="description"
                                            variant="outlined"
                                            label="Description"
                                            fullWidth
                                            value={productData.description}
                                            onChange={(e)=> setProductData({...productData, description: e.target.value})} />

                                            <TextField
                                            name="stock"
                                            type="number"
                                            variant="outlined"
                                            label="Stock"
                                            fullWidth
                                            value={productData.stock}
                                            onChange={(e)=> setProductData({...productData, stock: parseInt(e.target.value) })} />
                                            

                                            <FormControl variant="outlined" className={classes.formControl}>
                                                <InputLabel htmlFor="category">Category</InputLabel>
                                                <Select
                                                label="Category"
                                                value={productData.category_id}
                                                onChange={(e)=> setProductData({...productData, category_id: { _id: e.target.value } })}
                                                >
                                                { categories && categories.map( item =>(
                                                    <MenuItem value={item._id}>{item.name}</MenuItem>
                                                ))}
                                                </Select>
                                            </FormControl>

                                            <div className={classes.fileInput}>
                                                <FileBase64 
                                                    type="file"
                                                    id="raised-button-file"
                                                    name="image"
                                                    accept="image/*"
                                                    multiple={false}
                                                    onDone={({base64})=>setProductData({...productData, image: base64})}
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
                                                        Update
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
export default UpdateProduct;