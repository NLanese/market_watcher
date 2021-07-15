import { useParams } from "react-router-dom"
import DOMAIN from "../constants/domain"

export default function signUpAction(userObj){
    let login_destination = DOMAIN() + "users/new"
    let user = null
    let login_object = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            username: userObj.username_input,
            password: userObj.password_input,
            email: userObj.email_input
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
                return({type: 'USER_SIGNUP', payload: user})
            }
        })
}
