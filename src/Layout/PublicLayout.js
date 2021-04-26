import React, {Fragment} from 'react';
import {Switch, Route } from "react-router-dom";
import PublicHeader from '../components/layout/Header';
import PublicFooter from '../components/layout/footer';
import Products from '../container/Products/Products';
import About from '../container/About.jsx';
import Contact from '../container/Contact.jsx';
import Auth from '../components/Auth/Auth';
import Slider from '../components/layout/Slider';
import Breadcrumb from '../components/layout/Breadcrumb';
import ProductDetails from '../container/Products/Product/ProductDetails';
import Cart from '../container/Cart/Cart';
import Page404 from '../container/404.jsx';

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
                    <Route exact path="/products/:id">
                        <Breadcrumb title="Product Details" />
                        <ProductDetails />
                    </Route>
                    <Route exact path="/cart">
                        <Breadcrumb title="Cart" />
                        <Cart />
                    </Route>
                    <Route exact path="/auth">
                        <Breadcrumb title="My Account" />
                        <Auth />
                    </Route>
                    <Route exact path='/about' component={About} />
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
