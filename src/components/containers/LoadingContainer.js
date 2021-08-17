import React, {Component} from 'react';
import { connect } from 'react-redux';
import LoadingLogin from '../loading_screens/LoadingLogin';
import LoadingSession from '../loading_screens/LoadingSession';
import LoadingLookup from '../loading_screens/LoadingLookup'

const mapStateToProps = (state) => {
    return({
        user: state.user,
        session: state.session,
        stocks: state.user_stocks,
        lookup: state.stock_lookup
    })
}

class LoadingContainer extends Component{

    determineLoader = (props) => {
        if (props.session.loading == true){
            <div className="User_Fetch_Widnow">
                <LoadingSession />
            </div>
        }        
        else if (props.user.loading == true){
            <div className="User_Fetch_Widnow">
                <LoadingLogin />
            </div>
        }
        else if (props.lookup.loading){
            <div className="User_Fetch_Widnow">
                <LoadingLookup />
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