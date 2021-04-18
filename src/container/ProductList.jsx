import React from 'react';
import { useEffect, useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {getProducts} from '../store/actions/productAction';
import {showLoader, hideLoader} from '../store/actions/loaderAction';
import Loader from '../components/ui/Loader';
import Products from './Products';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import { useTheme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  productGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
}));

const Home = (props) => {

  const classes = useStyles();
  const theme = useTheme();

      // Get Products
      const dispatch = useDispatch();
      useEffect(() => {
          dispatch(getProducts());
      }, [dispatch])

  const [dataLoad, setDataLoad] = useState(false);
  const {products} = useSelector((state)=> state.productStore);


    const productsList = products.map((item)=>{
        return(
          <Products
            key={Math.random()}
            productInfo={item} />
        )
      })

    return(

        <Container className={classes.productGrid} maxWidth="lg">
          {dataLoad === false ?
          <Grid container spacing={4} className="home">
            <Grid item xs={12} className="section-title text-center">
              <Typography variant="h3" component="h3">
                NEW ARRIVALS
              </Typography>
            </Grid>
            <Grid container spacing={4} className="home">
              {productsList}
            </Grid>
          </Grid>
          : <Loader />
          }
        </Container>

    )
}
export default Home;