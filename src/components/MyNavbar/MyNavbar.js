import React from 'react';
import PropTypes from 'prop-types';
import firebase from 'firebase/app';
import 'firebase/auth';
import './MyNavbar.scss';


class MyNavbar extends React.Component {
  static propTypes = {
    authed: PropTypes.bool,
  }

  logMeOut = (e) => {
    e.preventDefault();
    firebase.auth().signOut();
  }

  render() {
    const { authed } = this.props;

    return (
      <div className="Navbar">
        <nav className="navbar navbar-expand-sm navbar-custom">
          <h1 className="navbar-brand text-white">Ryan's Kennel</h1>
          <div className="form-inline my-2 my-lg-0">

            {
              authed && (<button className="btn btn-danger" onClick={ this.logMeOut }>Logout</button>)
            }
          </div>
        </nav>
      </div>
    );
  }
}

export default MyNavbar;
