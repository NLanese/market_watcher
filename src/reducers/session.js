export default function manageSession(
    state= 
        {
            loading: false

     }, action){
        switch(action.type){

            case('LOAD_SESSION'):
                return({
                    ...state, loading: true
                })

            case('COMPLETE_SESSION_FETCH'):
                return({
                    ...state, loading: false
                })

            case('USER_LOGIN'):
            case('USER_SIGNUP'):
                return({
                    ...state, loading: false
                })
            
            default:
                return({...state})
        }

}