import pizzasReducer from "./pizzas-reducer";
import {combineReducers, createStore} from "redux";


const rootReducer = combineReducers({
    pizzas: pizzasReducer
})


const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store