import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import Products from "./pages/Products";
import TopMenu from "./components/TopMenu";
import { CartProvider } from "./contexts/Cart";

const Index = () => <h2>Home</h2>;


function App() {
    return (
        <CartProvider>
            <Router>
                <div className="App">
                <TopMenu />
            
                <Route path="/" exact component={Index} />
                <Route path="/products/" component={Products} />
                </div>
            </Router>
        </CartProvider>
    );
}






ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
