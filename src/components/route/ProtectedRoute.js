import React, {Fragment} from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProtectedRoute = ({ component: Component, ...rest }) =>{
    const { isAuthenticated, loading, user } = useSelector( state => state.authStore );

    console.log(isAuthenticated, 'auth check');

    return(
        <Fragment>
            {loading === false && (
            <Route
                {...rest}
                render = {props => {
                    if(isAuthenticated === false){
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