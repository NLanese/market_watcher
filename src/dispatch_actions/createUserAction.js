import DOMAIN from "../constants/domain"

export default function signUpAction(userObj){
    let login_destination = DOMAIN() + "users/new"
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
    fetch(login_destination, login_object)
        .then(resp => resp.json())
        .then(json => console.log(json))

}
