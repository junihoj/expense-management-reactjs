import React from 'react';
import { NavLink, Link } from 'react-router-dom';


const Header = ()=>(
    <header>
        <NavLink to="/" activeClassName='is-active' exact={true} className="link">HomePage</NavLink>
        <NavLink to="/portfolio" activeClassName="is-active" className="link">Portfolio Page</NavLink>
        <NavLink to="/contact" activeClassName="is-active" className="link"> Contact Page </NavLink>
    </header>
);

export default Header;