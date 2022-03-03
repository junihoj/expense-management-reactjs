import React from 'react';
import { connect, Connect } from 'react-redux';
import { Route,Redirect } from 'react-router';
import Header from '../components/Header';



export const PrivateRoute = ({isAuthenticated, component:Component, ...rest})=>{
    return(
        <Route  component={(props)=>(
            isAuthenticated?(
                <div>
                    
                    <Header/>
                    <Component  {...props}/>
                </div>
            ):(
                <Redirect to="/"/>
            )
        )}/>
    )
}

const mapStateToProps=(state,props)=>({
    isAuthenticated: !!state.auth.uid
})
export default connect(mapStateToProps)(PrivateRoute)

