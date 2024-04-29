import React from "react";
import ReactDOM from "react-dom/client";
import AppRouter from "./router/AppRouter";
import { Provider } from "react-redux";
import './styles/style.scss';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider >
      <AppRouter />
    </Provider>
  </React.StrictMode>
);