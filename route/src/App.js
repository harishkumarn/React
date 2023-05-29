import React from "react";
import LinkTo from "./route/link-to";
import Router from "./route/Router";
function App() {
  return (
    <React.Fragment>
      <div >
        <LinkTo to="h1"/>
        <LinkTo to="h2"/>
        <LinkTo to="h3"/>
      </div>
      <Router route="h1">
        <h1>Hi</h1>
      </Router>
      <Router route="h2">
        <h2>Hi</h2>
      </Router>
      <Router route="h3">
        <h3>Hi</h3>
      </Router>
    </React.Fragment>
  );
}

export default App;
