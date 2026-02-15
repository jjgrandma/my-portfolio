import '../styles/services.css'
import { FaCode, FaPaintBrush, FaMobileAlt } from 'react-icons/fa'

function Services() {
  const services = [
    {
      icon: <FaCode />,
      title: 'Web Development',
      description: 'Modern and scalable web applications using React.',
    },
    {
      icon: <FaPaintBrush />,
      title: 'UI / UX Design',
      description: 'Clean, intuitive, and user-focused interfaces.',
    },
    {
      icon: <FaMobileAlt />,
      title: 'Responsive Design',
      description: 'Mobile-first designs that work on all devices.',
    },
  ];

  return (
    <section className="services" id="services">
      <h2>Services</h2>

      <div className="service-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Services;
