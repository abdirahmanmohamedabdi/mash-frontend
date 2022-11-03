import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

 const Routes = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_98afe0h', 'template_qnjv617', form.current, 'Ed9TNDKH62dQ7zGbN')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };

  return (
    <form ref={form} onSubmit={sendEmail}style = {{display:"flex",flexDirection:"column",marginLeft:"100px"}}>
      <label>Merchant Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Route Name</label>
      <textarea name="message" />
      <label>Outlets</label>
      <textarea name="message" />
      <label>Location</label>
      <textarea name="message" />
      <button style = {{width:"400px",borderRadius: 10, margin: "30px 300px"}} class="btn btn-outline-info" type="submit">Send Routes</button>
    </form>
  );
};
export default Routes