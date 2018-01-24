import React from "react";
import GuestList from "./guests.js";
import Invites from "./invites.js";
import Chart from "./chart.js";
import Total from "./total.js";

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);
  }

  render() {
    return (
      <main>
        <Invites data={this.props.invites} />
        <Total data={this.props.invites} />
        <Chart data={this.props.invites} />
        <GuestList data={this.props.guests} />
      </main>
    );
  }
}
