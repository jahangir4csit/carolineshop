import React from 'react';

const Product = (props) => {
    return(
        <>
            <h3>{props.data.title}</h3>
            <h3>{props.data.price}</h3>
            <hr/>
        </>
    )
}
export default Product;