import React, {Component} from 'react';
import signUpAction from '../../dispatch_actions/createUserAction';
import { connect } from 'react-redux';
import determineErrorIfAny from '../../helpers/determineErrorIfAny';
import './css/Signup.css'


const mapStateToProps = (state) => {
    return({
        user: state.user
    })
}

const mapDispatchToProps = (dispatch) => {
    return({

        submitSignUp: (userObj) => {
            if (userObj.email_input.includes("@") && userObj.email_input.includes(".")){
                dispatch({type: 'LOAD_LOGIN'})
                dispatch(signUpAction(userObj))
            }
            else{ 
                dispatch({type: 'FAILURE', payload: "Please Enter a Valid Email"})
            }
        },

        failedSignUp: (msg) => {
            return dispatch({type: 'FAILURE', payload: msg})
        }

    })
}

class Signup extends Component{
    constructor(){
        super()
        this.state = {
            username_input: null,
            email_input: null,
            password_input: null,
            check_password: null,
        }
    }

    // TRACKS USER INPUT IN ANY AND ALL FIELDS
    handleChange = (type, event) => {
        this.setState({
            ...this.state, 
            [type]: event.target.value
        })
    }

    // HANDLES THE SUIBMISSIONNOF THE USER SIGN UP FORM
    submitUser = (event, state) => {
        event.preventDefault()
        if (state.username_input == null || state.email_input == null || state.password_input == null || state.check_password == null ||
            state.username_input == "" || state.email_input == "" || state.password_input == "" || state.check_password == ""){
            this.props.failedSignUp("Please fill in all fields!")
        }
        else if (!state.email_input.includes(".com")){
            this.props.failedSignUp("Please Enter a Valid Email!")
        }
        else if (state.password_input != state.check_password){
            this.props.failedSignUp("Please make sure both password fields match!")
        }
        else{
            this.props.submitSignUp(state)
        }
    }

    

    render(){
        return(
            <div className="SignUp_Contents_Container">
                <div className="Signup_Fail">
                    <p className="Signup_error_msg">{determineErrorIfAny(this.props.user)}</p>
                </div>
                <p>Enter a Username: <input type="text" onChange={(event) => this.handleChange("username_input", event)} /></p>
                <p>Enter your Email: <input type="text" onChange={(event) => this.handleChange("email_input", event)} /></p>
                <p>Enter a Password: <input type="text" onChange={(event) => this.handleChange("password_input", event)} /></p>
                <p>Confirm Your Password: <input type="text" onChange={(event) => this.handleChange("check_password", event)} /></p>
                <button id="create_user" onClick={(event) => this.submitUser(event, this.state)}>Create Account</button>
            </div>
        )
    }


}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Signup)