import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Back = () => (
  <Link to="/">
    <div className="portal-button" id="return-home">
      Return Home
    </div>
  </Link>
);

export default Back;
