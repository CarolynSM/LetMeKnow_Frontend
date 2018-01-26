import React from "react";
import Back from "../Back.js";

export default class RSVP extends React.Component {
  constructor(props) {
    super(props);
    this.createInviteList = this.createInviteList.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
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
        <form className="rsvp-form">
          <label htmlFor="name">Find your name:</label>
          <select>{this.props.data.map(this.createInviteList)}</select>
          <label htmlFor="rsvp">Can you come?</label>
          <select name="rsvp">
            <option value="attending">Yeah, can&#39;t wait!</option>
            <option value="not-attending">Nope</option>
          </select>
          <label htmlForm="guest">Are you bringing someone?</label>
          <select name="guest">
            <option value="attending">Yes!</option>
            <option value="not attending">No, flying solo.</option>
          </select>
          <label htmlFor="guest-name">What&#39;s you&#39;re guest&#39;s name?</label>
          <input type="text" name="guest-name" />
          <input type="submit" id="rsvp-button" value="RSVP" />
        </form>
        <Back />
      </div>
    );
  }
}
