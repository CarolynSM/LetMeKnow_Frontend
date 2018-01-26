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
    this.addNewInvite = this.addNewInvite.bind(this);
    this.deleteInvite = this.deleteInvite.bind(this);
  }

  componentDidMount() {
    fetch("https://letmeknow-backend.herokuapp.com/")
      .then(response => response.json())
      .then(response => {
        this.setState({
          invites: response.invite,
          guests: response.guests
        });
      })
      .catch(error => console.log(error));
  }

  getNewInvite() {
    var data = new FormData(document.querySelector("#new-invite-form"));
    return {
      name: data.get("name"),
      hasResponded: false,
      response: null,
      bringingGuest: null,
      numberAttending: 0
    };
  }

  addNewInvite(event) {
    event.preventDefault();
    fetch("https://letmeknow-backend.herokuapp.com/invite", {
      method: "post",
      body: JSON.stringify(this.getNewInvite()),
      headers: new Headers({
        "Content-Type": "application/json"
      })
    })
      .then(() => this.componentDidMount())
      .catch(err => {
        console.log(err);
      });
  }

  getDeleteData() {
    var name = document.querySelector("#delete-name");
    return name.options[name.selectedIndex].id;
  }

  deleteInvite(event) {
    event.preventDefault();
    fetch("https://letmeknow-backend.herokuapp.com/invite/" + this.getDeleteData(), {
      method: "delete",
      headers: new Headers({
        "Content-Type": "application/json"
      })
    })
      .then(() => this.componentDidMount())
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Router>
          <div>
            <Route exact path="/" component={Splash} />
            <Route
              path="/host"
              component={() => (
                <Dashboard
                  invites={this.state.invites}
                  guests={this.state.guests}
                  add={this.addNewInvite}
                  remove={this.deleteInvite}
                />
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
