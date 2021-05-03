import React, {Fragment} from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

const AdminRoute = ({ component: Component, ...rest }) =>{
    const { isAuthenticated, loading, userInfo } = useSelector( state => state.auth );
    return(
        <Fragment>
            {loading === false && (
            <Route
                {...rest}
                render = {props => {
                    if(isAuthenticated === false && userInfo.userInfo.role !== 'admin'){
                        return <Redirect to="/auth" />
                    }
                    return <Component {...props} />
                }}
            />
            )}
        </Fragment>
    )

}
export default AdminRoute;