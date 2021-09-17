import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

const ExpenseList = (props) =>(
    <div>
        <h1>Here are your expenses</h1>
        {props.expenses.map((expense)=>(
                <ExpenseListItem 
                    {...expense} 
                    key={expense.id}
                    dispatch={props.dispatch}
                />
            )
        )}
    </div>
);

const mapStateToProps = (state)=>{
    return {
        // expenses:state.expenses,
        // filters: state.filters,
        expenses: selectExpenses(state.expenses, state.filters)
    };
}

const ConnectedExpenseList = connect(mapStateToProps)(ExpenseList);

export default ConnectedExpenseList;