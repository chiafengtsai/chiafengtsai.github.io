import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import WebFont from "webfontloader";
// load googld font
WebFont.load({
  google: {
    families: ["Noto+Sans+TC", "Open+Sans:800", "Roboto:500"]
  }
});

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
