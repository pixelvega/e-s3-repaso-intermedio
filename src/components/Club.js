import React from 'react';
import clubPropTypes from './club-proptypes';

const Club = ({ name, fa, members }) => (
  <li>
    <h2>{name}</h2>
    <i className={fa} />
    <h3>Miembros:</h3>
    <ul>
      {members.map((member, i) =>
        <li key={i}>{member}</li>
      )}
    </ul>
  </li>
);

Club.propTypes = clubPropTypes;

export default Club;
