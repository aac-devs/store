import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import "./styles/index.css";
import "./styles/global.css";
import "./styles/catalogue.css";
import "./styles/product_card.css";
import "./carousel.css";
import App from "./App";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
