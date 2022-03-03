import { 
    createStore, 
    applyMiddleware, 
    compose, 
    combineReducers
} from "redux";
import expensesReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filters';
import authReducer from '../reducers/auth';
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

//store creation

export default ()=>{
    const store = createStore(combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer,
        auth:authReducer,
    }),
        composeEnhancers(applyMiddleware(thunk))
        // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    
    return store;
};

