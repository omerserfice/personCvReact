import React, { useState, useEffect } from 'react';
import '../Assets/css/Experience.css'
import getExperience from '../Redux/actions/Experience/action';
import { useDispatch, useSelector } from 'react-redux';
import CustomBreadcrumb from '../Component/CustomBreadcrumb/CustomBreadcrumb';
const Experience = () => {
    const tags=[
        {
            page: "Anasayfa",
            href : `/`
        },
        {
            page: "Deneyimler",
        },
    
    ]
    const [exLength, setexLength] = useState(0);
    const dispatch = useDispatch()
    const experienceData = useSelector(state => state.experienceReducers.experienceData)

    useEffect(() => {
        dispatch(getExperience())
    }, []);


    return (
        <>
            <div class="experience container">
            <CustomBreadcrumb  tagslength={tags.length} tags={tags}></CustomBreadcrumb>
            <hr />
                <h5>Deneyimlerim</h5>
            
                <div class="row">
                    <div class="col-md-12">
                        <div class="main-timeline">
                            {
                                experienceData.map((item, key) => {
                                  
                                 const date_ = item.startDateOfWork.toString().split("-")[0];
                                 console.log(date_)
                                    return (
                                        <>
                                            <div key={key} class="timeline">
                                                <div href="#" class="timeline-content">
                                                    <span class="timeline-year">{date_}</span>
                                                    <h3 class="title">{item.companyName}</h3>
                                                    <h4 className='title-dep'>{item.departman}</h4>
                                                    <p class="description">
                                                      {item.workDetail.substring(0,39)}<br></br>
                                                      {item.workDetail.substring(39,78)}<br></br>
                                                      {item.workDetail.substring(78,117)}<br></br>
                                                      {item.workDetail.substring(117,156)}<br></br>
                                                      {item.workDetail.substring(156,195)}<br></br>
                                                    
                                                    </p>
                                                </div>
                                            </div>
                                        </>
                                    )
                                })
                            }

                            {/* <div class="timeline">
                    <div href="#" class="timeline-content">
                        <span class="timeline-year">2017</span>
                        <h3 class="title">Web Development</h3>
                        <p class="description">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer malesuada tellus lorem, et condimentum neque commodo
                        </p>
                    </div>
                </div>
                <div class="timeline">
                    <div href="#" class="timeline-content">
                        <span class="timeline-year">2017</span>
                        <h3 class="title">Web Development</h3>
                        <p class="description">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer malesuada tellus lorem, et condimentum neque commodo
                        </p>
                    </div>
                </div>
                <div class="timeline">
                    <div href="#" class="timeline-content">
                        <span class="timeline-year">2017</span>
                        <h3 class="title">Web Development</h3>
                        <p class="description">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer malesuada tellus lorem, et condimentum neque commodo
                        </p>
                    </div>
                </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Experience;
