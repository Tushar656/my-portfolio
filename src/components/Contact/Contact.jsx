import React, { useState, useRef } from 'react'
import emailjs from '@emailjs/browser';
import "./Contact.scss"
import {Player} from '@lottiefiles/react-lottie-player';

export default function Contact() {

  const [user, setUser] = useState({
      name: "",
      email: "",
      message: ""
  })
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ykepdjd', 'template_1b5ilc7', form.current, 'KXudjqbMYrHBLKWTx')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      setUser.name = "";
      setUser.email = "";
      setUser.message = "";
  };

  return (
    <div className='contact' id='contact'>
      <div className="contactWrapper">
        <div data-aos-duration="1500" data-aos="fade-left" className="leftcontect">
          <Player
            autoplay
            loop
            speed={1}
            src="https://assets1.lottiefiles.com/packages/lf20_dsxct2el.json"
            // src="https://assets7.lottiefiles.com/packages/lf20_ksrcyxgn.json"
            style={{ height: 'auto', width: '100%' }}>
          </Player>
        </div>
        <div data-aos-duration="1500" data-aos="fade-right" className="rightcontect">
          <h2>Get in Touch</h2>
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" placeholder='Your Name' value={user.name} onChange={(e) => setUser({...user, name:  e.target.value})} name="user_name"/>
            <input type="text" placeholder='Email Address'value={user.email} onChange={(e) => setUser({...user, email:  e.target.value})} name="user_email"/>
            <textarea placeholder='Type Your Message' autoComplete={false} cols="30" rows="4" value={user.message} onChange={(e) => setUser({...user, message:  e.target.value})} name="message"></textarea>
            <button className='submitBtn' type='submit'>Submit</button>
          </form>
        </div>
      </div>
    </div>
  )
}
