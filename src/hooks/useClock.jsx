import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

useClock.propTypes = {};

function formatDate(date) {
  if (!date) return;

  const hours = date.getHours().toString();
  const minutes = date.getMinutes().toString();
  const seconds = date.getSeconds().toString();

  return `${hours.slice(-2)}:${minutes.slice(-2)}:${seconds.slice(-2)}`;
}

function useClock() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const idInterval = setInterval(() => {
      const date = new Date();
      const dateFormated = formatDate(date);
      setTime(dateFormated);
    }, 1000);

    return () => {
      console.log('clean-up');
      clearInterval(idInterval);
    };
  }, []);

  return { time };
}

export default useClock;
