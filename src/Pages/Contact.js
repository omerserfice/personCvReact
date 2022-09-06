import React, { useEffect,useState } from 'react';
import '../Assets/css/Contact.css'
import { MapPin, Phone, Linkedin, Mail } from 'react-feather';
import { Button, Form, FormGroup, Input } from 'reactstrap';
import getContact from '../Redux/actions/Contact/action';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content';
import { useForm } from "react-hook-form";
import MessageService from '../configs/services/MessageService';
import { confirm } from '../SweetAlert/SweetAlert';
import CustomBreadcrumb from '../Component/CustomBreadcrumb/CustomBreadcrumb';
const Contact = () => {
  const [refresh, setRefresh] = useState(false);
  const MySwal = withReactContent(Swal)
  const tags=[
    {
        page: "Anasayfa",
        href : `/`
    },
    {
        page: "İletişim",
    },
]
  const dispatch = useDispatch();
  const contactData = useSelector(state => state.contactReducers.contactData);
  

  const { register, handleSubmit, formState: { errors } } = useForm();

  useEffect(() => {
    dispatch(getContact())
    
  }, []);
  

  const onSubmit = (data) => {

    confirm({
      title:"Mesaj Gönderme İşlemi",
      text:"Gönder"
  }, async ()=>{
     
      return MessageService.addMessage(data).then(res=>{
        
          return res;
      })

  }, async ()=>{
    
    window.location.reload();
             
  },async ()=>{
      return null
  });

  }

 


  return (
    <>
      <div className='container'>
        <div className='contact-title'>
        <CustomBreadcrumb  tagslength={tags.length} tags={tags}></CustomBreadcrumb>
        <br />
          <h5>Bize Ulaşın!</h5>
          
          <p>Tüm soru görüş ve önerileriniz için bize mesaj atın...</p>
        </div>
        <div className='row'>
          {
            contactData.map((item, key) => {
              return (
                <>
                  <div className='left col-md-5 col-sm-12 w-50 mb-4'>
                  
                    <h6>İletişim Bilgileri</h6>
                    <hr></hr>
                    <div className='mt-4'>
                      <div className='row'>
                        <div className='icon col-md-1 p-2'><MapPin strokeWidth={1} size={35} color='#f05454' /></div>
                        <div className='col-md-10 mt-1'><p className='content'>{item.address}</p></div>
                      </div>
                      <div className='row'>
                        <div className='icon col-md-1 p-2'><Phone strokeWidth={1} size={35} color='#f05454' /></div>
                        <div className='col-md-10 mt-3'><p className='content'>{item.phoneNumber}</p></div>
                      </div>
                      <div className='row'>
                        <div className='icon col-md-1 p-2'><Mail strokeWidth={1} size={35} color='#f05454' /></div>
                        <div className='col-md-10 mt-3'><p className='content'>{item.eMail}</p></div>
                      </div>
                      <div className='row'>
                        <div className='icon col-md-1 p-2'><Linkedin strokeWidth={1} size={35} color='#f05454' /></div>
                        <div className='col-md-10 mt-3'><p className='content'>{item.linkedIn}</p></div>
                      </div>
                    </div>
                  </div>
                </>
              );
            })
          }

          <div className='right col-md-5 col-sm-12 w-50 mb-4'>
            <h6>İletişim Formu</h6>
            <hr></hr>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <div className='row'>
                <div className='col-md-6 col-sm-12'>
                  <FormGroup>
                    <Input className='input-name' type='text' id="name" name="name"
                      innerRef={register({ required: "Lütfen Adınızı Giriniz!" })}
                      placeholder='Adınız' />
                    <div className='message text-danger'>
                      {
                         errors.name?.message
                      }
                    </div>
                  </FormGroup>
                </div>
                <div className='col-md-6 col-sm-12'>
                  <FormGroup>
                    <Input className='input-surname' type='text' id="surname" name="surname"
                      innerRef={register({ required: "Lütfen Soyadınızı Giriniz!" })}
                      placeholder='Soyadınız' />
                       <div className='message text-danger'>
                      {
                        errors.surname?.message
                      }
                    </div>
                  </FormGroup>
                </div>
              </div>
              <div className='row'>
                <div className='col-md-12'>
                  <FormGroup>
                    <Input className='input' type='email' id="mail" name="mail"
                      innerRef={register({ required: "Lütfen E-Mail Giriniz!" })}
                      placeholder='EMail Adresiniz' />
                       <div className='message2 text-danger'>
                      {
                        errors.mail?.message
                      }
                    </div>
                  </FormGroup>
                </div>
              </div>
              <div className='row'>
                <div className='col-md-12'>
                  <FormGroup>
                    <Input className='input' type='text' id="phoneNumber" name="phoneNumber"
                      innerRef={register({ required: "Lütfen Telefon Numarası Giriniz!" })}
                      placeholder='Telefon Numaranız' />
                       <div className='message2 text-danger'>
                      {
                        errors.phoneNumber?.message
                      }
                    </div>
                  </FormGroup>
                </div>
              </div>
              <div className='row'>
                <div className='col-md-12'>
                  <FormGroup>
                    <Input className='input' type='text' id="subject" name="subject"
                      innerRef={register({ required: "Lütfen Konu Giriniz!" })} placeholder='Konu' />
                       <div className='message2 text-danger'>
                      {
                        errors.subject?.message
                      }
                    </div>
                  </FormGroup>
                </div>
              </div>
              <div className='row'>
                <div className='col-md-12'>
                  <FormGroup>
                    <Input rows='7' className='input form-control' type='text' id="messageDetail" name="messageDetail"
                      innerRef={register({ required: "Lütfen Mesajınızı Yazınız!" })} placeholder='Mesajınız...' />
                       <div className='message2 text-danger'>
                      {
                        errors.messageDetail?.message
                      }
                    </div>
                  </FormGroup>
                </div>
              </div>
              <div className='row'>
                <div className='button col-md-12'>
                  <Button className='btn-gonder btn-sm outline' type='submit'>Gönder</Button>
                  <Button className='btn-sil btn-danger btn-sm outline' type='reset' >Sil</Button>
                </div>

              </div>
            </Form>
          </div>
        </div>
      </div>
    </>
  )
};

export default Contact;
