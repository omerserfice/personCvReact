import axios from "axios";
import { apiURL } from "../../Redux/config";

const ProjectService = (id) => {
      
     axios.get(`${apiURL}/Project/GetProjectById/${id}`);

} 

export default ProjectService;