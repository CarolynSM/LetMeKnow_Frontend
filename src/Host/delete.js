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

export default class DeleteInvite extends React.Component {
  constructor() {
    super();
    this.state = {
      modalIsOpen: false
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.createInviteList = this.createInviteList.bind(this);
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  createInviteList(item) {
    return <option>{item.name}</option>;
  }

  render() {
    return (
      <div>
        <button className="modal-open" onClick={this.openModal}>
          Remove a Guest
        </button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="DeleteGuest Modal"
        >
          <h2>Remove a Guest</h2>
          <form id="delete-invite-form" onSubmit={this.props.remove}>
            <label for="deleted-name">Find your name:</label>
            <select>{this.props.data.map(this.createInviteList)}</select>
            <input type="submit" id="rsvp-button" value="Remove Guest" />
          </form>
          <button onClick={this.closeModal}>Cancel</button>
        </Modal>
      </div>
    );
  }
}
