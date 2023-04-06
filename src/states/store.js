import { combineReducers, applyMiddleware, legacy_createStore as createStore, compose } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";



import { tutorialDetailssReducer } from "./reducers/tutorialReducers";

const reducer = combineReducers({
   tutorialDetails: tutorialDetailssReducer, 
})

const middleware = [thunk];

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware)),
);

export default store;
