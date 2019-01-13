import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Club from './Club';

class ClubList extends Component {
  render() {
    const { items } = this.props;
    return (
      <ul>
        {items.map((club, i) => {
          const { name, fa, members } = club;
          return <Club key={i} title={name} icon={fa} members={members} />;
        })}
      </ul>
    );
  }
}

ClubList.propTypes = {
  items: PropTypes.array.isRequired
};

export default ClubList;
