import React, { useState } from "react";

function CountUp(props) {
  const [count, setCount] = useState(0);
  return (
    <div>
      {count}
      <button onClick={() => setCount((x) => (x += 1))}>CountUp</button>
    </div>
  );
}

export default CountUp;
