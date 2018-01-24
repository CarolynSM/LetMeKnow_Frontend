import React from "react";

export default class GuestList extends React.Component {
  constructor(props) {
    super(props);
    this.createGuestTable = this.createGuestTable.bind(this);
    console.log(this.props);
  }

  createGuestTable(item) {
    return (
      <tr>
        <td>{item.name}</td>
        <td>{item.guestOf}</td>
      </tr>
    );
  }

  render() {
    return (
      <div id="guests-table">
        <h3>Plus Ones</h3>
        <table>
          <tr>
            <th>Name</th>
            <th>Guest Of</th>
          </tr>
          <tbody>{this.props.data.map(this.createGuestTable)}</tbody>
        </table>
      </div>
    );
  }
}
