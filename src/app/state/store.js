import {createStore, applyMiddleware} from "redux";

// Default logging options
import logger from "redux-logger";
import {todoReducer} from "./reducers";

export default function configureStore(initialState) {
    const store = createStore(todoReducer, initialState, applyMiddleware(logger));
    return store;
}
