import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";

const Timer = () => {
  const [count, setCount] = useState(0);

  useEffect(
    () => {
      let timer = setTimeout(
        () => setCount(count => count + 1),
        1000
      );

      return () => clearTimeout(timer)
    },
    []
  );

  return <h1>I've rendered {count} times!</h1> 
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Timer />);
