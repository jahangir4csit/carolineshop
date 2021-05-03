import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './components/ui/Theme';
import {PublicLayout} from './Layout/PublicLayout';
import {ProtectedLayout} from './Layout/ProtectedLayout';
import {AdminLayout} from './Layout/AdminLayout';
import Snackbar from './components/ui/Snackbar';
import {loadUser} from './store/actions/authAction';

import './App.css';
//import useStyles from './styles'; 

function App() {

  const dispatch = useDispatch();
  const { userInfo } = useSelector( state => state.auth );
  const { user } = useSelector( state => state.loadUser );
  useEffect(()=>{
    const token = userInfo ? userInfo.userInfo.token : '';
    dispatch(loadUser(token));
  },[dispatch, userInfo])

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className="App">
          <Snackbar />
          <Switch>
            <Route path='/admin' component={AdminLayout} />
            <Route path='/cart' component={ProtectedLayout} />
            <Route path='/' component={PublicLayout} />
          </Switch>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
