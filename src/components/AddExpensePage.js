import React from 'react';
import ExpenseForm from './ExpenseForm';
import { connect } from 'react-redux';
import {startAddExpense} from '../actions/expenses';

// const AddExpensePage = (props)=>(
//     <div>
//         This is the Add Expense Page
//         <ExpenseForm 
//             onSubmit={
//                 (expense)=>{
//                     props.dispatch(startAddExpense(expense));
//                     props.history.push('/');
//                 }
//             }
//         />
//     </div>
// );
class AddExpensePage extends React.Component{
    onSubmit= (expense)=>{
                this.props.startAddExpense(expense);
                this.props.history.push('/');
            }

    render(){
        return(
            <div>
                This is the Add Expense Page
                <ExpenseForm 
                    onSubmit={this.onSubmit}
                />
            </div> 
        )
    }
        
}

const mapDispatchToProps = (dispatch)=>({
    startAddExpense:(expense)=>dispatch(startAddExpense(expense)),
})

export default connect(undefined, mapDispatchToProps)(AddExpensePage);