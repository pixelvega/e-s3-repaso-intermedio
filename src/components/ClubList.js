import React, { Component } from 'react';
import PropTypes from "prop-types";
import Club from './Club';

class ClubList extends Component {
  render() {
    const {clubs} = this.props;
    return (
      <ul className="clubList">
        {clubs.map((item, index)=>{
          return (
            <li className="clubList__item" key={index}>
              <Club item={item} />
            </li>
          );
        })}
      </ul>
    );
  }
}

ClubList.propTypes = {
  clubs: PropTypes.array
};

export default ClubList;