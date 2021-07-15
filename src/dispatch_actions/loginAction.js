import DOMAIN from "../constants/domain"

export default function loginAction(state){
    let user = null
    let login_destination = DOMAIN + '/login'
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
    return fetch(login_destination, login_object)
        .then(resp => resp.json())
        .then(json => user = json)
        .then(user => {
            if (user.includes("FAIL")){
                return ({type: 'FAILURE', payload: user})
            }
            else{
                return({type: 'USER_LOGIN', payload: user})
            }
        })
}