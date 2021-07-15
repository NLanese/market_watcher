import './App.css';
import React, {Component} from 'react';
import LoadingContainer from './components/containers/LoadingContainer';
import MasterMenu from './components/containers/MasterMenu'
import LoginOrSignUp from './components/containers/LoginOrSignUp'
import { connect } from 'react-redux';
import DOMAIN from './constants/domain';


const mapStateToProps = (state) => {
  return({
    user: state.user,
    session: state.session
  })
}

const mapDispatchToProps = (dispatch) => {
  return({
    getSession: (dispatch, session_json) => {
      if (session_json == "No current user"){
        dispatch({type: 'COMPLETE_SESSION_FETCH'})
      }
      else{
        dispatch({type: 'USER_LOGIN', payload: session_json})
      }
    }
  })
}

class App extends Component{

  componentDidUpdate(){
    debugger
    dispatchEvent({type: 'LOAD_SESSION'})
    fetch(DOMAIN + 'logged_in')
      .then(resp => resp.json())
      .then(json => this.props.getSession(json))
  }

login_or_app_or_loading = (props) => {
  if (props.user.loading == true || props.session.loading == true){
    <div className="Loading_Window">
      <LoadingContainer />
    </div>
  }
  else if (props.user.isLoggedIn == true){
    return(
      <div className="Master_Menu_Widnow">
        <MasterMenu />
      </div>
    )
  }
  else{
    return(
      <div className="Login_or_SignUp_Window">
        <LoginOrSignUp />
      </div>
    )
  }
}

render(){
  return(
    <div className="App_Widnow">
      {this.login_or_app_or_loading(this.props)}
    </div>
  )
}

}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)