import React from 'react';
import { NavLink } from 'react-router-dom';

// NavLink also have exact propertyS
const Header = ()=>(
    <header>
        <h1> Expensify</h1>
        <NavLink className='link' to="/" activeClassName='is-active' exact={true}> DashboardPage</NavLink>
        <NavLink className="link" to="/create" activeClassName="is-active"> Create Expense</NavLink>
        <NavLink className="link" to="/edit" activeClassName="is-active"> Edit Expense</NavLink>
        <NavLink className="link" to="/help" activeClassName="is-active"> Get Help</NavLink>
    </header>
);

export default Header;