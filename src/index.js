import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from './Components/signUp-logIn/signUp';
import Login from './Components/signUp-logIn/logIn';
import Cart from './Components/Cart/Cart';
import ProductsAll from './Components/Products/AllProducts';
import Product from './Components/Products/ProductDetails';
import AddProduct from './Components/ProductsCRUD/AddProduct';
import EditProduct from './Components/ProductsCRUD/EditProduct';

const root = ReactDOM.createRoot( document.getElementById( 'root' ) );
root.render(
  <BrowserRouter>
    <Routes>
      <Route exact path='/' element={<App />} />
      <Route exact path='/signup' element={<SignUp />} />
      <Route exact path='/login' element={<Login />} />
      <Route path='*' element={<h1>404 Not Found</h1>} />
      <Route path='/cart' element={<Cart />} />
      <Route path= '/products' element={<ProductsAll />} />
      <Route path='/product/:id' element={<Product />} />
      { localStorage.getItem( 'token' ) &&
      <>
      <Route path='/addProduct' element={<AddProduct />} />
      <Route path='/editProduct/:id' element={<EditProduct />} />
      </>
      }
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
