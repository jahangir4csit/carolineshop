import React, { Fragment } from 'react';
import { Route, Switch } from "react-router-dom";
import Cart from '../components/Cart/Cart';
import Checkout from '../components/Cart/CheckOut';
import PublicFooter from '../components/layout/footer';
import PublicHeader from '../components/layout/Header';
import ProtectedRoute from '../components/route/ProtectedRoute';
import NotFound from '../container/404.jsx';


export const ProtectedLayout = (props) => {
    return(
        <Fragment>
            <PublicHeader/>
                <Switch>
                    <ProtectedRoute exact path="/cart" component={Cart} />
                    <ProtectedRoute exact path="/order/checkout" component={Checkout} />
                    {/* <ProtectedRoute exact path="/cart">
                        <Breadcrumb title="Cart" />
                        <Cart />
                    </ProtectedRoute> */}
                    <Route component={NotFound} />
                </Switch>
            <PublicFooter/>
        </Fragment>
    )
}
