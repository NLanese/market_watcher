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
            case('LOAD_LOGIN'):
                return ({
                    ...state, loaidng: true
                })

            case('FAILURE'):
                return ({
                    ...state, failed_attempt: {failed: true, reason: action.payload}
                })
                
            case('USER_LOGIN'):
                return({
                    ...state, failed_attempt: {failed: false, reason: null}, isLoggedIn: true
                })
            default:
                return ({
                    ...state
                })
            
            
        }


}