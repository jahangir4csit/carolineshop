import React, {useEffect} from 'react';
import { useDispatch } from 'react-redux';
import {getProducts} from '../../store/actions/productAction'
import Products from './Products/Products';
import NewProduct from './Products/product/NewProduct';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import useStyles from './styles'; 

const Dashboard = () => {
    const classes = useStyles();

    // Get Products
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch])

    return(
        <Container maxWidth="lg" className={classes.adminWrap}>
            <Grid container direction="row">
                <Grid item xs={12} sm={8}>
                    <Products />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <NewProduct />
                </Grid>
            </Grid>
        </Container>
    )
}
export default Dashboard;