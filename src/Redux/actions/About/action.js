import {apiURL} from '../../config';
import axios from 'axios';

const getAbout = () => dispatch => {
    
    axios.get(`${apiURL}/About/GetAboutList`)
    .then((response)=>{
       dispatch({
        type:"GET_ABOUT",
        allData : response.data,
       })
    }).catch((err)=>{
       console.log(err);
    });
};

export default getAbout