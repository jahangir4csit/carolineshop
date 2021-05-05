import React, { Fragment } from 'react'
import { useEffect } from 'react';
import {useParams} from "react-router-dom";
import {getProductDetails} from '../../../store/actions/productAction';
import {useSelector, useDispatch} from 'react-redux';
import Loader from '../../../components/ui/Loader';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Ratings from '../../../components/ui/Ratings';
import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { setSnackbar } from "../../../store/reducers/snackbarReducer";

import {addItemToCart} from '../../../store/actions/cartAction';
import useStyles from './styles';

const ProductDetails = () =>{
    const params = useParams();
    const classes = useStyles();
    const baseUrl = 'http://localhost:8080';
    const [quantity, setQuantity] = React.useState(1);
    const [alignment, setAlignment] = React.useState('left');
    const handleAlignment = (event, newAlignment) => {
        setAlignment(newAlignment);
    };
    const dispatch = useDispatch();
    const productId = params.id;

    const productDetails = useSelector((state)=> state.productDetails);
    const { loading, product, error } = productDetails;
    const { userInfo } = useSelector( state => state.auth );
    const token = userInfo ? userInfo.userInfo.token : null;

    useEffect(()=>{
        dispatch(getProductDetails(productId));
        if(error){
            console.log(error)
        }
      }, [dispatch, productId, error])

      const addToCart = () => {
          dispatch(addItemToCart({
              "product": {
                  "id": productId,
                  "quantity": quantity
              }
          },token));
          dispatch(setSnackbar(true,"success","Item Added to Cart"));
      }
        
    return(
        <Fragment>
            {loading ? <Loader /> : (
               <Fragment>
                   <div className="product_details my60">
                        <Container className={classes.productDetails} maxWidth="lg">
                            <Grid container direction="row">
                                <Grid item xs={12} sm={9}>
                                    <Grid container direction="row">
                                        <Grid item xs={12} sm={5}>
                                            <div className="product_details_thumb">
                                                <img className={classes.thumb} src={`${baseUrl}${product.image}`} alt={product.title} />
                                            </div>
                                        </Grid>
                                        <Grid item xs={12} sm={7}>
                                            <div class="content-part margin-top-20">
                                                <Typography component="h3" class="product-title">{product.title} </Typography>
                                                <Typography component="p" class="price">${product.price}</Typography>
                                                <Ratings />
                                                <Typography component="span" class="review-text">3 reviews</Typography>
                                                <Typography component="p" class="specifications">SKU: <b>0014</b></Typography>
                                                <Typography component="p" class="specifications">AVAILABILITY: {product.stock <= 0 ? <b class="color-danger">Out of Stock</b> : <b class="color-green">In Stock</b> }</Typography>
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
                                                <p class="specifications">CATEGORY: <b>{product.category.name}</b></p>
                                                <div class="btn-wrapper d-flex">
                                                    <ButtonGroup>
                                                        <Button
                                                            aria-label="reduce"
                                                            className={classes.noRadius}
                                                            onClick={() => {
                                                                setQuantity(Math.max(quantity - 1, 1));
                                                            }}
                                                        >
                                                            <RemoveIcon fontSize="small" />
                                                        </Button>
                                                        <Button>{quantity}</Button>
                                                        <Button
                                                            aria-label="increase"
                                                            className={classes.noRadius}
                                                            onClick={() => {
                                                                setQuantity(quantity < product.stock ? quantity + 1 : quantity);
                                                            }}
                                                        >
                                                            <AddIcon fontSize="small" />
                                                        </Button>
                                                    </ButtonGroup>
                                                    <Button variant="contained" className="add-to-cart-style"
                                                    disabled={product.stock === 0} onClick={addToCart}>
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