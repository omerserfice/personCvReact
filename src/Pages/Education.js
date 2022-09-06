import React, { useState, useEffect } from 'react';
import getEducation from '../Redux/actions/Education/action';
import { useDispatch, useSelector } from 'react-redux';
import '../Assets/css/Education.css'
import CustomBreadcrumb from '../Component/CustomBreadcrumb/CustomBreadcrumb';
const Education = () => {
    
   const tags=[
      {
          page: "Anasayfa",
          href : `/`
      },
      {
          page: "Eğitimler",
      },
  
  ]
   const dispatch = useDispatch();
   const educationData = useSelector(state => state.educationReducers.educationData);

   useEffect(() => {
      dispatch(getEducation())
   }, []);


   console.log("edu:", educationData);

   return (
      <>

         <section class="experience pt-100 pb-100" id="experience">
            <div class="container">
               <div class="row">
               <CustomBreadcrumb  tagslength={tags.length} tags={tags}></CustomBreadcrumb>
                 <hr />
                  <div class="col-xl-8 mx-auto text-center">
                     <div class="section-title">
                    
                        <h4>Eğitimlerim</h4>
                        <p><i>Asla yanlış yapmamış insan, yeni hiç birşey denememiştir.</i></p>
                        <p>Albert Einstein</p>
                      
                     </div>
                  </div>
               </div>
               <div class="container">

                  <div class="row">
                     <div class="col-lg-12 col-md-12">
                        <div class="main-timeline3">
                           {
                              educationData.map((item, key) => {
                                  
                                 // const dateStart = item.startTime.split("-");
                                 const dateEnd = item.endTime.split("-");
                                

                                 return (
                                    <>
                                       <div class="timeline">
                                          <a href="#" class="timeline-content">
                                             <span class="year">{dateEnd[0]}</span>
                                             <h3 class="title">{item.schoolName}</h3>
                                             <h6 className='departmen'>{item.departmen}</h6>
                                             <p class="description col-lg-6 w-100">
                                               {item.educationDetail.substring(0,49)} <br></br>
                                               {item.educationDetail.substring(49,99)} <br></br>
                                               {item.educationDetail.substring(99,149)} <br></br>
                                               {item.educationDetail.substring(149,199)} <br></br>
                                             </p>
                                          </a>
                                       </div>
                                    </>
                                 )
                              })
                           }

                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default Education;
