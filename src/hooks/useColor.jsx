import React, { useEffect, useRef, useState } from 'react';

function randomColor(currentColor) {
  const colorList = ['red', 'green', 'blue'];

  const currentIndex = colorList.findIndex((color) => color === currentColor);

  let newIndex = currentIndex;

  while (newIndex === currentIndex) {
    newIndex = Math.trunc(Math.random() * 3);
  }

  return colorList[newIndex];
}

function useColor() {
  const [color, setColor] = useState('transparent');
  const colorRef = useRef('transparent');

  useEffect(() => {
    const idInterval = setInterval(() => {
      const newColor = randomColor(colorRef.current);
      setColor(newColor);
      colorRef.current = newColor;
    }, 500);

    return () => {
      console.log('unmounted');
      clearInterval(idInterval);
    };
  }, []);
  return { color };
}

export default useColor;
