import React from 'react';
import { Switch, Route } from 'react-router-dom';
//import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar.js';
import ProductList from './components/ProductList.js';
import Details from './components/Details.js';
import Cart from './components/cart';
import Default from './components/Default.js';
import Model from './components/Model';
import Footer from './components/Footer';

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route exact path="/" component={ProductList} />
        <Route path="/details" component={Details} />
        <Route path="/cart" component={Cart} />
        <Route component={Default} />
      </Switch>
      <Model />
      <Footer />
    </React.Fragment>
  );
}

export default App;
