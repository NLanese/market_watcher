import DOMAIN from "../constants/domain"

export default function AppSessionFetcher(){
    const target = DOMAIN() + "logged_in"
    return (dispatch) => {
        console.log("Right before fetch inside AppSessionFetcher.js")
        console.log("Sending a GET request to " + target)
        fetch(target)
        .then(resp => {
            console.log("Inside first .then block")
            return resp.text()
        })
        .then(text => {
            console.log(text)
            if (text.includes("No current user")){
                dispatch({type: 'COMPLETE_SESSION_FETCH'})
            }
            else{
                dispatch({type: 'USER_LOGIN', paylaod: text})
            }
        })
    }
}