import React, {Component} from 'react';
import { connect } from 'react-redux';
import loginAction from '../../dispatch_actions/loginAction.js';
import Signup from '../dispatchers/Signup';
import './css/LoginOrSignUp.css'


const mapStateToProps = (state) => {
    return({
        failed_attempt: state.user.failed_attempt
    })
}

const mapDispatchToProps = (dispatch) => {
    return({

        submitLogin: (state) => {
            dispatch(loginAction(state))
        }
        
    })
}


class LoginOrSignUp extends Component{
    constructor(){
        super()
        this.state = {
            username_input: null,
            password_input: null,
            sign_in: false
        }
    }


    // RENDERS A FAILURE METHOD UPON INVALID LOGIN ATTEMPT
    rednerFailure(props){
        if (props.failed_attempt.failed == true){
            let msg = props.failed_attempt.message
            return({msg})
        }
        else{
            return
        }
    }

    // TRACKS THE USERS INPUTS FOR EITHER FIELD
    handleChange = (type, event) => {
        this.setState({
            ...this.state,
            [type]: event.target.value
        })
    }

    // THIS WILL CJHANGE THE STATE TO INSTEAD RENDER THE SIGNUP SCREEN
    change_to_signup = (state) => {
        return this.setState({
            ...state, sign_in: true
        })
    }

    // HANDLES THE USER LOGIN
    submitUser = (event, state) => {
        event.preventDefault()
        if (state.username_input == null ||  state.password_input == null ||
            state.username_input == "" || state.password_input == ""){
                this.props.failedSignUp("Please fill in all fields!")
        }
        else{
            this.props.submitLogin(state)
        }
    }

    // MAIN RENDER METHOD...duh
    render(){
        if (this.state.sign_in == false){
            return(
                <div className="Login_Content_Container">
                    <p id="fail_msg">{this.rednerFailure(this.props)}</p>
                    <h1 className="Login_Prompt">Enter your Information</h1>
                    <div className="login_fields">
                        <p className="login_p">Username: <input type="text" id="username_input" onChange={(event) => this.handleChange("username_input", event)}/></p>
                        <p className="login_p">Password: <input type="text" id="password_input" onChange={(event) => this.handleChange("password_input", event)}/></p>
                    </div>
                    <button id="login_button" onClick={(event) => this.submitUser(event, this.state)}>Login</button>
                    <p id="or">Or, if you have no account</p>
                    <button id="signup_button" onClick={()=> this.change_to_signup(this.state)}>Create New Account!</button>
                </div>
            )
        }
        else{
            return(
                <div className="Signup_Window">
                    <Signup />
                </div>
            )
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginOrSignUp)