import { apiURL } from "../../config";
import axios from "axios";

const getExperience = () => dispatch =>{
  axios.get(`${apiURL}/Experience/GetExperienceList`)
  .then((response)=>{
      dispatch({
          type:"GET_EXPERIENCE",
          allData:response.data,
      })
  }).catch((err)=>{
      console.log(err);
  })
};

export default getExperience;
