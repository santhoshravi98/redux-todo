import React from "react";
import ReactDOM from "react-dom";
import visibilityFilter from "../src/redux/reducers/visibilityFilter";
import todos from "../src/redux/reducers/todos";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import TodoApp from "./TodoApp";
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
const rootReducer = combineReducers({
  todos : todos,
  visibilityFilter : visibilityFilter
});
const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <TodoApp />
  </Provider>,
  rootElement
);
