import React, {Component} from 'react';
import { connect } from 'react-redux';
import StockSearchBar from '../functional/StockSearchBar'
import stockRenderMachine from '../../dispatch_actions/stockRenderMachine'

const mapStateToProps = (state) => {
    return({
        lookUp: state.stock_lookup
    })
}

const mapDispatchToProps = (dispatch) => {
    return({
        submitSearch: (lookup) => {
            dispatch({type: "LOAD_STOCK_FETCH"}) // Construct this
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
    handleSubmit = (event) => {
        event.preventDefault()
        const lookup = event.target.value
        this.props.submitSearch(lookup)
    }
    render(){
        return(
            <div className="StockLookupMenu_Content_Container">
                <div className="StockSearchBar_Window">
                    <StockSearchBar handleSubmit={() => this.handleSubmit} />
                </div>
            </div>
        )
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(StockLookupMenu)