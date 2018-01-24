import React from "react";

export default class Invites extends React.Component {
  constructor(props) {
    super(props);
    this.createInviteTable = this.createInviteTable.bind(this);
    console.log(this.props);
  }

  createInviteTable(item) {
    return (
      <tr>
        <td>{item.name}</td>
        <td>{item.hasResponded}</td>
        <td>{item.response}</td>
        <td>{item.bringingGuest}</td>
        <td>{item.numberAttending}</td>
      </tr>
    );
  }

  render() {
    return (
      <div id="invites-table">
        <h3>Invites Sent</h3>
        <table>
          <tr>
            <th>Name</th>
            <th>RSVPd?</th>
            <th>Coming?</th>
            <th>Bring a guest?</th>
            <th>Total Attending</th>
          </tr>
          <tbody>{this.props.data.map(this.createInviteTable)}</tbody>
        </table>
      </div>
    );
  }
}
