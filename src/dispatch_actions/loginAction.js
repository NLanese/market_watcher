import DOMAIN from "../constants/domain"

export default function loginAction(state){
    let user = null
    let login_destination = DOMAIN() + 'login'
    console.log("Before the fetch, the request is... POST " + login_destination)
    let login_object = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            username: state.username_input,
            password: state.password_input
        })
    }
    return (dispatch) => {
        fetch(login_destination, login_object)
        .then(resp => resp.json())
        .then(json => user = json)
        .then(user => {
            console.log("Inside the LoginAction.js file. In final .then() block once a user model has been fetched")
            console.log(user)
            let userObj = {user: user.user, stocks: user.user_stocks}
            console.log(userObj)
            if (typeof(user) != "string"){ 
                dispatch({type: 'USER_LOGIN', payload: userObj})
            }
            else{
                dispatch({type: 'FAILURE'})
            }
        })
    }
}