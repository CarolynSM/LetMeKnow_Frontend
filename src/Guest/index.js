import React from "react";

export default class RSVP extends React.Component {
  constructor(props) {
    super(props);
    this.createInviteList = this.createInviteList.bind(this);
    this.createInviteList = this.createInviteList.bind(this);
    console.log(this.props);
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  createInviteList(item) {
    return <option>{item.name}</option>;
  }

  render() {
    return (
      <div className="guest-rsvp">
        <form className="rsvp-form">
          <label for="name">Find your name:</label>
          <select>{this.props.data.map(this.createInviteList)}</select>
          <select name="rsvp">
            <option value="" disabled selected>
              Can you come?
            </option>
            <option value="attending">Yeah, can&#39;t wait!</option>
            <option value="not-attending">Nope</option>
          </select>
          <select name="guest">
            <option value="" disabled selected>
              Are you bringing someone?
            </option>
            <option value="attending">Yes!</option>
            <option value="not attending">No, flying solo.</option>
          </select>
          <label for="guest-name">What&#39;s you&#39;re guest&#39;s name?</label>
          <input type="text" name="guest-name" />
          <input type="submit" id="rsvp-button" value="RSVP" />
        </form>
      </div>
    );
  }
}
