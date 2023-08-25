import React, { useState } from "react";
import Button from "./components/Button";
import Outcome from "./components/Outcome";
import "./App.css";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Button setCount={setCount} />
      <Outcome count={count} />
    </div>
  );
};

export default App;
