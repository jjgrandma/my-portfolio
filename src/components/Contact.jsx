import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import '../styles/contact.css';

function Contact() {
  const form = useRef();
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('sending');

    emailjs.sendForm(
      'service_oezlkwf',
      'template_e1imrss',
      form.current,
      'l6sIYY0lupMf20VmM'
    )
    .then(() => {
      setStatus('success');
      form.current.reset();
      setTimeout(() => setStatus('idle'), 5000);
    })
    .catch((error) => {
      setStatus('error');
      console.error('EmailJS error:', error.text || error);
      setTimeout(() => setStatus('idle'), 5000);
    });
  };

  return (
    <section className="contact" id="contact">
      <h2>Contact Me</h2>
      <p className="contact-subtitle">Have a project in mind? Send me a message and I'll get back to you.</p>

      <form ref={form} className="contact-form" onSubmit={sendEmail}>
        <input
          type="text"
          name="user_name"
          placeholder="Your Name"
          required
          disabled={status === 'sending'}
        />
        <input
          type="email"
          name="user_email"
          placeholder="Your Email"
          required
          disabled={status === 'sending'}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          required
          disabled={status === 'sending'}
        ></textarea>

        <button type="submit" disabled={status === 'sending'}>
          {status === 'sending' ? 'Sending...' : 'Send Message'}
        </button>

        {status === 'success' && (
          <div className="form-feedback success">
            ✅ Message sent! I'll get back to you soon.
          </div>
        )}
        {status === 'error' && (
          <div className="form-feedback error">
            ❌ Failed to send. Please try again or email me directly.
          </div>
        )}
      </form>

      <div className="contact-info">
        <p>📧 Email: <a href="mailto:jambee154@gmail.com">jambee154@gmail.com</a></p>
        <p>📞 Phone: <a href="tel:+251941637190">+251 941637190</a></p>
      </div>
    </section>
  );
}

export default Contact;
