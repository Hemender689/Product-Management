import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Components/Header.js';
import ProductForm from './Components/ProductForm';
import Home from './Components/Home';
import Edit from './Components/Edit';
import ProductList from './Components/ProductList';



function App() {
  
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/addproduct" exact component={ProductForm}></Route>
          <Route path="/productList" exact component={ProductList}></Route>
          <Route path="/edit/:id" exact component={Edit}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
