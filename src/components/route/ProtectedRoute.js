import React, {Fragment} from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProtectedRoute = ({ component: Component, ...rest }) =>{
    const { isAuthenticated, loading, userInfo } = useSelector( state => state.auth );
    console.log(userInfo, 'dashboard');
    return(
        <Fragment>
            {loading === false && (
            <Route
                {...rest}
                render = {props => {
                    if(userInfo == null && isAuthenticated === false){
                        return <Redirect to="/auth" />
                    }
                    return <Component {...props} />
                }}
            />
            )}
        </Fragment>
    )

}
export default ProtectedRoute;