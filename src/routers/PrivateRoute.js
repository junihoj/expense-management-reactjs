import React from 'react';
import { connect, Connect } from 'react-redux';
import { Route,Redirect } from 'react-router';



export const PrivateRoute = ({isAuthenticated, component:Component, ...rest})=>{
    return(
        <Route  component={()=>{
            isAuthenticated?(
                <Component  {...props}/>
            ):(
                <Redirect to="/"/>
            )
        }}/>
    )
}

const mapStateToProps=(state,props)=>{
    isAuthenticated: !!state.auth.uid
}
export default connect(mapStateToProps)(PrivateRoute)

