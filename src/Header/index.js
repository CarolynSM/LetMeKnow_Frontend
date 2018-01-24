import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo from "./logo.png";

const Header = () => (
  <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
  </header>
);

export default Header;
