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

export default class AddInvite extends React.Component {
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

  render() {
    return (
      <div>
        <button className="modal-open" onClick={this.openModal}>
          Add a Guest
        </button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="AddGuest Modal"
        >
          <h2>Add a Guest</h2>
          <form id="new-invite-form" onSubmit={this.props.add}>
            <label htmlFor="name">Name:</label>
            <input type="text" name="name" />
            <input type="submit" id="add-button" value="Add Invite" />
          </form>
          <button onClick={this.closeModal}>Cancel</button>
        </Modal>
      </div>
    );
  }
}
