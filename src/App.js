import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './components/ui/Theme';
import {PublicLayout} from './Layout/PublicLayout';
import {ProtectedLayout} from './Layout/ProtectedLayout';
import Snackbar from './components/ui/Snackbar';

import './App.css';
//import useStyles from './styles'; 

function App() {
  //const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className="App">
          <Snackbar />
          <Switch>
            <Route path='/admin' component={ProtectedLayout} />
            <Route path='/' component={PublicLayout} />
          </Switch>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
