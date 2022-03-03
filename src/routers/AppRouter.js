import React from 'react';
import { Router, Route, Switch, Link, BrowserRouter} from 'react-router-dom';
import AddExpensePage from '../components/AddExpensePage';
import EditPage from '../components/EditPage';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import HelpPage from '../components/HelpPage';
import NotFound from '../components/NotFound';
import LoginPage from '../components/LoginPage';
import createHistory from 'history/createBrowserHistory';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createHistory();

const AppRouter = ()=> (
    <Router history={history}>
        <div className="container">
            <Switch>
                <PublicRoute path='/' component={LoginPage} exact={true} />
                <PrivateRoute path='/dashboard' component={ExpenseDashboardPage} exact={true} />
                <Route path='/create' component={AddExpensePage}> </Route>
                <Route path='/edit/:id' component={EditPage} />
                <Route path='/help' component={HelpPage}></Route>
                <Route component={NotFound} />
            </Switch>
        </div>
    </Router>
);

export default AppRouter;
