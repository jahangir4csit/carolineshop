import React, {Fragment} from 'react';
import {Switch, Route } from "react-router-dom";
import NotFound from '../container/404.jsx';
import ProtectedRoute from '../components/route/ProtectedRoute';
import ProtectedHeader from '../container/admin/Layouts/Header/ProtectedHeader';
import ProtectedFooter from '../container/admin/Layouts/Footer/ProtectedFooter';
import Dashboard from '../container/admin/Dashboard/Dashboard';
import Products from '../container/admin/Products/Products';
import Categories from '../container/admin/Categories/Categories';
import Orders from '../container/admin/Orders/Orders';
import Users from '../container/admin/Users/Users';

import AddCategory from '../container/admin/Categories/Category/AddCategory';
import updateCategory from '../container/admin/Categories/Category/UpdateCategory';
import AddProduct from '../container/admin/Products/product/NewProduct';
import AddUser from '../container/admin/Users/User/AddUser';

export const ProtectedLayout = (props) => {
    return(
        <Fragment>
            <ProtectedHeader/>
                <Switch>
                    <ProtectedRoute exact path='/admin/dashboard' component={Dashboard} />
                    <ProtectedRoute exact path='/admin/products' component={Products} />
                    <ProtectedRoute exact path='/admin/categories' component={Categories} />
                    <ProtectedRoute exact path='/admin/orders' component={Orders} />
                    <ProtectedRoute exact path='/admin/users' component={Users} />
                    <ProtectedRoute exact path='/admin/adduser' component={AddUser} />
                    <ProtectedRoute exact path='/admin/category/create' component={AddCategory} />
                    <ProtectedRoute exact path='/admin/category/:id' component={updateCategory} />
                    <ProtectedRoute exact path='/admin/product/create' component={AddProduct} />
                    <Route component={NotFound} />
                </Switch>
            <ProtectedFooter/>
        </Fragment>
    )
}
