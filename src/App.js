import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import Header from "./Header";
import Splash from "./Splash";
import RSVP from "./Guest";
import Dashboard from "./Host";
import Footer from "./Footer";

const Home = () => <Splash />;

const App = () => (
  <div className="App">
    <Header />
    <Router>
      <div>
        <Route path="/" component={Home} />
        <Route path="/host" component={Dashboard} />
        <Route path="/guest" component={RSVP} />
      </div>
    </Router>
    <Footer />
  </div>
);

export default App;
