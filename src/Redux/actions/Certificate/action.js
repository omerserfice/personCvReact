import {apiURL} from '../../config';
import axios from 'axios';

const getCertificate = () => dispatch =>{
     
    axios.get(`${apiURL}/Certificate/GetCertificateList`)
    .then((response)=>{
        dispatch({
            type:"GET_CERTIFICATE",
            allData:response.data
        })
    }).catch((err)=>{
        console.log(err);
    })
}

export default getCertificate