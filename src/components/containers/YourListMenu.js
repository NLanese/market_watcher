import React, {Component} from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return({
        user: state.user,
        session: state.session
    })
}

const mapDispatchToProps = () => {

}

class YourListMenu extends Component{


    render(){
        return(
            <div className="YourListMenu_Contents_Container">
                
            </div>
        )
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(YourListMenu)