import React, {Fragment} from 'react';
import {Switch, Route } from "react-router-dom";
import NotFound from '../container/404.jsx';
import ProtectedRoute from '../components/route/ProtectedRoute';

import Breadcrumb from '../components/layout/Breadcrumb';
import Cart from '../components/Cart/Cart';
import PublicHeader from '../components/layout/Header';
import PublicFooter from '../components/layout/footer';
import UserDetails from '../container/admin/Users/User/userDetails';

export const ProtectedLayout = (props) => {
    return(
        <Fragment>
            <PublicHeader/>
                <Switch>
                    <ProtectedRoute exact path="/cart" component={Cart} />
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
