import React, { useState } from 'react'
import './Style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane, faScissors } from '@fortawesome/free-solid-svg-icons'
import validator from 'validator'
import './Navbaar'
import Aos from 'aos';
 import 'aos/dist/aos.css'
import { useEffect } from 'react'

export default function Contact() {

  useEffect(()=>{
    Aos.init({duration:2000});

  },[]);

const [text,settext] = useState("")
const [subject,setsubject] = useState("")

function handle(){
let newInput='';
settext(newInput)
setsubject(newInput)

}

const newhandle3=(e) =>{
  settext(e.target.value)
}

const newhandle2=(e) =>{
  setsubject(e.target.value)
}

const [emailError, setEmailError] = useState('')
  function ValidateEmail(e){
    var email = e.target.value
    if (validator.isEmail(email)) {
      setEmailError('✅')
    } else {
      setEmailError('❌') 
    }
  }

  return (
    <>
    <div className="container-fluid my-5 z-depth-1  text-dark " data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
  <section className="px-md-5 mx-md-5 text-center text-lg-left dark-grey-text">
    <div className="row d-flex justify-content-center">
      <div className="col-md-6 text-center">
        <h3 className="font-weight-bold">Contact Us</h3>
        <p className="text-muted">You can contact us by sending a mail or can visit our agency from 10:00 AM to  7:00 PM</p>
      </div>
    </div>
    <div className="row">
      <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
        <div className="md-form md-outline mt-3">
          <input type="email" id="form-email" className="form-control"  onChange={ValidateEmail} />
          
          <label htmlFor="form-email">E-mail {emailError}</label>
        </div>
        <div className="md-form md-outline">
          <input type="text" id="form-subject" className="form-control" value={subject} onChange={newhandle2}/>
          <label htmlFor="form-subject">Subject</label>
        </div>
        <div className="md-form md-outline mb-3">
          <textarea id="form-message" className="md-textarea form-control" rows="3" value={text} onChange={newhandle3}></textarea>
          <label htmlFor="form-message">How we can help?</label>
        </div>
        <button type="submit" className="btn btn-info btn-sm ml-0"><FontAwesomeIcon icon={faPaperPlane}/> Submit</button>
        <button className='btn btn-info btn-sm ml-0 mx-4' onClick={(e) => { handle()}}><FontAwesomeIcon icon={faScissors}/> Clear</button>
      </div>
      <div className="col-lg-6 col-md-12 mb-0 mb-md-0">
          <div id="map-container-google-1" className="z-depth-1 map-container mb-4">
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d6999.881228449217!2d77.21080888957836!3d28.691423001477634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1682343680908!5m2!1sen!2sin" width="600" height="450" style={{border:" 0,"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title='myframe'></iframe>
          </div>
          <p className="font-weight-bold">New Delhi, 110033, INDIA</p>
        </div>
    </div>
  </section>

</div>
</>
  )
  }