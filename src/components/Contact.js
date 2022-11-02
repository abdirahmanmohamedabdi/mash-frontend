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

const StyledContactForm = styled.div`
width: 400px;

form {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 100%
    font-size: 20px;

    input {
      width: 100%;
      height: 35px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);
    }
}`