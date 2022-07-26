import axios from "axios";
import { apiURL } from "../../config";

const getContact = () => dispatch => {
     
    axios.get(`${apiURL}/Contact/GetContactList`)
    .then((response)=>{
        dispatch({
            type:"GET_CONTACT",
            allData:response.data,
        })
    }).catch((err)=>{
        console.log(err);
    });
};

export default getContact