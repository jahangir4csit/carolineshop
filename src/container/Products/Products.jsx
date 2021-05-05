import React, { Fragment } from 'react';
import { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {getProducts} from '../../store/actions/productAction';
import Loader from '../../components/ui/Loader';
import Product from '../../components/Product/Product';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import useStyles from './styles'; 

const Home = (props) => {

  const classes = useStyles();
  const { loading, products, error } = useSelector((state)=> state.productList);
      // Get Products
      const dispatch = useDispatch();
      useEffect(() => {
          dispatch(getProducts());
      }, [dispatch])


    return(
      <Fragment>
        {loading ? <Loader /> : (
          <Fragment>
            <Container className={classes.productGrid} maxWidth="lg">
              <Grid container spacing={4} className="home">
                <Grid item xs={12} className="section-title text-center">
                  <Typography variant="h3" component="h3">
                    NEW ARRIVALS
                  </Typography>
                </Grid>
                <Grid container spacing={4} className="home">
                  { products && products.map( product =>(
                    <Product key={product._id} product={product} />
                  ))}
                  
                </Grid>
              </Grid>
            </Container>
          </Fragment>
        )}
      </Fragment>
    )
}
export default Home;