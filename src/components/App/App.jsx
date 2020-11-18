import React, { Component } from "react";

import * as Variables from "../../core/constants.js";

class App extends Component {
  render() {
    return <div>{Variables.API_URL}</div>;
  }
}

export default App;
