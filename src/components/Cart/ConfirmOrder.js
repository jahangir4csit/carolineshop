import React, {Fragment, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { useHistory } from 'react-router';
import Container from '@material-ui/core/Container';
import { Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';


const ConfirmOrder1 = () => {

    const dispatch = useDispatch();
    const history = useHistory();
    const {cartItems} = useSelector(state => state.cart);
    const { userInfo } = useSelector( state => state.auth );
    return (
        <Fragment>
            <Container maxWidth="lg">
                <Typography component="h3">Your Order</Typography>
                {cartItems.map(item=>{
                    <Fragment>
                        <Grid direction="column" container spacing={2}>
                            <Grid item>
                                <Typography component="h4">Product</Typography>
                                <img src={item.image} alt="item" />
                                {item.name}
                            </Grid>
                            <Grid item>
                                <Typography component="span">Price: </Typography>
                                {item.price}
                            </Grid>
                            <Grid item>
                                <Typography component="span">Quantity: </Typography>
                                {item.quantity}
                            </Grid>
                        </Grid>
                    </Fragment>
                })}
            </Container>
        </Fragment>
    ) 
}
export default ConfirmOrder1;