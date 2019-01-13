import React, { Component } from 'react';
import PropTypes from 'prop-types';
import clubPropTypes from './club-proptypes';
import Club from './Club';

class ClubList extends Component {
  renderClub(club, i) {
    const { name, fa, members } = club;
    return <Club key={i} name={name} fa={fa} members={members} />;
  }

  render() {
    const { items } = this.props;
    return <ul>{items.map(this.renderClub)}</ul>;
  }
}

ClubList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape(clubPropTypes).isRequired).isRequired
};

export default ClubList;
