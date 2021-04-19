import React, { Fragment } from 'react'
import { useEffect, useState } from 'react';
import {useParams, useHistory} from "react-router-dom";
import {getProductDetails} from '../store/actions/productAction';
import {useSelector, useDispatch} from 'react-redux';
import Loader from '../components/ui/Loader';
import page404 from './404';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Ratings from '../components/ui/Ratings';
import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined';
import AddSharpIcon from '@material-ui/icons/AddSharp';
import RemoveSharpIcon from '@material-ui/icons/RemoveSharp';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';

const useStyles = makeStyles((theme) => ({
    thumb: {
        maxHeight: '450px',
    },
    btnSize: {
        padding: '4px 12px',
        borderRadius: 0,
        marginRight: '10px',
        '&:not(:last-child)':{
            borderLeft: '1px solid rgba(0, 0, 0, 0.12)',
            marginLeft: 'auto',
        },
        '&:not(:first-child)':{
            borderLeft: '1px solid rgba(0, 0, 0, 0.12)',
            marginLeft: 'auto',
        },
        '&:hover': {
            backgroundColor: '#000',
            color: '#fff'
        }
    }
  }));

const ProductDetails = () =>{

    const classes = useStyles();
    const [alignment, setAlignment] = React.useState('left');
    const handleAlignment = (event, newAlignment) => {
        setAlignment(newAlignment);
    };
    const dispatch = useDispatch();
    const history = useHistory();
    const clickHandlar = (id)=>{
        history.push(`/product-edit/${id}`);
    }
    const params = useParams();
    const { loading, product, error } = useSelector((state)=> state.productStore);

    console.log(error, 'product error');
    console.log(product, 'product get');

    useEffect(()=>{
        dispatch(getProductDetails(params.id));
      }, [dispatch, params.id])

      const addCartItem = (id,name,price,img) =>{
        dispatch({
            type: 'ADD_TO_CART',
            payload: {
                id: id,
                name: name,
                price: price,
                img: img,
            }
        });
      }
        
    return(
        <Fragment>
            {loading ? <Loader /> : product === null ? 'Sorry, Product Not Found' : (
               <Fragment>
                   <div className="product_details my60">
                        <Container className={classes.productDetails} maxWidth="lg">
                            <Grid container direction="row">
                                <Grid item xs={12} sm={9}>
                                    <Grid container direction="row">
                                        <Grid item xs={12} sm={5}>
                                            <div className="product_details_thumb">
                                                <img className={classes.thumb} src={product.image} alt={product.title} />
                                            </div>
                                        </Grid>
                                        <Grid item xs={12} sm={7}>
                                            <div class="content-part margin-top-20">
                                                <Typography component="span" onClick={() => clickHandlar(params.id)} className="right edit"><i style={{color:'#FF8E78'}} className="ti-pencil-alt"></i> Edit</Typography>
                                                <Typography component="h3" class="product-title">{product.title} </Typography>
                                                <Typography component="p" class="price">${product.price}</Typography>
                                                <Ratings />
                                                <Typography component="span" class="review-text">3 reviews</Typography>
                                                <Typography component="p" class="specifications">SKU: <b>0014</b></Typography>
                                                <Typography component="p" class="specifications">AVAILABILITY: <b class="color-green">In Stock</b></Typography>
                                                <div className="product_size">
                                                    <Typography component="span" class="specifications">SIZE: </Typography>
                                                    <ToggleButtonGroup
                                                    value={alignment}
                                                    exclusive
                                                    onChange={handleAlignment}
                                                    aria-label="text alignment"
                                                    >
                                                        <ToggleButton className={classes.btnSize} value="S" aria-label="left aligned">
                                                            S
                                                        </ToggleButton>
                                                        <ToggleButton className={classes.btnSize} value="M" aria-label="centered">
                                                            M
                                                        </ToggleButton>
                                                        <ToggleButton className={classes.btnSize} value="X" aria-label="right aligned">
                                                            X
                                                        </ToggleButton>
                                                        <ToggleButton className={classes.btnSize} value="XL" aria-label="justified">
                                                            XL
                                                        </ToggleButton>
                                                        <ToggleButton className={classes.btnSize} value="XS" aria-label="justified">
                                                            XS
                                                        </ToggleButton>
                                                    </ToggleButtonGroup>
                                                </div>

                                                <div class="d-flex">
                                                    <span class="specifications">COLOR: </span>
                                                    <ul class="color-list align-self-center">
                                                        <li><a href="#"></a></li>
                                                        <li><a href="#"></a></li>
                                                        <li><a href="#"></a></li>
                                                    </ul>
                                                </div>
                                                <p class="specifications">CATEGORY: <b>{product.category}</b></p>
                                                <div class="btn-wrapper d-flex">
                                                    <div class="input-group">
                                                        <div class="input-group-prepend align-self-center">
                                                            <a class="btn btn-sm" id="minus-btn"><RemoveSharpIcon /></a>
                                                        </div>
                                                        <input type="number" id="qty_input" class="form-control text-right form-control-sm" min="1" value="1" disabled="true" />
                                                        <div class="input-group-prepend align-self-center">
                                                            <a class="btn btn-sm" id="plus-btn"><AddSharpIcon /></a>
                                                        </div>
                                                    </div>
                                                    <Button variant="contained" className="add-to-cart-style"
                                                    onClick={(data)=>addCartItem(product.id,product.title,product.price,product.image)}>
                                                    <LocalMallOutlinedIcon /> Add to cart</Button>
                                                </div>
                                                <div class="btn-wrapper">
                                                    <Button variant="outlined" className="btn btn-buy">Buy it now</Button>
                                                </div>
                                            </div>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs={12} sm={3}></Grid>
                            </Grid>
                        </Container>
                    </div>
               </Fragment> 
            )}
        </Fragment>
    )
}
export default ProductDetails;