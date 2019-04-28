import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Modal from "../modal/Modal";
import { logoutUser } from "../../actions/authActions";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    };
  }
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  showModal = e => {
    e.preventDefault();
    this.setState({
      showModal: true
    });
  };

  hideModal = e => {
    if (e) e.preventDefault();
    this.setState({ showModal: false });
  };

  render() {
    const { isAuthenticated } = this.props;

    const authLinks = (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item mr-4">
          <a
            href="!#"
            className="align-middle text-white"
            onClick={this.showModal}
          >
            Add Event
          </a>
        </li>
        <li className="nav-item">
          <a
            className="align-middle text-white"
            onClick={this.onLogoutClick}
            href="!#"
          >
            Logout
          </a>
        </li>
      </ul>
    );

    return (
      <nav className="navbar navbar-expand-md navbar-dark bg-primary p-3 mb-5">
        <div className="container">
          <Link to="/" className="navbar-brand">
            Calendar App
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          {isAuthenticated ? (
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              {" "}
              {authLinks}
              {this.state.showModal ? (
                <Modal
                  disabled={false}
                  hideModal={this.hideModal}
                  eventToDisplay={{}}
                />
              ) : null}
            </div>
          ) : null}
        </div>
      </nav>
    );
  }
}

Navbar.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Navbar);
