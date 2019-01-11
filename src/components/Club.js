import React, {Component, Fragment} from "react";
import PropTypes from "prop-types";

class Club extends Component {
  render() {
    const {item} = this.props;
    return (
      <Fragment>
        <h2 className="clubList__name">{item.name}</h2>
        <i className={item.fa}></i>
        <ul className="memberList">
          {item.members.map((memberItem, index)=>{
            return (
              <li className="memberList__item" key={index}>
                {memberItem}
              </li>
            );
          })}
        </ul>
      </Fragment>
    );
  }
}

Club.propTypes = {
  item: PropTypes.object
};

export default Club;