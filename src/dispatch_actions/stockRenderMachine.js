import DOMAIN from "../constants/domain"

export default function stockRenderMachine(lookup){
    console.log("Inside the submit Dispatch action. This has now enetered the StockRenderMachine helper")
    return (dispatch) => {
        fetch(DOMAIN+`stocks/${lookup}`) // This will use the user inout as the :id in a route which will be processed by the fetch helper in Rails
        .then(resp => resp.json())
        .then(json => {
            console.log("Inside the stock fetch for submission of a search") // Log to let developers know this has been successfully hit
            dispatch({type: "COMPLETE_STOCK_LOOKUP", payload: json})
        })
    }
}