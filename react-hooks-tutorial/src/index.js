import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

const Car = () => {
  // const [car, setCar] = useState({
  //   brand: "Ford",
  //   model: "Mustang",
  //   year: "1964",
  //   color: "red"
  // });
  const [brand, setBrand] = useState("Ford");
  const [model, setModel] = useState("Mustang");
  const [year, setYear] = useState("1964");
  const [color, setColor] = useState("red");

   return (
    <>
      <h1>My {brand}</h1>
      <p>
        It is a {color} {model} from {year}.
      </p>
    </>
   )
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Car />);