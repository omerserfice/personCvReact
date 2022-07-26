import axios from 'axios';
import { apiURL } from '../../config';

const getEducation = () => dispatch =>{
    
    axios.get(`${apiURL}/Education/GetListEducation`)
    .then((response)=>{
        dispatch({
            type:"GET_EDUCATION",
            allData:response.data,
        })
    }).catch((err)=>{
        console.log(err);
    })
    

};

export default getEducation;
