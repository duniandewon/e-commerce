import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";

import Cart from "./pages/Cart";
import Details from "./pages/Details";
import ProductList from "./pages/ProductList";
import NotFound from "./pages/NotFound";

import Navbar from "./components/Navbar";

const App = () => (
  <Fragment>
    <Navbar />
    <Switch>
      <Route exact path="/" component={ProductList} />
      <Route path="/details" component={Details} />
      <Route path="/cart" component={Cart} />
      <Route component={NotFound} />
    </Switch>
  </Fragment>
);

export default App;
