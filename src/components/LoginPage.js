import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';


export const LoginPage = (props)=>{
    return(
        <div className="box-layout">
            <div className="box-layout__box">
                <h1 className="box-layout__title">Expenses Management Application</h1>
                <p>
                    Welcome to our Expense management Application 
                    this where you management all your expense.
                    Login to our platform and manage your expense
                </p>
                <button onClick={props.startLogin} className="button">
                    Login with Google
                </button>
            </div>
        </div>
    )
}


const mapDispatchToProps = (dispatch)=>({
    startLogin:()=>dispatch(startLogin())
})
export default connect(undefined, mapDispatchToProps)(LoginPage)


