import React, {Component} from 'react'
import {Route, Redirect} from 'react-router-dom'
import { Navigate } from 'react-router-dom'
import AuthenticationService from './AuthenticationService.js'


class AuthenticatedRoute extends Component{
    render() {
        if(AuthenticationService.isUserLoggedIn()){
            return {...this.props.children}
        } else{
            return <Navigate to="/login" />
        }
    }
}

export default AuthenticatedRoute
/*
import React, {Component} from 'react'
import {Route, Redirect} from 'react-router-dom'
import AuthenticationService from './AuthenticationService.js'


class AuthenticatedRoute extends Component{
    render() {
        if(AuthenticationService.isUserLoggedIn()){
            return <Route {...this.props}/>
        } else{
            return <Redirect to="/login" />
        }
    }
}

export default AuthenticatedRoute*/