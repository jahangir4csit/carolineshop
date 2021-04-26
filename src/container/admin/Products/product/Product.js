import React from 'react';

const Product = ({ product }) => {
    return(
        <>
            <h3>{product.title}</h3>
            <h3>{product.price}</h3>
            <hr/>
        </>
    )
}
export default Product;