import axios from "axios";
import { apiURL } from "../../config";

const getProject = () => dispatch => {
      axios.get(`${apiURL}/Project/GetProjectDto`)
      .then((response)=>{
          dispatch({
              type:"GET_PROJECT",
              allData:response.data,
          })
      }).catch((err)=>{
          console.log(err);
      })
}

const getProjectDetail = (id) => dispatch => {
    axios.get(`${apiURL}/Project/GetProjectById/${id}`)
    .then((response)=>{
        dispatch({
            type:"GET_PROJECT_BY_ID",
            allData:response.data.message,
        })
    }).catch((err)=>{
        console.log(err);
    })
}

export{getProjectDetail,getProject} 