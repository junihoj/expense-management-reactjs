import React from 'react';
import { Link } from 'react-router-dom';


const NotFound = ()=>(
    <div> 
        This is a 404 page
        <Link to="/">Go back to Home</Link> 
    </div>
);


export default NotFound;