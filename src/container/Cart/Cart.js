import React from 'react'
import {useSelector} from 'react-redux';
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
import useStyles from './styles'; 

export default function Cart(){
    const classes = useStyles();

    const [shippingCharge, setSeshippingCharge] = React.useState('50');
    const handleRadioChange = (event) => {
        setSeshippingCharge(event.target.value);
    };

    const cartReducer = useSelector((state)=> state);
    const cartItem = cartReducer.cartStore.cart;
    console.log(cartItem);
    const rows = cartItem.map((item)=> createRow(item.name,'1',item.price))

    function ccyFormat(num) {
        return `${num.toFixed(2)}`;
      }
      
      function priceRow(qty, unit) {
        return qty * unit;
      }
      
      function createRow(desc, qty, unit) {
        const price = priceRow(qty, unit);
        return { desc, qty, unit, price };
      }
      
      function subtotal(items) {
        return items.map(({ price }) => price).reduce((sum, i) => sum + i, 0);
      }

    const invoiceSubtotal = subtotal(rows);
    const invoiceShipping = shippingCharge;
    const invoiceTotal = (Number(invoiceSubtotal) + Number(invoiceShipping)).toFixed(2);
        
    return(
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
                                            {rows.map((row) => (
                                                <TableRow key={row.desc}>
                                                <TableCell>{row.desc}</TableCell>
                                                <TableCell align="right">{ccyFormat(row.price)}</TableCell>
                                                <TableCell align="right">{row.qty}</TableCell>
                                                <TableCell align="right">{row.unit}</TableCell>
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
    )
}