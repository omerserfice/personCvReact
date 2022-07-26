import axios from "axios";
import { apiURL } from "../../config";

const getAbility = () => dispatch => {
     
    axios.get(`${apiURL}/Ability/GetAbilityList`)
    .then((response)=>{
        dispatch({
            type:"GET_ABILITY",
            allData:response.data,
        })
    }).catch((err)=>{
        console.log(err);
    });
};

export default getAbility