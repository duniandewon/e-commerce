import React, { Fragment } from "react";
import logo from "./assets/img/logo.svg";

const App = () => (
  <Fragment>
    <h1 className="text-title text-blue">Hello</h1>
    <img src={logo} alt="Logo" />
  </Fragment>
);

export default App;
