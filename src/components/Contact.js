import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import styled from "styled-components";

function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_ll0476q', 'template_s4ueued', form.current, 'A_p18Wq0uXEyNy7xV')
        .then((result) => {
            console.log(result.text);
            console.log("Message sent")
        }, (error) => {
            console.log(error.text);
        });
    };
  
  return (
    <StyledContactForm>
      <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
    </StyledContactForm>
  )
}

export default Contact