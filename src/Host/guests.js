import React from "react";
import "./host.css";

export default class GuestList extends React.Component {
  constructor(props) {
    super(props);
    this.createGuestTable = this.createGuestTable.bind(this);
  }

  createGuestTable(item) {
    return (
      <tr key={item.id}>
        <td>{item.name}</td>
        <td>{item.guestOf}</td>
      </tr>
    );
  }

  render() {
    return (
      <div id="guests-table-div">
        <h3>Plus Ones</h3>
        <table id="guests-table">
          <tbody>
            <tr>
              <th>Name</th>
              <th>Guest Of</th>
            </tr>
            {this.props.data.map(this.createGuestTable)}
          </tbody>
        </table>
      </div>
    );
  }
}
