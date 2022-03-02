import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import AddExpensePage from '../components/AddExpensePage';
import EditPage from '../components/EditPage';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import Header from '../components/Header';
import HelpPage from '../components/HelpPage';
import NotFound from '../components/NotFound';
import {LoginPage} from '../components/LoginPage';

const AppRouter = ()=> (
    <BrowserRouter>
        <div className="container">
            <Header></Header>
            <Switch>
                <Route path='/' component={LoginPage} exact={true} />
                <Route path='/dashboard' component={ExpenseDashboardPage} exact={true} />
                <Route path='/create' component={AddExpensePage}> </Route>
                <Route path='/edit/:id' component={EditPage} />
                <Route path='/help' component={HelpPage}></Route>
                <Route component={NotFound} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;
