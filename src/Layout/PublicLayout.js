import React, { Fragment } from 'react';
import { Route, Switch } from "react-router-dom";
import Auth from '../components/Auth/Auth';
import CheckOut from '../components/Cart/CheckOut';
import Breadcrumb from '../components/layout/Breadcrumb';
import PublicFooter from '../components/layout/footer';
import PublicHeader from '../components/layout/Header';
import Slider from '../components/layout/Slider';
import Page404 from '../container/404.jsx';
import About from '../container/About.jsx';
import Categories from '../container/Categories';
import Contact from '../container/Contact.jsx';
import ProductDetails from '../container/Products/Product/ProductDetails';
import Products from '../container/Products/Products';

export const PublicLayout = (props) => {
    return(
        <Fragment>
            <PublicHeader/>
                <Switch>
                    <Route exact path="/">
                        <Slider />
                        <Products />
                    </Route>
                    <Route exact path="/shop">
                        <Breadcrumb title="Product List" />
                        <Products />
                    </Route>
                    <Route exact path="/categories">
                        <Breadcrumb title="Categories" />
                        <Categories />
                    </Route>
                    <Route exact path="/products/:id">
                        <Breadcrumb title="Product Details" />
                        <ProductDetails />
                    </Route>
                    <Route exact path="/auth">
                        <Breadcrumb title="My Account" />
                        <Auth />
                    </Route>
                    <Route exact path='/about' component={About} />
                    <Route exact path='/checkout'>
                        <Breadcrumb title="Checkout" />
                        <CheckOut />
                    </Route>
                    <Route exact path='/auth' component={Auth} />
                    <Route exact path='/contact' component={Contact} />
                    <Route path='*'>
                        <Page404 />
                    </Route>
                </Switch>
            <PublicFooter/>
        </Fragment>
    )
}
