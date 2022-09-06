import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProjectDetail } from '../Redux/actions/Project/action'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import p1 from '../Assets/img/img1.jpg';
import '../Assets/css/Project.css'
import CustomBreadcrumb from '../Component/CustomBreadcrumb/CustomBreadcrumb';
import { apiURL } from '../Redux/config';

const ProjectDetail = () => {

    const tags=[
        {
            page: "Projeler",
            href : `/project`
        },
        {
            page: "ProjeDetayı",
        },
    
    ]

    const { id } = useParams();

    const dispatch = useDispatch();
    const projectDetail = useSelector(state => state.projectReducers.projectDetail);

    useEffect(() => {
        dispatch(getProjectDetail(id))

    }, []);

   

    return (
        <>
        
            <div className='project-detail container'>
                <div className='row'>
                <CustomBreadcrumb  tagslength={tags.length} tags={tags}></CustomBreadcrumb><br /><br />
                    <h5 className='project-detail-title'>
                     Proje Ayrıntıları
                    </h5>
                    <hr></hr>
                
                    <div className="col-md-4">
                        <img src={`${apiURL}/ProjectCoverImage/${id}`} className="card-img-top" alt="..."></img>
                    </div>
                   
                </div><br />
                <div className='row'>
                <div className='col-md-8'>
                        <h4 className='title'><u className='text-danger'>Proje Adı</u> : {projectDetail.projectName}</h4>
                        <p className='detail'>{projectDetail.projectDetail}</p>
                    </div> 
                </div>
                <br /><br /><br /><br />
            </div>
        </>
    )

};

export default ProjectDetail;
