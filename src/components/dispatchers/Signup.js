import React, {Component} from 'react';
import signUpAction from '../../dispatch_actions/createUserAction';
import { connect } from 'react-redux';

const mapDispatchToProps = (dispatch) => {
    return({

        submitSignUp: (userObj) => {
            dispatch({type: 'LOAD_LOGIN'})
            dispatch(signUpAction(userObj))
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

    handleChange = (type, event) => {
        this.setState({
            ...this.state, 
            [type]: event.target.value
        })
    }

    render(){
        return(
            <div className="SignUp_Contents_Container">
                <p>Enter a Username: <input type="text" onChange={(event) => this.handleChange("username_input", event)} /></p>
                <p>Enter your Email: <input type="text" onChange={(event) => this.handleChange("email_input", event)} /></p>
                <p>Enter a Password: <input type="text" onChange={(event) => this.handleChange("password_input", event)} /></p>
                <p>Confirm Your Password: <input type="text" onChange={(event) => this.handleChange("check_password", event)} /></p>
                <button id="create_user">Create Account</button>
            </div>
        )
    }


}
export default connect(
    null,
    mapDispatchToProps
)(Signup)