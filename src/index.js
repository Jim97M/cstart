import React from "react";
import "./index.css";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { AuthProvider } from "./context/AuthProvider";
import store from "../src/states/store";
import App from "./App";

const appElement = document.getElementById("app");

ReactDOM.render(
    <Router>

<Provider store={store}>
        <AuthProvider>
        <App />
        </AuthProvider>

        </Provider>
    </Router>    
    ,
appElement);
