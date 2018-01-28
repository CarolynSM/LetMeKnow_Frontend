import React from "react";
import Back from "../Back.js";
import GuestList from "./guests.js";
import Invites from "./invites.js";
import Chart from "./chart.js";
import Total from "./total.js";
import UpdateInvite from "./update.js";
import AddInvite from "./add.js";
import DeleteInvite from "./delete.js";

export default class Dashboard extends React.Component {
  render() {
    return (
      <main>
        <Invites data={this.props.invites} />
        <Total data={this.props.invites} />
        <Chart data={this.props.invites} />
        <AddInvite add={this.props.add} />
        <UpdateInvite data={this.props.invites} update={this.props.update} />
        <DeleteInvite data={this.props.invites} remove={this.props.remove} />
        <GuestList data={this.props.guests} />
        <Back />
      </main>
    );
  }
}
