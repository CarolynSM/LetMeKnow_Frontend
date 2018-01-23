import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Splash = () => (
  <div className="portal-login">
    <Link to="/host">
      <div className="portal-button">Host Login</div>
    </Link>
    <Link to="/guest">
      <div className="portal-button">Guest Login</div>
    </Link>
  </div>
);

export default Splash;
