import DOMAIN from "../constants/domain"

export default function stockRenderMachine(lookup){
    fetch(DOMAIN+`find/${lookup}`) // This will use the user inout as the :id in a route which will be processed by the fetch helper in Rails
    return

}