import './App.css';
import React, {Component} from 'react';
import LoadingContainer from './components/containers/LoadingContainer';
import MasterMenu from './components/containers/MasterMenu'
import LoginOrSignUp from './components/containers/LoginOrSignUp'
import AppSessionFetcher from './fetchers/AppSessionFetcher';
import { connect } from 'react-redux';


const mapStateToProps = (state) => {
  return({
    user: state.user,
    session: state.session
  })
}

const mapDispatchToProps = (dispatch) => {
  return({

    getSession: () => {
      dispatch({type: 'LOAD_SESSION'})
      console.log('After LOAD_SESSION')
      dispatch(AppSessionFetcher())
    }

  })
}

class App extends Component{

componentDidMount = () => {
  this.props.getSession()
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