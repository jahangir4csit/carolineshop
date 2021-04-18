//import logo from './logo.svg';
import {BrowserRouter as Router, Switch, Route, Redirect, Link} from "react-router-dom";
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './components/ui/Theme';
import ProductList from './container/ProductList';
import About from './container/About.jsx';
import Contact from './container/Contact.jsx';
import Page404 from './container/404.jsx';
import Header from './components/layout/Header';
import Footer from './components/layout/footer';
import Slider from './components/layout/Slider';
import Breadcrumb from './components/layout/Breadcrumb';
import ProductDetails from './container/ProductDetails';
import Cart from './container/Cart';

import CreateProduct from './components/axios/CreateProduct';
import EditProduct from './components/axios/EditProduct';
import Auth from './components/Auth/Auth';
import Dashboard from './components/admin/Dashboard';

import './App.css';
import useStyles from './styles'; 

function App() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/contact">
              <Contact />
            </Route>
            <Route exact path="/">
              <Slider />
              <ProductList />
            </Route>
            <Route exact path="/shop">
              <Breadcrumb title="Product List" />
              <ProductList />
            </Route>
            <Route exact path="/product-details/:id">
              <Breadcrumb title="Details" />
              <ProductDetails />
            </Route>
            <Route exact path="/cart">
              <Breadcrumb title="Cart" />
              <Cart />
            </Route>
            <Route exact path="/create">
              <Breadcrumb title="Product Create" subtitle="Creat" />
              <CreateProduct />
            </Route>
            <Route exact path="/product-edit/:id">
              <Breadcrumb title="Product Edit" />
              <EditProduct />
            </Route>
            <Route exact path="/auth">
              <Breadcrumb title="My Account" />
              <Auth />
            </Route>
            <Route exact path="/dashboard">
              <Breadcrumb title="Dashboard" />
              <Dashboard />
            </Route>
            <Route path='*'>
              <Page404 />
            </Route>
          </Switch>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
