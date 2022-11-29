// function Contact() {
//   return (
//     <p>I am Contact</p>
//   );
// }

// export default Contact;

import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_sdg36no', 'template_ksuhawl', form.current, 'i3aDurtlbfViXugse')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input 
        type="text" 
        name="user_name"
        value={name}
        onChange={(event) => setName(event.target.value)} 
      />
      <label>Email</label>
      <input 
        type="email" 
        name="user_email"
        value={email}
        onChange={(event) => setEmail(event.target.value)} 
      />
      <label>Message</label>
      <textarea 
        name="message"
        value={message}
        onChange={(event) => setMessage(event.target.value)} 
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Contact;