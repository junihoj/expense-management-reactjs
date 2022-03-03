import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import { Provider } from 'react-redux';

import configureStore from './store/configureStore';
import  'normalize.css/normalize.css';
import './styles/styles.scss';
import {addExpense} from './actions/expenses';
import {setTextFilter} from './actions/filters';
import getVisibleExpenses from  './selectors/expenses';
import AppRouter,{history} from './routers/AppRouter';
import {startSetExpenses} from './actions/expenses';
import { firebase } from './firebase/firebase';
import { login,logout } from './actions/auth';

const store = configureStore();


// store.dispatch(addExpense({description: 'water bill', amount:4500}));
// store.dispatch(addExpense({description: 'Gas bill', createdAt:1000}));
// store.dispatch(addExpense({description: 'Rent', amount:1000, }));

console.log("this is suppose to be running");

// const state = store.getState();
// console.log(getVisibleExpenses(state.expenses, state.filters));

// store.subscribe(()=>{
//     console.log(store.getState());
// }); 


const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

const hasRendered = false;

const renderApp = ()=>{
    if(!hasRendered){
        ReactDOM.render(jsx, document.getElementById('app')); 
    }
}



ReactDOM.render(<h1>loading...</h1>, document.getElementById('app'));
/* store.dispatch(startSetExpenses()).then(()=>{
    ReactDOM.render(jsx, document.getElementById('app'));
});
firebase.auth().onAuthStateChanged((user)=>{
    if(user){
        console.log('you are logged in ');

    }else{
        console.log("You're logged out");
    }
})
 */

firebase.auth().onAuthStateChanged((user)=>{
    if(user){
        store.dispatch(startSetExpenses()).then(()=>{
            renderApp();
            if(history.location.pathname =='/'){
                history.push('/dashboard');
            }
        });
    }
    else{
        renderApp();
        history.push('/');
    }
});
// ReactDOM.render(jsx, document.getElementById('app'));