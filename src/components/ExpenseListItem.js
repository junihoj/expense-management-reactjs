import moment from 'moment';
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const ExpenseListItem = ({id, description, amount, createdAt, dispatch})=>(
    <div>
        <Link to={`/edit/${id}`} >
            <h3>{description}</h3>
        </Link>
        <p> {amount}-{moment(createdAt).format('MM do YYYY')}</p>
         
    </div>
    
);


export default connect()(ExpenseListItem);