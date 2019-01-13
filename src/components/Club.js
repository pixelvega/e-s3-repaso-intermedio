import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Club extends Component {
  render() {
    const { title, icon, members } = this.props;
    return (
      <li>
        <h2>{title}</h2>
        <i className={icon} />
        <h3>Miembros:</h3>
        <ul>
          {members.map((member, i) => {
            return <li key={i}>{member}</li>;
          })}
        </ul>
      </li>
    );
  }
}

Club.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  members: PropTypes.array.isRequired
};

export default Club;
