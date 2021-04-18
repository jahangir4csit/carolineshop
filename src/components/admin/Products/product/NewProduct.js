import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import FileBase from 'react-file-base64';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import useStyles from './styles';
import { createProduct } from '../../../../store/actions/productAction';

const NewProduct = () => {
    const classes = useStyles();
    const dispatch = useDispatch({})
    const [productData, setProductData] = useState({
        title: '', price: '', description: '', category: '', stock: 123, image: ''
    });
    console.log(productData);
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createProduct(productData))
    }

    return(
        <Paper className={classes.paper}>
            <form className={classes.form} noValidate autoComplete="off" onSubmit={handleSubmit}>
                <Typography variant="h3">Create New Product</Typography>
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
                <Button
                type="submit"
                color="primary"
                variant="container"
                fullWidth
                className={classes.btnSubmit}>
                    Create
                </Button>
            </form>
        </Paper>
    )
}
export default NewProduct;