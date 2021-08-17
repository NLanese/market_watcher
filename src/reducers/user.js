export default function manageUser(
    state= 
        {
            failed_attempt: {failed: false, reason: null},     // if a login attemot fails, this will be used to prompt a message
            isLoggedIn: false,  // determine whether these is a current user
            loading: false,     // true if fetching user from a login or signup
            name: null,         // user's name
            email: null,        // Kind of obvious
            gen_code: null,     // Exists only as a code emailed to a user upon sign up. Expires in 90 seconds
            targets: [null],    // stocks that user has targetted. Will be represented as an object array

     }, action){
        switch(action.type){


            // {type: LOAD_LOGIN}
            case('LOAD_LOGIN'):
                return ({
                    ...state, loaidng: true
                })

            // {type: "FAILURE", payload: <string> }
            case('FAILURE'):
                console.log("Inside of FAILURE case, the message is " + action.payload)
                return ({
                    ...state, failed_attempt: {failed: true, reason: action.payload}
                })
                
            // {type: "USER_LOGIN", payload: <userObj from Rails Server>}
            // userObj will look like this...
            //             
            //              _____________________________________________________________________________
            //              | user:                                                                     |
            //              |  {username: <input>, password_digest: <hidden>}                           |
            //              | stocks:                                                                   |
            //              |  [ <array of ints> ]                                                      |
            //              |___________________________________________________________________________|     
            //
            // 
            case('USER_SIGNUP'):
            case('USER_LOGIN'):
                console.log("Inside User Reducer, LOGIN Case. Payload below")
                console.log(action.payload)
                return({
                    ...state, failed_attempt: {failed: false, reason: null}, isLoggedIn: true, loading: false, name: action.payload.user.username, stocks: action.payload.stocks
                })
            default:
                return ({
                    ...state
                })
            
            
        }


}