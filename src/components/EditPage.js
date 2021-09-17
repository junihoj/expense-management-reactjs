import React from 'react';
import { connect, connectAdvanced } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import {editExpense, removeExpense} from '../actions/expenses';

const EditPage = (props)=>{
    return (
    <div >
        This is the Edit Page for {props.match.params.id}
        <ExpenseForm 
           onSubmit={(expense)=>{
                console.log('updated', expense)
                props.dispatch(editExpense(props.match.params.id, expense));
                props.history.push('/');
           }} expense = {props.expense}
        />

        <button onClick={()=>{
            props.dispatch(removeExpense({id:props.expense.id}));
            props.history.push('/');
        }}>Remove</button>
    </div>
);};

const mapStateToProps = (state, props) =>{
    return{
        expense:state.expenses.find((expense)=>expense.id === props.match.params.id)
    }
};

export default connect(mapStateToProps)(EditPage);