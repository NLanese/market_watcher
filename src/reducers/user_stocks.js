export default function manageUserStocks(
    state= 
        {
           your_stock_ids: [null]
     }, action){
            switch (action.type){

            // {type: "USER_LOGIN", payload: <userObj from Rails Server>}
            // userObj will look like this...
            //              _____________________________________________________________________________
            //              | user:                                                                     |
            //              |  {username: <input>, password_digest: <hidden>}                           |
            //              | stocks:                                                                   |
            //              |  [ <array of ints> ]                                                      |
            //              |___________________________________________________________________________| 
                case('USER_SIGNUP'):
                case('USER_LOGIN'):
                    return({
                        ...state, your_stock_ids: action.payload.stocks
                    })

                default:
                    return({
                        ...state
                    })
            }     

}