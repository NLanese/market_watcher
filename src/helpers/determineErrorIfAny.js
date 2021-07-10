export default function determineErrorIfAny(userState){
    if (userState.failed_attempt.failed == true){
        return userState.failed_attempt.reason
    }
    else{
        return ""
    }
}