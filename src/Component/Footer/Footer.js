import React, { useEffect, useState } from 'react';
import './Footer.css'
import { Twitter, Linkedin, Instagram, GitHub, Target } from 'react-feather';
import getContact from '../../Redux/actions/Contact/action';
import { useDispatch, useSelector } from 'react-redux';
const Footer = () => {
  const dispatch = useDispatch();
  const contactData = useSelector(state => state.contactReducers.contactData);

  useEffect(() => {
    dispatch(getContact())

  }, []);

  console.log("contact:", contactData);
  return (
    <>
      <div className='footer'>
        <div className=''>
          <div className='row mt-4'>
            <div className='list-desc col-md-4 text-center mt-4'>
              <ul>
                {/* <h5>Günün Sözü</h5> */}
                <p className='text-start'>
                  Eğer fikrinizi yazıya dökemiyorsanız, onu kodlayamazsınız.<br />
                  <i style={{ fontSize: 10 }}>Peter Halpern</i>
                </p>
                <div className='signature'>Ömer Serfice</div>
              </ul>
            </div>
            {
              contactData.map((item, key) => {
                return (
                  <>
                    <div className='list-social col-md-4 text-center mt-4'>
                      <ul>
                        <h5>Sosyal Medya</h5>
                        <div className='d-flex flex-row p-4 justify-content-center'>
                          <li style={{ padding: 10 }}><a href={`${item.linkedIn}`} target="_blank"><Linkedin size={20} /></a></li>
                          <li style={{ padding: 10 }}><a href={`${item.twitter}`} target="_blank"><Twitter size={20} /></a></li>
                          <li style={{ padding: 10 }}><a href={`${item.github}`} target="_blank"><GitHub size={20} /></a></li>
                          <li style={{ padding: 10 }}><a href={`${item.instagram}`} target="_blank"><Instagram size={20} /></a></li>
                        </div>

                      </ul>
                    </div>
                  </>
                )
              })
            }


            <div className='list-contact col-md-4 text-center mt-4'>

              <ul>
                <h5>İletişim</h5>
                <li><a href='/about'>Ben Kimim?</a></li>
                <li><a href="/project">Projeler</a></li>
                <li><a href='/sss'>SSS</a></li>
                <li><a href='/contact'>İletişim</a></li>
              </ul>
            </div>
          </div>


        </div>
        <hr></hr>
        <div className='row'>
          <p className='footer-text'>Tüm Hakları Sakları Saklıdır. 2022 © | Ömer Serfice</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
