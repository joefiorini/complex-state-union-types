import React, { useState } from "react";
import ReactDOM from "react-dom";
import TypeScript from "./1-Typescript";
import NaiveDismiss from "./2-NaiveDismiss";

function ComponentWithSelector() {
  const [component, setComponent] = useState("Initial");

  return (
    <>
      <nav className="navbar navbar-dark bg-dark">
        <select value={component} onChange={e => setComponent(e.target.value)}>
          <option value={"TypeScript"}>TypeScript</option>
          <option value={"NaiveDismiss"}>Naive Dismiss</option>
        </select>
      </nav>

      <main className="container">
        {component === "TypeScript" ? <TypeScript /> : <NaiveDismiss />}
      </main>
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<ComponentWithSelector />, rootElement);
