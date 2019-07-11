import React from 'react';
import {Switch,Route} from 'react-router-dom'
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './NavBar'
import ProductList from './ProductList'
import Details from './Details'
import Cart from './cart/Cart'
import Default from './Default'
import Modal from './Modal'
import Login from './login';
import SignUp from './SignUp';
import Checkout from "./Checkout";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route 
        exact
        path="/" 
        component={ProductList}></Route>
        <Route 
        path="/details" 
        component={Details}></Route>
        <Route 
        path="/checkout" 
        component={Checkout}></Route>
        <Route 
        path="/cart" 
        component={Cart}></Route>
        <Route 
        path="/login" 
        component={Login}></Route>
        <Route 
        path="/signup" 
        component={SignUp}></Route>
        <Route  
        component={Default}></Route>
      </Switch>
      <Modal />
    </React.Fragment>
  );
}

export default App;
