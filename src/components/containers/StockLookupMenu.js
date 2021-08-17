import React, {Component} from 'react';
import { connect } from 'react-redux';
import StockSearchBar from '../inputs/StockSearchBar';
import stockRenderMachine from '../../dispatch_actions/stockRenderMachine'
import './css/StockLookupMenu.css'

const mapStateToProps = (state) => {
    return({
        lookUp: state.stock_lookup
    })
}

const mapDispatchToProps = (dispatch) => {
    return({
        submitSearch: (lookup) => {
            dispatch({type: "LOAD_STOCK_FETCH"}) // Construct this
            //const testStockRender = stockRenderMachine(lookup)
            //console.log("Right before concluding dispatch for submission" + testStockRender)
            dispatch(stockRenderMachine(lookup)) // Construct a reducer action.type case that will add fecthed stock objects 
              
        }
    })
}

class StockLookupMenu extends Component{
    constructor(){
        super()
        this.state={
            searchInput: null
        }
    }
    renderSearch = (state) => {
        if (state.searchInput == null){
            return(
                <div className="SearchResult" id="None">
                    <p id="NoResult">A synopsis on a Stock or Crpto will appear here once you search something</p>
                </div>
            )
        }
        else{
                return(
                    <div className="SearchResult" id="Found">
                        
                    </div>
                )
        }
    }
    render(){
        return(
            <div className="StockLookupMenu_Content_Container">
                <div className="StockSearchBar_Window">
                    <StockSearchBar submitSearch={this.props.submitSearch}/>
                </div>
                <div className="searchResults" >
                    {this.renderSearch(this.state)}
                </div>
            </div>
        )
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(StockLookupMenu)