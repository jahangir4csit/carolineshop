import { ThemeProvider } from '@material-ui/core/styles';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Snackbar from './components/ui/Snackbar';
import theme from './components/ui/Theme';
import { AdminLayout } from './Layout/AdminLayout';
import { ProtectedLayout } from './Layout/ProtectedLayout';
import { PublicLayout } from './Layout/PublicLayout';
import { loadUser } from './store/actions/authAction';

//import useStyles from './styles'; 

function App() {

  const dispatch = useDispatch();
  const { userInfo } = useSelector( state => state.auth );
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
