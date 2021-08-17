import {
    BrowserRouter as Router,
    Route
  }
from 'react-router-dom';
import React, {Component} from 'react';
import { connect } from 'react-redux';
import MasterMenuNavBar from './MasterMenuNavBar';
import StockLookupMenu from './StockLookupMenu'
import SettingsMenu from './SettingsMenu'
import YourListMenu from './YourListMenu'
import InfoMenu from '../functional/InfoMenu';

const mapDispatchToProps = (dispatch) => {

}

const mapStateToProps = (state) => {

}

class MasterMenu extends Component{

    render(){
        return(
            <div className="MasterMenu_Content_Container">
                <Router>
                <div>
                    <MasterMenuNavBar />
                    <Route exact path="/" component={InfoMenu}/>
                    <Route exact path="/YourList" component={YourListMenu} />
                    <Route exact path="/StockLookup" component={StockLookupMenu}/>
                    <Route exact path="/Settings" component={SettingsMenu}/>
                </div>
                </Router>
            </div>
        )
    }

}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MasterMenu)
