import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'

function App() {
  return(
    <BrowserRouter>
  <div className="grid-container">
    <header className="row">
        <div>
            <a className="brand" href="/">Home</a>
        </div>
        <div>
            <a href="/cart" >Cart</a>
            <a href="/login">Login</a>
        </div>
    </header>

    <main>
  
    <Route path="/product/:id" component={ProductScreen}></Route>
    <Route path="/" component={HomeScreen} exact></Route>
    </main>

    <footer className="row center">
        Copyright 2021
    </footer>
</div>
</BrowserRouter>
  );
}

export default App;
