import React from 'react';
import { NavLink } from 'react-router-dom';


const PortfolioIndexPage = ()=>(
    <div>
        <h1> Here are the porfolio</h1>
        <NavLink to='/portfolio/1' activeClassName="is-active" className='link'> First </NavLink>
        <NavLink to='/portfolio/2' activeClassName="is-active" className='link'> second </NavLink>
        <NavLink to='/portfolio/3' activeClassName="is-active" className='link'> Third</NavLink>
    </div>
);

export default PortfolioIndexPage;