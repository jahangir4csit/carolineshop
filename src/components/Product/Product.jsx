import React from 'react';
import {Link, useHistory} from "react-router-dom";
import Ratings from '../ui/Ratings';
import { makeStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';

import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined';

const useStyles = makeStyles((theme) => ({
    cardMedia: {
        height: 0,
        paddingTop: '88%', // 16:9
    },
    productAction: {
        paddingTop: 0,
        paddingBottom: 0,
        position: 'relative',
    },
    CartButton: {
        textTransform: 'none',
    }
  }));
  
const Product = ({ product }) =>{
    const classes = useStyles();

    const history = useHistory();
    const clickHandlar = (id)=>{
        history.push(`/products/${id}`);
    }

    return(
        <Grid item xs={12} sm={6} md={4} >
            <Card className="product mt40" key={product.id}>
                <div className="thumb">
                    <CardMedia
                        className={classes.cardMedia}
                        image={product.image}
                        title={product.title}
                    />
                    <Typography component="span" className="sale">SALE 13% </Typography>
                    <Typography component="span" className="new mt35">SALE 13% </Typography>
                    <ul className="cart-action-02">
                        <li>
                            <Link href="#"><FavoriteBorderOutlinedIcon style={{ fontSize: '28px'}} /></Link>
                        </li>
                        <li>
                            <Link href="#" onClick={() => clickHandlar(product.id)}><VisibilityOutlinedIcon /></Link>
                        </li>
                    </ul>
                </div>
                <CardContent className="content text-left">
                    <Typography gutterBottom component="span" className="brand">
                        CATEGORY:{product.category}
                    </Typography>
                    <Ratings />
                    <Typography gutterBottom component="h6" className="title stone-go-top">
                        <Link onClick={() => clickHandlar(product.id)}>{product.title}</Link>
                    </Typography>
                </CardContent>
                <CardActions className={classes.productAction}>
                    <div class="content-hover-cart">
                        <Button
                            variant="contained"
                            className={classes.CartButton}
                            startIcon={<LocalMallOutlinedIcon />}
                        >
                            Add to Cart
                        </Button>
                    </div>
                    <div class="content-cart">
                        <LocalMallOutlinedIcon />
                    </div>
                    <div class="content-price d-flex flex-column align-self-center">
                        <Typography component="span" className="old-price">$300</Typography>
                        <Typography component="span" className="new-price">${product.price}</Typography>
                    </div>
                </CardActions>
            </Card>
        </Grid>
    )
}

export default Product;