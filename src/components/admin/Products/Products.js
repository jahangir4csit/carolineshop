import React from 'react';
import { useSelector } from 'react-redux';
import Product from './product/Product';
import useStyles from './styles'; 

const Products = () => {
    const {products} = useSelector((state)=> state.productStore);
    const classes = useStyles();

    const productsItems = products.map((item)=>{
        return(
        <Product
            key={Math.random()}
            data={item} />
        )
    })

    return(
        <>
            <h1 className={classes.heading}>Product List</h1>
            <hr/>
            
            {productsItems}
        </>
    )
}
export default Products;