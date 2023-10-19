import React from 'react';
import PropTypes from 'prop-types';

const Results = ({ result }) => <div>{ result }</div>;

Results.defaultProps = {
  result: 0,
};

Results.propTypes = {
  result: PropTypes.string,
};

export default Results;
