import React from "react";

export default class Total extends React.Component {
  constructor(props) {
    super(props);
    this.totalAttendees = this.totalAttendees.bind(this);
  }

  totalAttendees(invites) {
    var total = 0;
    invites.forEach(invite => {
      total += invite.numberAttending;
    });
    return total;
  }

  render() {
    return <h3>Total Attending: {this.totalAttendees(this.props.data)}</h3>;
  }
}
