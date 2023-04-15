import React, { useState } from "react";

function ChangeColor(props) {
  const [color, setColor] = useState("White");
  return (
    <div>
      <p>{color}</p>
      <button onClick={() => setColor("Black")}>Black</button>
      <button onClick={() => setColor("White")}>White</button>
    </div>
  );
}

export default ChangeColor;
