import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './components/ui/Theme';
import { SnackbarProvider } from 'notistack';
import {PublicLayout} from './Layout/PublicLayout';
import {ProtectedLayout} from './Layout/ProtectedLayout';

import './App.css';
//import useStyles from './styles'; 

function App() {
  //const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <Router>
      <SnackbarProvider maxSnack={3}>
        <div className="App">
          <Switch>
            <Route path='/admin' component={ProtectedLayout} />
            <Route path='/' component={PublicLayout} />
          </Switch>
        </div>
        </SnackbarProvider>
      </Router>
    </ThemeProvider>
  );
}

export default App;
