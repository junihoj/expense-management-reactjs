import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';

// NavLink also have exact propertyS
export const Header = ({startLogout})=>(
    <header>
        <h1> Expensify</h1>
        <NavLink className='link' to="/dashboard" activeClassName='is-active' exact={true}> DashboardPage</NavLink>
        <NavLink className="link" to="/create" activeClassName="is-active"> Create Expense</NavLink>
        <NavLink className="link" to="/edit" activeClassName="is-active"> Edit Expense</NavLink>
        <NavLink className="link" to="/help" activeClassName="is-active"> Get Help</NavLink>
        <button onClick={startLogout}>Logout</button>
    </header>
);

const mapDispatchToProps = (dispatch)=>({
    startLogout:()=> dispatch(startLogout())
})
export default connect(undefined, mapDispatchToProps)(Header);