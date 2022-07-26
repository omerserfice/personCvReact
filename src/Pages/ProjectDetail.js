import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProjectDetail } from '../Redux/actions/Project/action'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import p1 from '../Assets/img/109666.jpg';
import '../Assets/css/Project.css'
const ProjectDetail = () => {

    const { id } = useParams();

    const dispatch = useDispatch();
    const projectDetail = useSelector(state => state.projectReducers.projectDetail);

    useEffect(() => {
        dispatch(getProjectDetail(id))

    }, []);

    console.log("projectDetail", projectDetail);


    return (
        <>
            <div className='project-detail container'>
                <div className='row'>
                    <h5 className='project-detail-title'>
                     Proje Ayrıntıları
                    </h5>
                    <hr></hr>
                
                    <div className="col-md-4">
                        <img src={p1} className="card-img-top" alt="..."></img>
                    </div>
                    <div className='col-md-8'>
                        <h4 className='title'><u className='text-danger'>Proje Adı</u> : {projectDetail.projectName}</h4>
                        <p className='detail'>{projectDetail.projectDetail}</p>
                    </div>
                </div>
            </div>
        </>
    )

};

export default ProjectDetail;
