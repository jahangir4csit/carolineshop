import React, {Fragment} from 'react';
import {Switch, Route } from "react-router-dom";
import NotFound from '../container/404.jsx';
import AdminRoute from '../components/route/AdminRoute';
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
import UpdateProduct from '../container/admin/Products/product/UpdateProduct';
import AddUser from '../container/admin/Users/User/AddUser';
import UpdateUser from '../container/admin/Users/User/UpdateUser';
import UserDetails from '../container/admin/Users/User/userDetails';

export const AdminLayout = (props) => {
    return(
        <Fragment>
            <ProtectedHeader/>
                <Switch>
                    <AdminRoute exact path='/admin/dashboard' component={Dashboard} />
                    <AdminRoute exact path='/admin/products' component={Products} />
                    <AdminRoute exact path='/admin/categories' component={Categories} />
                    <AdminRoute exact path='/admin/orders' component={Orders} />
                    <AdminRoute exact path='/admin/users' component={Users} />
                    <AdminRoute exact path='/admin/user/create' component={AddUser} />
                    <AdminRoute exact path='/admin/category/create' component={AddCategory} />
                    <AdminRoute exact path='/admin/category/:id' component={updateCategory} />
                    <AdminRoute exact path='/admin/product/create' component={AddProduct} />
                    <AdminRoute exact path='/admin/product/:id' component={UpdateProduct} />
                    <AdminRoute exact path='/admin/user/:id' component={UpdateUser} />
                    <AdminRoute exact path='/admin/my-details' component={UserDetails} />
                    <Route component={NotFound} />
                </Switch>
            <ProtectedFooter/>
        </Fragment>
    )
}
