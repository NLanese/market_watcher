import React, {Component} from 'react';
import { connect } from 'react-redux';
import loginAction from '../../dispatch_actions/loginAction';
import Signup from '../dispatchers/Signup';
import './css/LoginOrSignUp.css'


const mapStateToProps = (state) => {
    return({
        failed_attempt: state.user.failed_attempt
    })
}

const mapDispatchToProps = (dispatch) => {
    return({

        submitUserInfo: (state) => {
            dispatch({type: "LOAD_LOGIN"})
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

    rednerFailure(props){
        if (props.failed_attempt.failed == true){
            let msg = props.failed_attempt.message
            return(
                {msg}
            )
        }
        else{
            return
        }
    }

    handleChange = (type, event) => {
        this.setState({
            ...this.state,
            [type]: event.target.value
        })
    }

    render(){
        if (this.state.sign_in == false){
            return(
                <div className="Login_Content_Container">
                    <p id="fail_msg">{this.rednerFailure(this.props)}</p>
                    <p>Username: <input type="text" id="username_input" onChange={(event) => this.handleChange("username_input", event)}/></p>
                    <p><input type="text" id="password_input" onChange={(event) => this.handleChange("password_input", event)}/></p>
                    <button id="login_button" onClick={this.props.submitUserInfo(this.state)}>Login</button>
                    <button id="signup_button">Create New Account!</button>
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