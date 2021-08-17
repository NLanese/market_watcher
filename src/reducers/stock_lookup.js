export default function manageStockLookup(
    state= 
        {
            searchInput: null,          // This is changed when the searchBar is submitted. It will be used to determine where we scrape, using this as a body porperty of a fetch object
            stocks_favorited: [null],   // This will flag a stock as favorited, triggering a reaction that will remove it from the lookup list and add it to our FavoritesList in the STOCKS reducer
            stocks_found: [null],       // This will hold an array of all the fetched stocks found. Each different found stock will make an object that will then render a stock component
            loading: false

     }, action){
        switch(action.case){

            // {type: 'LOAD_STOCK_LOOKUP'}
            case('LOAD_STOCK_FETCH'):
                return ({...state, loading: true})


            // {type: 'COMPLETE_STOCK_LOOKUP', payload: }
            case('COMPLETE_STOCK_LOOKUP'):
                return({...state, loading: false, stocks_found: action.payload})


            default:
                return({...state, loading: false})
        }
}