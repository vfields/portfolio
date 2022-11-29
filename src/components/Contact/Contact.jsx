import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

const contactFlowers = require('../../assets/contact-flowers.png');

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    if (name && email && message) {
      emailjs.sendForm('service_sdg36no', 'template_ksuhawl', form.current, 'i3aDurtlbfViXugse')
      .then((result) => {
        setError('');
        setSuccess('Your message was sent successfully!');
        clearForm();
      }, (error) => {
        setError(`Uh oh! Something went wrong sending your message: ${error.text}. Please refresh and try again!`);
      });
    } else {
      setError('Oops! Please be sure to fill out all inputs before submitting.');
    }
  };

  const clearForm = () => {
    setName('');
    setEmail('');
    setMessage('');
  }

  const clearMsg = () => {
    setSuccess('');
  }

  return (
    <section className="contact-section">
      <h1>Contact</h1>
      <div className="contact">
        <div className="contact-text-container">
          <p className="contact-text">If you'd like to connect regarding an open position or a freelance project, I'm available to grab a coffee and chat!</p>
          <p className="contact-text">You can send me a message here, on <a href="https://www.linkedin.com/in/victoria-ashley-fields/" target='_blank' rel='noopener'>LinkedIn</a>, or email me directly: <a href="mailto:victoriaashleyfields@gmail.com">victoriaashleyfields@gmail.com</a>.
          </p>
          <img src={contactFlowers} alt="a collection of orange outlined flowers" />
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input 
            type="text" 
            name="user_name"
            placeholder="Name"
            value={name}
            onChange={(event) => setName(event.target.value)} 
          />
          <input 
            type="email" 
            name="user_email"
            placeholder="Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)} 
          />
          <textarea 
            name="message"
            placeholder="Message"
            value={message}
            onChange={(event) => setMessage(event.target.value)} 
          />
          <button type="submit">Send Message</button>
        </form>
      </div>
      {error && <p className="user-msg">{error}</p>}
          {success && 
            <>
              <p className="user-msg">{success}</p>
              <button onClick={clearMsg}>OK</button>
            </>
          }
    </section>
  );
};

export default Contact;