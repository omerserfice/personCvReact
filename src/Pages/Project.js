import React, { useEffect } from 'react';
import '../Assets/css/Project.css'
import p1 from '../Assets/img/109666.jpg';
import { useDispatch, useSelector } from 'react-redux';
import {getProject} from '../Redux/actions/Project/action'
import { GitHub } from 'react-feather';
const Project = () => {

  const dispatch = useDispatch();
  const projectData = useSelector(state => state.projectReducers.projectData);

  useEffect(() => {
    dispatch(getProject())
  }, []);

  console.log("project", projectData);

  return (
    <>
      <div className='project container'>
        <h5>Projelerim</h5>
        <hr />
        <p>Akademik öğrenim boyunca ve halen devam etmekte olan projelerim</p>
        <div className='row'>
          {
            projectData.map((item, key) => {
              return (
                <>
                  <div className='col-lg-3 col-md-6 col-sm-6 col-xs-12 mt-4'>
                    <div className="card">
                     <a href={`projectDetail/${item.id}`}> <img src={p1} className="card-img-top" alt="..."></img></a>
                      <div className="card-body">
                        <a href={`projectDetail/${item.id}`}><h5 className="card-title">{item.projectName}</h5></a>
                        <a href={`projectDetail/${item.id}`}><p className="card-text">{item.projectDetail.substring(0,45)}... <a href={`projectDetail/${item.id}`}><i>Devamını Gör</i></a></p></a> 
                         
                        <hr/>
                        <a href={`${item.projectGithubLink}`}><GitHub size={20}/></a>
                      </div>
                    </div>
                  </div>
                </>
              )
            })
          }

          {/* <div className='col-md-3 mt-4'>
            <div className="card">
              <img src={p1} className="card-img-top" alt="..."></img>
              <div className="card-body">
                <h5 className="card-title">Proje Adı</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div>
          <div className='col-md-3 mt-4'>
            <div className="card">
              <img src={p1} className="card-img-top" alt="..."></img>
              <div className="card-body">
                <h5 className="card-title">Proje Adı</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div>
          <div className='col-md-3 mt-4'>
            
            <div className="card">
              <img src={p1} className="card-img-top" alt="..."></img>
              <div className="card-body">
                <h5 className="card-title">Proje Adı</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
           
          </div>
          <div className='col-md-3 mt-4'>
            <div className="card">
              <img src={p1} className="card-img-top" alt="..."></img>
              <div className="card-body">
                <h5 className="card-title">Proje Adı</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div>
          <div className='col-md-3 mt-4'>
            <div className="card">
              <img src={p1} className="card-img-top" alt="..."></img>
              <div className="card-body">
                <h5 className="card-title">Proje Adı</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div> */}
        </div>
      </div>

    </>
  );
};

export default Project;
