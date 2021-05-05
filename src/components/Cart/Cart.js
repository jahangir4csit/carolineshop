import React, {Fragment, useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import {getCartItemAction} from '../../store/actions/cartAction';
import {createOrder} from '../../store/actions/orderAction';

import useStyles from './styles'; 

export default function Cart(){
    const baseUrl = 'http://localhost:8080';
    const classes = useStyles();
    const dispatch = useDispatch();

    const [items, setItems] = useState();

    const {cartItems} = useSelector((state) => state.cartItems);
    const { userInfo } = useSelector( state => state.auth );
    const token = userInfo ? userInfo.userInfo.token : null;

    useEffect(()=>{ 
        dispatch(getCartItemAction(token));
    },[]);

    const rows = [];
    if(cartItems.products){
       cartItems.products.map((item) => (
        rows.push(createRow(
          item.productId.image,
          item.productId.title,
          item.quantity,
          item.productId.price,
          //item.productId.stock,
        ))
      ))
    }

    const [shippingCharge, setSeshippingCharge] = React.useState('50');
    const handleRadioChange = (event) => {
        setSeshippingCharge(event.target.value);
    };

    //const rows = cartItems.products.map((item)=> createRow(item.image, item.product, item.quantity,item.price))

    function ccyFormat(num) {
        return `${num.toFixed(2)}`;
      }
      
      function priceRow(qty, unit) {
        return qty * unit;
      }
      
      function createRow(image, product, qty, unit) {
        const price = priceRow(qty, unit);
        return { image, product, qty, unit, price };
      }
      
      function subtotal(items) {
        return items.map(({ price }) => price).reduce((sum, i) => sum + i, 0);
      }

    const invoiceSubtotal = subtotal(rows);
    const invoiceShipping = shippingCharge;
    const invoiceTotal = (Number(invoiceSubtotal) + Number(invoiceShipping)).toFixed(2);

    const ConfirmOrder = () =>{
        const data = {
            invoiceSubtotal,
            invoiceTotal
        }
        dispatch(createOrder(data, token));
    }

    console.log(cartItems.products, 'items data');
        
    return(
        <Fragment>
                    {/* {cartItems.products ? cartItems.products.map(item => (
             <p>{item.productId.title}</p>
           )) : 'no data'} */}
            {cartItems.length === 0 ? 
              <Container className={classes.root} maxWidth="lg">
                <Typography style={{ paddingTop: 30 }} align="center" component="h3" variant="body2">Your Cart is Empty</Typography> 
              </Container>
            : (
                <Fragment>
                    <div className="product_details my60">
                        <Container className={classes.root} maxWidth="lg">
                            <Grid container direction="row" spacing={4}>
                                <Grid item xs={12} md={12}>
                                    <Grid container direction="column">
                                        <Grid item xs={12}>
                                            <TableContainer component={Paper} className={classes.cartTable}>
                                                <Table className={classes.table} aria-label="spanning table">
                                                    <TableHead>
                                                        <TableRow>
                                                            <TableCell>Product</TableCell>
                                                            <TableCell align="right">Price</TableCell>
                                                            <TableCell align="right">Quantity</TableCell>
                                                            <TableCell align="right">Total</TableCell>
                                                        </TableRow>
                                                    </TableHead>
                                                    <TableBody>
                                                        {console.log(rows, 'rows data')}
                                                        {rows.map((row) => (
                                                            <TableRow key={row.product}>
                                                                <TableCell>
                                                                    <Box display="flex" alignItems="center" justifyContent="flex-start">
                                                                        <Box>
                                                                            <img style={{ marginRight: 10, borderRadius: 4}} height="60" width="60" src={`${baseUrl}${row.image}`} alt={row.product} />
                                                                        </Box>
                                                                        <Box>
                                                                            {row.product}
                                                                        </Box>
                                                                    </Box>
                                                                </TableCell>
                                                                <TableCell align="right">{row.unit}</TableCell>
                                                                <TableCell align="right">{row.qty}</TableCell>
                                                                <TableCell align="right">{ccyFormat(row.price)}</TableCell>
                                                            </TableRow>
                                                        ))}
                                                    </TableBody>
                                                </Table>
                                            </TableContainer>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Box display="flex" alignItems="center">
                                                <Box m={0} component="div" flexGrow={1}>
                                                    <TextField
                                                    className={classes.cuponInput} 
                                                    id="discountInput" 
                                                    label="COUPON" 
                                                    variant="filled" 
                                                    />
                                                    <Button
                                                    variant="contained"
                                                    color="primary"
                                                    className={classes.button}>
                                                        Apply Coupon
                                                    </Button>
                                                </Box>
                                                <Box m={0} component="div" >
                                                    <Button
                                                    variant="outlined"
                                                    color="primary"
                                                    className={`${classes.button} ${classes.btn_outline}`}>
                                                        UPDATE CART
                                                    </Button>       
                                                </Box>
                                            </Box>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <div className={classes.cartTotal}>
                                                <Typography>
                                                    CART TOTALS
                                                </Typography>
                                                <TableContainer component={Paper} className={classes.cartTotalTable}>
                                                    <Table className={classes.table} aria-label="spanning table">
                                                        <TableBody>
                                                            <TableRow>
                                                                <TableCell style={{ width: 160 }}>Subtotal</TableCell>
                                                                <TableCell align="left">{invoiceSubtotal}</TableCell>
                                                            </TableRow>
                                                            <TableRow>
                                                                <TableCell style={{ width: 160 }}>Shipping</TableCell>
                                                                <TableCell>
                                                                    <RadioGroup aria-label="shipping" name="shipping" value={shippingCharge} onChange={handleRadioChange}>
                                                                        <FormControlLabel 
                                                                        value="50"
                                                                        control={<Radio className={classes.radiobutton} 
                                                                        color="primary" />} 
                                                                        label={'Flat Rate: $50'} />
                                                                        <FormControlLabel 
                                                                        value="0" 
                                                                        control={<Radio className={classes.radiobutton} 
                                                                        color="primary" />} 
                                                                        label="Free shipping" />
                                                                    </RadioGroup>
                                                                </TableCell>
                                                            </TableRow>
                                                            <TableRow>
                                                                <TableCell style={{ width: 160 }}>Total</TableCell>
                                                                <TableCell>{invoiceTotal}</TableCell>
                                                            </TableRow>
                                                            
                                                        </TableBody>
                                                    </Table>
                                                </TableContainer>
                                                <Button
                                                variant="contained"
                                                color="primary"
                                                onClick={ConfirmOrder}
                                                className={`${classes.button} ${classes.my3}`} 
                                                >
                                                    Proceed To Checkout
                                                </Button>
                                            </div>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Container>
                    </div>
                </Fragment>
            )}
        </Fragment>
    )
}