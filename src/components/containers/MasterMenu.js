import {
    BrowserRouter as Router,
    Route
  }
from 'react-router-dom';
import React, {Component} from 'react';
import { connect } from 'react-redux';
import MasterMenuNavBar from './MasterMenuNavBar';
import StockLookupMenu from './StockLookupMenu'
import SetTargetsMenu from './SetTargetsMenu'
import SettingsMenu from './SettingsMenu'
import YourListMenu from './YourListMenu'

const mapDispatchToProps = (dispatch) => {

}

const mapStateToProps = (state) => {

}

class MasterMenu extends Component{

    render(){
        return(
            <Router>
            <div>
                <MasterMenuNavBar />
                <Route exact path="/" component={YourListMenu}/>
                <Route exact path="/StockLookup" component={StockLookupMenu}/>
                <Route exact path="/SetTargets" component={SetTargetsMenu}/>
                <Route exact path="/Settings" component={SettingsMenu}/>
            </div>
            </Router>
        )
    }

}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MasterMenu)
