import React, {Component} from 'react';
import './css/StockSearchBar.css'

class StockSearchBar extends Component{
    constructor(){
        super()
        this.state={
            inputBar: "Name or TICKER"
        }
    }
    handleChange = (event) => {
        this.setState({
            ...this.state, inputBar: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        console.log("Submit button has been clicked and registered")
        const lookup = event.target.value
        this.props.submitSearch(lookup)
    }


    render(){
        return(
            <div className="SeachBar_Content_Container">
                <p className="searchPropmpt_and_SearchBar">
                    Enter a Name or Ticker: 
                    <input type="text"  onChange={(event) => this.handleChange(event)}/>
                    <button onClick={(event) => this.handleSubmit(event)}>Search</button>
                </p>
            </div>
        )
    }
}


export default StockSearchBar