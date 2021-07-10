import React from 'react';

const StockSearchBar = (props) => {
    return(
        <div className="SeachBar_Content_Container">
            <p className="searchPropmpt_and_SearchBar">
                Enter a Name or Ticker: 
                <input type="text" value="Name or TICKER"/>
                <button onClick={(event) => props.handleSubmit(event)}>Submit</button>
            </p>
        </div>
    )
}

export default StockSearchBar