import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import Header from "./Header";
import Splash from "./Splash";
import RSVP from "./Guest";
import Dashboard from "./Host";
import Footer from "./Footer";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    fetch("https://letmeknow-backend.herokuapp.com/")
      .then(response => response.json())
      .then(response => {
        this.setState({
          invites: response.invite,
          guests: response.guests
        });
        console.log(this.state);
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Router>
          <div>
            <Route path="/" component={Splash} />
            <Route
              path="/host"
              component={() => (
                <Dashboard invites={this.state.invites} guests={this.state.guests} />
              )}
            />
            <Route path="/guest" component={() => <RSVP data={this.state.invites} />} />
          </div>
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
