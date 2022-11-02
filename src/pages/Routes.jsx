import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

 const Routes = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_98afe0h', 'template_vpav0f7', form.current, 'Ed9TNDKH62dQ7zGbN')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Merchant Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Route Plans</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
};
export default Routes