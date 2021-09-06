import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Box from '@material-ui/core/Box';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Products from '../Products/Products';
import NewProduct from '../Products/product/NewProduct';
import {getProducts} from '../../../store/actions/productAction';
import welcomeImg from '../assets/SVG/illustration_motivation.svg';
import RedeemOutlinedIcon from '@material-ui/icons/RedeemOutlined';
import ShoppingBasketOutlinedIcon from '@material-ui/icons/ShoppingBasketOutlined';
import ClearAllOutlinedIcon from '@material-ui/icons/ClearAllOutlined';
import SupervisorAccountOutlinedIcon from '@material-ui/icons/SupervisorAccountOutlined';
import Hidden from '@material-ui/core/Hidden';
import OrderList from './OrdersList';
import Loader from '../components/ui/loader';
import useStyles from './styles'; 

import Sidebar from '../Layouts/Sidebar/Sidebar';
import { Fragment } from 'react';

const Dashboard = () => {
    const classes = useStyles();
    const [showLoader, setshowLoader] = React.useState(false);
    const {loading, products, error } = useSelector((state)=> state.productList);

    // Get Products
    const dispatch = useDispatch();

    useEffect(() => {

        dispatch(getProducts());
        if (!loading) {
            setshowLoader(true);
            setTimeout(() => {
              setshowLoader(false);
            }, 500);
          }
          clearTimeout();

    }, [dispatch])

    return(
        <div className={classes.root}>
            
            <Fragment>
                <Hidden only="xs">
                    <Sidebar />
                </Hidden>
                <main className={classes.content}>
                    <div className="appbarspace" />
                    {showLoader ? <Loader /> : (
                    <Container maxWidth="lg">
                        <Grid container direction="row" spacing={3}>
                            <Grid item xs={12} sm={6}>
                                <Card className={classes.wbox}>
                                    <div className={classes.wboxContentWrap}>
                                        <CardContent className={classes.wboxContent}>
                                            <Typography variant="h2">
                                                Hi, welcome back!
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary">
                                                All systems are running smoothly! You have 0 unread alerts!
                                            </Typography>
                                            
                                        </CardContent>
                                    </div>
                                    <CardMedia
                                        className={classes.cover}
                                        image={welcomeImg}
                                        title="welcome img"
                                    />
                                </Card>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Grid container spacing={3} className={classes.paperWrap}>
                                    <Grid item xs={12} sm={6}>
                                        <Paper elevation={3} className={`${classes.paper} ${classes.success}`} >
                                            <Grid item xs container direction="column" spacing={2}>
                                                <Grid item xs>
                                                    <Box display="flex">
                                                        <Box flexGrow={1}>
                                                            <Typography gutterBottom variant="h4">
                                                                Products
                                                            </Typography>
                                                            <Typography variant="h2" gutterBottom>
                                                                765
                                                            </Typography>
                                                        </Box>
                                                        <Box>
                                                            <RedeemOutlinedIcon className={`${classes.cardIcon} ${classes.icon1}`} />
                                                        </Box>
                                                    </Box>
                                                    <Typography variant="body2" color="textSecondary">
                                                        +2.6% than last week
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                        </Paper>
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <Paper elevation={3} className={`${classes.paper} ${classes.warning}`}>
                                            <Grid item xs container direction="column" spacing={2}>
                                                <Grid item xs>
                                                    <Box display="flex">
                                                        <Box flexGrow={1}>
                                                            <Typography gutterBottom variant="h4">
                                                                Orders
                                                            </Typography>
                                                            <Typography variant="h2" gutterBottom>
                                                                100
                                                            </Typography>
                                                        </Box>
                                                        <Box>
                                                            <ShoppingBasketOutlinedIcon className={`${classes.cardIcon} ${classes.icon2}`} />
                                                        </Box>
                                                    </Box>
                                                    <Typography variant="body2" color="textSecondary">
                                                        +2.6% than last week
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                        </Paper>
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <Paper elevation={3} className={`${classes.paper} ${classes.progress}`}>
                                            <Grid item xs container direction="column" spacing={2}>
                                                <Grid item xs>
                                                    <Box display="flex">
                                                        <Box flexGrow={1}>
                                                            <Typography gutterBottom variant="h4">
                                                                Category
                                                            </Typography>
                                                            <Typography variant="h2" gutterBottom>
                                                                10
                                                            </Typography>
                                                        </Box>
                                                        <Box>
                                                            <ClearAllOutlinedIcon className={`${classes.cardIcon} ${classes.icon3}`} />
                                                        </Box>
                                                    </Box>
                                                    <Typography variant="body2" color="textSecondary">
                                                        +2.6% than last week
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                        </Paper>
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <Paper elevation={3} className={`${classes.paper} ${classes.danger}`}>
                                            <Grid item xs container direction="column" spacing={2}>
                                                <Grid item xs>
                                                    <Box display="flex">
                                                        <Box flexGrow={1}>
                                                            <Typography gutterBottom variant="h4">
                                                                Users
                                                            </Typography>
                                                            <Typography variant="h2" gutterBottom>
                                                                110
                                                            </Typography>
                                                        </Box>
                                                        <Box>
                                                            <SupervisorAccountOutlinedIcon className={`${classes.cardIcon} ${classes.icon4}`} />
                                                        </Box>
                                                    </Box>
                                                    <Typography variant="body2" color="textSecondary">
                                                        +2.6% than last week
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                        </Paper>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid container direction="row">
                            <Grid item xs={12} sm={12}>
                                <div className={classes.ContentSpacer} />
                                <OrderList />
                                <div className={classes.ContentSpacer} />
                            </Grid>
                        </Grid>
                    </Container>
                    )}
                </main>
            </Fragment>
        </div>
        
    )
}
export default Dashboard;