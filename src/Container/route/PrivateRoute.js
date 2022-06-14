import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IsLogin } from '../utils/Index';

function PrivateRoute({component : Component , ...rest}) {
    return (
       <Route {...rest} render ={props => (
        IsLogin() ? <Component {...props}/> 
        :
        <Redirect to={"/auth"}/>


       )}
             

       />
    );
}

export default PrivateRoute;