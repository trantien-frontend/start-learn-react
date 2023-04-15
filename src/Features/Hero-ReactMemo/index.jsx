import React from 'react';
import PropTypes from 'prop-types';

Hero.propTypes = {
  name: PropTypes.array,
};

function Hero({ name }) {
  console.log(name);
  return <div></div>;
}

export default React.memo(Hero);
