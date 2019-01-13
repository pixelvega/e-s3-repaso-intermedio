import PropTypes from 'prop-types';

const clubPropTypes = {
  name: PropTypes.string.isRequired,
  fa: PropTypes.string.isRequired,
  members: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
};

export default clubPropTypes;
