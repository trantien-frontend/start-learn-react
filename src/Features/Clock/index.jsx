import React, { useState } from 'react';
import PropTypes from 'prop-types';
import useClock from '../../hooks/useClock';

Clock.propTypes = {};

function Clock() {
  const { time } = useClock();

  return <div>{time}</div>;
}

export default Clock;
