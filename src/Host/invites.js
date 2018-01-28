import React from "react";
import xmark from "./xmark.png";
import check from "./check.png";
import "./host.css";

export default class Invites extends React.Component {
  constructor(props) {
    super(props);
    this.createInviteTable = this.createInviteTable.bind(this);
    this.responseIcons = this.responseIcons.bind(this);
    this.attendingIcons = this.attendingIcons.bind(this);
  }

  responseIcons(boolean) {
    if (boolean === "true") {
      return <img src={check} alt="yes" className="response-icon" />;
    } else if (boolean === "false") {
      return <img src={xmark} alt="no" className="response-icon" />;
    }
  }

  attendingIcons(string) {
    if (string === "attending") {
      return <img src={check} alt="yes" className="response-icon" />;
    } else if (string === "not attending") {
      return <img src={xmark} alt="no" className="response-icon" />;
    }
  }

  createInviteTable(item) {
    return (
      <tr key={item.id}>
        <td className="invite-name">{item.name}</td>
        <td>{this.responseIcons(item.hasResponded)}</td>
        <td>{this.attendingIcons(item.response)}</td>
        <td>{this.responseIcons(item.bringingGuest)}</td>
        <td>{item.numberAttending}</td>
      </tr>
    );
  }

  render() {
    return (
      <div id="invites-table-div">
        <h3>Invites Sent</h3>
        <table id="invites-table">
          <tbody>
            <tr>
              <th>Name</th>
              <th>RSVPd</th>
              <th>Coming</th>
              <th>Plus One</th>
              <th>Head Count</th>
            </tr>
            {this.props.data.map(this.createInviteTable)}
          </tbody>
        </table>
      </div>
    );
  }
}
