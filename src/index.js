import "./style.scss";
import React, { useState } from "react";
import { render } from "react-dom";
import { getUsers } from "./common/usersAPI";
console.log("Hello Webpack!");
getUsers().then((json) => console.log(json));

function App() {
  const [state, setState] = useState("Click Me!");

  return (
    <button
      onClick={() => {
        setState("Clicked!");
      }}
    >
      {state}
    </button>
  );
}

render(<App />, document.getElementById("root"));
