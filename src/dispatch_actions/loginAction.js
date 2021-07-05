import DOMAIN from "../constants/domain"

export default function loginAction(state){
    let login_destination = DOMAIN() + "login"
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
    fetch(login_destination, login_object)
        .then(resp => resp.json())
        .then(json => console.log(json))

}