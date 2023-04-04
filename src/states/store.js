import { combineReducers, applyMiddleware, legacy_createStore as createStore, compose } from "redux";
import thunk from "redux-thunk";

import { tutorialDetailssReducer } from "./reducers/tutorialReducers";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducer = combineReducers({
   tutorialDetailss: tutorialDetailssReducer, 
})

const store = createStore(
    reducer,
    composeEnhancer(applyMiddleware(thunk))
);

export default store;

