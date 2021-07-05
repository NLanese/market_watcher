import './App.css';
import React, {Component} from 'react';
import LoadingContainer from './components/containers/LoadingContainer';
import MasterMenu from './components/containers/MasterMenu'
import LoginOrSignUp from './components/containers/LoginOrSignUp'
import { connect } from 'react-redux';


const mapStateToProps = (state) => {
  return({
    user: state.user
  })
}

class App extends Component{

login_or_app_or_loading = (props) => {
  if (props.user.loading == true){
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
  mapStateToProps
)(App)