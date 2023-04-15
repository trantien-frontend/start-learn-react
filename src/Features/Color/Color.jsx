import React from 'react';
import useColor from '../../hooks/useColor';
import './style.scss';

function Color() {
  const { color } = useColor();
  return <div style={{ backgroundColor: color }} className='color-box'></div>;
}

export default Color;
