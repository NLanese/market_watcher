import React, {Component} from 'react';
import { connect } from 'react-redux';
import LoadingLogin from '../loading_screens/LoadingLogin';

const mapStateToProps = (state) => {
    return({
        user: state.user
    })
}

class LoadingContainer extends Component{

    determineLoader = (props) => {
        if (props.user.loading == true){
            <div className="User_Fetch_Widnow">
                <LoadingLogin />
            </div>
        }


    }
    render(){
        return(
            <div className="LoadingContainer_Contents_Container">
                {this.determineLoader(this.props)}
            </div>
        )
    }

}

export default connect(mapStateToProps)(LoadingContainer)