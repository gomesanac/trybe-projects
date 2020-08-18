import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './style.css';

function Navbar({ name, score, gravatar }) {
  return (
    <nav className="nav-container">
      <img src={gravatar} className="img" alt="avatar" data-testid="header-profile-picture" />
      <h3 data-testid="header-player-name">{name}</h3>
      <h3 data-testid="header-score">{ score } Pontos</h3>
    </nav>
  );
}

const mapStateToProps = (state) => ({
  gravatar: state.player.gravatarEmail,
  name: state.player.name,
  score: state.player.score,
});

Navbar.propTypes = {
  gravatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
};

export default connect(mapStateToProps)(Navbar);
