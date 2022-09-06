import React, { useState, useEffect } from 'react';
import '../Assets/css/About.css'
import image from '../Assets/img/p.jpg'
import banner from '../Assets/img/banner.gif'
import { useDispatch, useSelector } from 'react-redux';
import  getAbout  from '../Redux/actions/About/action';

const About = () => {

  const dispatch = useDispatch()
  const aboutData = useSelector(state => state.aboutReducers.aboutData)




  useEffect(() => {

    dispatch(getAbout())

  }, [])



  return (
    <>


      <div className='banner'>
        <img className='w-100 img-fluid' src={banner}></img>
      </div>
      <div className='container'>
        <div className='about mt-4'>
          <h5>Ben Kimim?</h5>
          <br />
        </div>
        <div className='row'>
          <div className='col-lg-3 col-md-4 col-sm-6 col-xs-12'>
            <img className='w-100 img-fluid img-thumbnail' src={image}></img>
          </div>
          <div className='about col-lg-9 col-md-8 col-sm-6 col-xs-12'>
            {
              aboutData.map((item, index) => {
                return (
                  <>
                    <h5 key={index} className='text-center mt-4'>{item.aboutTitle}</h5>
                    <hr/>
                    <h6><b>{item.personName} {item.personSurname}</b></h6>
                    <p>
                      {item.aboutDetail} 
                    </p>
                  </>
                )
              })
            }


          </div>
        </div>

      </div>

    </>
  )
};



export default About;
