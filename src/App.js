import React, {Component} from 'react';
import ReactDOM from 'react-dom';  
import './App.css';
import Footer from "./FooterComponent/Footer";
import Header from "./HeaderComponent/Header";
import Product from "./ProductComponent/Product";

function App(){
  return(
    <div>
      <Header />
      <Product />
      <Footer />
    </div>
  );
}

export default App;
