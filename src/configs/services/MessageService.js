import axios from "axios";
import { apiURL } from "../../Redux/config";

const addMessage = (data) => {
 
    return axios.post(`${apiURL}/Message/AddMessage`,data);
}

let MessageService = {
    addMessage,
}

export default MessageService;