import React from 'react';
import { connect, Connect } from 'react-redux';
import { Route,Redirect } from 'react-router';



export const PublicRoute = ({isAuthenticated, component:Component, ...rest})=>{
    return(
        <Route  component={(props)=>(
            isAuthenticated?(
                <Redirect to="/dashboard"/>
                ):(
                <Component  {...props}/>
            )
        )}/>
    )
}

const mapStateToProps=(state,props)=>({
    isAuthenticated: !!state.auth.uid
})
export default connect(mapStateToProps)(PublicRoute)

