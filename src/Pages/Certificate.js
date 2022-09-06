import React, { useEffect } from 'react';
import getCertificate from '../Redux/actions/Certificate/action';
import { useDispatch, useSelector } from 'react-redux';
import '../Assets/css/Certificate.css'

import CustomBreadcrumb from '../Component/CustomBreadcrumb/CustomBreadcrumb';
import { apiURL } from '../Redux/config';
const Certificate = () => {
  const tags=[
    {
        page: "Anasayfa",
        href : `/`
    },
    {
        page: "Sertifikalar",
    },
]
  const dispatch = useDispatch();
  const certificateData = useSelector(state => state.certificateReducers.certificateData);
 
  useEffect(() => {

    dispatch(getCertificate())

  }, []);




  return (
    <>
      <div className='container'>

        <div className='title mt-4'>
        <CustomBreadcrumb  tagslength={tags.length} tags={tags}></CustomBreadcrumb><br />
          <h5>Sertifikalarım <span class="badge bg-info">{certificateData.length}</span></h5>
          <hr />
          <p>Çeşitli kurumlardan ve kurslardan almış olduğum sertifikalar</p>
        </div>

      </div>
      <div className='container mt-4'>
        <div class="accordion" id="accordionExample">
          {
            
            certificateData.map((item, key) => {
             const dizi = item.dateOfIssue.split("-");
             
             console.log(dizi[2].split("T")[0]);
              
          
        
              return (
                
                <>
               
                  <div class="accordion-item">
                    <h2 class="accordion-header" id={`heading${item.id}`}>
                      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${item.id}`} aria-expanded="true" aria-controls={`collapse${item.id}`}>
                        {item.certificateName}
                      </button>
                    </h2>
                    <div id={`collapse${item.id}`} class="accordion-collapse collapse show" aria-labelledby={`heading${item.id}`} data-bs-parent="#accordionExample">
                      <div class="accordion-body fixed">
                        <span className='certificateDetail'><b>Veriliş Tarihi:</b> <small><i>{dizi[2].split("T")[0]} {dizi[1]} {dizi[0]}</i></small></span>
                        <p className='certificateDetail'>{item.certificateDetail}</p>
                        {/* <img src={`${apiURL}/ProjectCoverImage/${c}`} className="card-img-top" alt="..."></img>
                       {c+=1} */}
                      </div>
                    </div>
                  </div>
                 
                </>
               
              )
             
            })
            
          }
            
        </div>
      </div>
      <br /><br /> <br /> <br /><br /> <br />
    </>
    
  );
  
};

export default Certificate;
