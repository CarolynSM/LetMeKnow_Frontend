import React from "react";
import GuestList from "./guests.js";
import Invites from "./invites.js";

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);
  }

  render() {
    return (
      <main>
        <Invites data={this.props.invites} />
        <GuestList data={this.props.guests} />
      </main>
    );
  }
}
