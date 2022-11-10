import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// redux recent
import { Provider } from "react-redux";
import store from "./componets/app/store";
// import {createStore, applyMiddleware, compose} from 'redux'
// import reducers from './reducers';
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const store = createStore(reducers, composeEnhancers(applyMiddleware()))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
