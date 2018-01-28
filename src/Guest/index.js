import React from "react";
import Back from "../Back.js";
import "./guest.css";

export default class RSVP extends React.Component {
  constructor(props) {
    super(props);
    this.createInviteList = this.createInviteList.bind(this);
  }

  createInviteList(item) {
    return (
      <option key={item.id} id={item.id}>
        {item.name}
      </option>
    );
  }

  render() {
    return (
      <div className="guest-rsvp">
        <form className="rsvp-form" id="reply-form" onSubmit={this.props.update}>
          <label htmlFor="name">Find your name:</label>
          <select name="name" id="reply-name">
            {this.props.data.map(this.createInviteList)}
          </select>
          <label htmlFor="rsvp">Can you come?</label>
          <select name="rsvp">
            <option value="attending">Yeah, can&#39;t wait!</option>
            <option value="not-attending">Nope</option>
          </select>
          <label htmlFor="guest">Are you bringing someone?</label>
          <select name="guest">
            <option value="true">Yes!</option>
            <option value="false">No, flying solo.</option>
          </select>
          <label htmlFor="guest-name">What&#39;s you&#39;re guest&#39;s name?</label>
          <input type="text" name="guest-name" />
          <input type="submit" id="rsvp-button" value="RSVP" />
        </form>
        <hr />
        <Back />
      </div>
    );
  }
}
