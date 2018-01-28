import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./splash.css";

const Splash = () => (
  <div className="portal-login">
    <Link to="/host">
      <div className="portal-button">Host Dashboard</div>
    </Link>
    <Link to="/guest">
      <div className="portal-button">RSVP</div>
    </Link>
  </div>
);

export default Splash;
