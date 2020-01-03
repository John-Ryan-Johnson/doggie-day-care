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
      <div className="MyNavbar">
        <nav className="navbar navbar-expand-lg navbar-custom">
          <span className="navbar-brand" href="#">Ryan's Doggie Daycare</span>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDem" aria-controls="navbarTogglerDem" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDem">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            </ul>
            <div className="form-inline my-2 my-lg-0">
              {/* If authed, show logout button */}
              {/* If NOT authed, show nothing */}
              {
                // can just have && if only trying to show 1 thing in terniary
            authed && (<button className="nav-link" onClick={ this.logMeOut }>Logout</button>)
              }
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default MyNavbar;