import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../styles/contact.css';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs.sendForm(
      'service_zo6ehsa',       // your EmailJS service ID
      'template_e1imrss',      // your EmailJS template ID
      form.current,
      'l6sIYY0lupMf20VmM'     // your EmailJS public key
    )
    .then(() => {
      alert('Message sent successfully!');
      form.current.reset(); // clear the form
    })
    .catch((error) => {
      alert('Failed to send message, try again.');
      console.error('EmailJS error:', error.text || error);
    });
  };

  return (
    <section className="contact" id="contact">
      <h2>Contact Me</h2>

      <form ref={form} className="contact-form" onSubmit={sendEmail}>
        <input type="text" name="user_name" placeholder="Your Name" required />
        <input type="email" name="user_email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>

      <div className="contact-info">
        <p>📧 Email: <a href="mailto:jambee154@gmail.com">jambee154@gmail.com</a></p>
        <p>📞 Phone: <a href="tel:+251941637190">+251 941637190</a></p>
      </div>
    </section>
  );
}

export default Contact;
