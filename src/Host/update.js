import React from "react";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)"
  }
};

export default class UpdateInvite extends React.Component {
  constructor() {
    super();
    Modal.setAppElement(document.body);
    this.state = {
      modalIsOpen: false
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
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
      <div>
        <button className="modal-open" onClick={this.openModal}>
          Update an RSVP
        </button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="UpdateGuest Modal"
        >
          <h2>Update RSVP</h2>
          <form className="update-form" id="update-form" onSubmit={this.props.update}>
            <label htmlFor="name">Find guest name:</label>
            <select name="name" id="update-name">
              {this.props.data.map(this.createInviteList)}
            </select>
            <label htmlFor="response">Are they coming?</label>
            <select name="response">
              <option value="attending">Yeah!</option>
              <option value="not attending">Nope</option>
            </select>
            <label htmlFor="guest">Are they bringing someone?</label>
            <select name="guest">
              <option value="true">Yes!</option>
              <option value="false">No, flying solo.</option>
            </select>
            <label htmlFor="guest-name">What&#39;s their guest&#39;s name?</label>
            <input type="text" name="guest-name" />
            <input type="submit" id="update-button" value="Update RSVP" />
          </form>
          <button onClick={this.closeModal}>Cancel</button>
        </Modal>
      </div>
    );
  }
}
