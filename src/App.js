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
    this.headCount = this.headCount.bind(this);
    this.updateInvite = this.updateInvite.bind(this);
    this.getInviteUpdate = this.getInviteUpdate.bind(this);
    this.stringToBoolean = this.stringToBoolean.bind(this);
    this.getGuestUpdate = this.getGuestUpdate.bind(this);
    this.getReplyId = this.getReplyId.bind(this);
    this.updateReply = this.updateReply.bind(this);
    this.getGuestReply = this.getGuestReply.bind(this);
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
    fetch("https://letmeknow-backend.herokuapp.com/guests/" + this.getDeleteData(), {
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

  getUpdateId() {
    var name = document.querySelector("#update-name");
    return name.options[name.selectedIndex].id;
  }

  headCount(response, guestStatus) {
    if (response === "not attending") {
      return 0;
    } else if (response === "attending" && guestStatus === false) {
      return 1;
    } else if (response === "attending" && guestStatus === true) {
      return 2;
    }
  }

  stringToBoolean(boolean) {
    if (boolean === "true") {
      return true;
    } else if (boolean === "false") {
      return false;
    }
  }

  getInviteUpdate() {
    var data = new FormData(document.querySelector("#update-form"));
    var response = data.get("response");
    var guestStatus = this.stringToBoolean(data.get("guest"));
    return {
      name: data.get("name"),
      hasResponded: true,
      response: response,
      bringingGuest: guestStatus,
      numberAttending: this.headCount(response, guestStatus)
    };
  }

  getGuestUpdate() {
    var data = new FormData(document.querySelector("#update-form"));
    return {
      name: data.get("guest-name"),
      guestOf: data.get("name"),
      guestOfId: this.getUpdateId()
    };
  }

  updateInvite(event) {
    event.preventDefault();
    console.log(this.getUpdateId());
    fetch("https://letmeknow-backend.herokuapp.com/invite/" + this.getUpdateId(), {
      method: "put",
      body: JSON.stringify(this.getInviteUpdate()),
      headers: new Headers({
        "Content-Type": "application/json"
      })
    })
      .then(response => {
        this.componentDidMount();
      })
      .catch(err => {
        console.log(err);
      });
    console.log(this.getGuestUpdate());
    fetch("https://letmeknow-backend.herokuapp.com/guests", {
      method: "post",
      body: JSON.stringify(this.getGuestUpdate()),
      headers: new Headers({
        "Content-Type": "application/json"
      })
    })
      .then(() => this.componentDidMount())
      .catch(err => {
        console.log(err);
      });
  }

  getReplyId() {
    var name = document.querySelector("#reply-name");
    return name.options[name.selectedIndex].id;
  }

  getReplyData() {
    var data = new FormData(document.querySelector("#reply-form"));
    var response = data.get("rsvp");
    var guestStatus = this.stringToBoolean(data.get("guest"));
    return {
      name: data.get("name"),
      hasResponded: true,
      response: response,
      bringingGuest: guestStatus,
      numberAttending: this.headCount(response, guestStatus)
    };
  }

  getGuestReply() {
    var data = new FormData(document.querySelector("#reply-form"));
    return {
      name: data.get("guest-name"),
      guestOf: data.get("name"),
      guestOfId: this.getReplyId()
    };
  }

  updateReply(event) {
    event.preventDefault();
    console.log(this.getReplyData());
    fetch("https://letmeknow-backend.herokuapp.com/invite/" + this.getReplyId(), {
      method: "put",
      body: JSON.stringify(this.getReplyData()),
      headers: new Headers({
        "Content-Type": "application/json"
      })
    })
      .then(response => {
        this.componentDidMount();
      })
      .catch(err => {
        console.log(err);
      });
    fetch("https://letmeknow-backend.herokuapp.com/guests", {
      method: "post",
      body: JSON.stringify(this.getGuestReply()),
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
                  update={this.updateInvite}
                />
              )}
            />
            <Route
              path="/guest"
              component={() => <RSVP data={this.state.invites} update={this.updateReply} />}
            />
          </div>
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
