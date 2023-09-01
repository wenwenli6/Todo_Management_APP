import React, {Component} from 'react'
import AuthenticationService from './AuthenticationService.js'

class LoginComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: 'in28minutes',
            password:'',
            hasLoginFailed: false,
            showSuccessMessage: false
        }
        this.handleChange = this.handleChange.bind(this)
        this.loginClicked = this.loginClicked.bind(this)
       
    }
    handleChange(event){
        //console.log(this.state);
        this.setState(
            {
                [event.target.name]
                    : event.target.value
            }
        )
    }
    loginClicked() {
        //in28minutes, dummy
        // if(this.state.username==='in28minutes' && this.state.password==='dummy'){
        //     AuthenticationService.registerSuccessfulLogin(this.state.username, this.state.password);
        //     //console.log('Successful')
        //     this.props.navigate(`/welcome/${this.state.username}`)
        //     //this.setState({showSuccessMessage:true})
        //     //this.setState({hasLoginFailed:false})
        // }
        // else {
        //     this.setState({showSuccessMessage:false})
        //     this.setState({hasLoginFailed:true})
        // }
        // AuthenticationService
        // .executeBasicAuthenticationService(this.state.username, this.state.password)
        // .then(() => {
        //         AuthenticationService.registerSuccessfulLogin(this.state.username, this.state.password);
        //         this.props.navigate(`/welcome/${this.state.username}`)
        // }).catch( () =>{
        //     this.setState({showSuccessMessage:false})
        //     this.setState({hasLoginFailed:true})
        // })
        //console.log(this.state)

        AuthenticationService
        .executeJwtAuthenticationService(this.state.username, this.state.password)
        .then((response) => {
                AuthenticationService.registerSuccessfulLoginForJwt(this.state.username, response.data.token);
                this.props.navigate(`/welcome/${this.state.username}`)
        }).catch( () =>{
            this.setState({showSuccessMessage:false})
            this.setState({hasLoginFailed:true})
        })
    }
    

    // handleUsernameChange(event){
    //     console.log(event.target.value);
    //     this.setState(
    //         {
    //             [event.target.name]
    //                 : event.target.value
    //         }
    //     )
    // }
    // handlePasswordChange(event){
    //     console.log(event.target.value);
    //     this.setState({password: event.target.value})
    // }
    render() {
        return (
            //react fragment
            <div>
                <h1>Login</h1>
                <div className="container"></div>
                {/*<ShowInvalidCredentials hasLoginFailed={this.state.hasLoginFailed}/>*/}
                {this.state.hasLoginFailed && <div className="alert alert-warning">Invalid Credentials</div>}
                {this.state.showSuccessMessage && <div>Login Successful</div>}
                {/*<ShowLoginSuccessMessage showSuccessMessage={this.state.showSuccessMessage}/>*/}
                <div className="TodoApp">
                    User Name:<input tyep="text" name="username" value={this.state.username} onChange={this.handleChange}/>
                    Password:<input type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
                    <button className="btn btn-success" onClick={this.loginClicked}>Login</button>
                </div>          
            </div>        
        )
    }
}

export default LoginComponent