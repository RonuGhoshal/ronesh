import '@fortawesome/fontawesome-free/css/all.min.css';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <h3>Contact</h3>
      <p>
        <i className="fas fa-envelope icon"></i>
        <a href="mailto:ronesh85@gmail.com">ronesh85@gmail.com</a>
      </p>
      <p>
        <i className="fab fa-instagram icon"></i>
        <a href="https://instagram.com/roneshsofresh" target="_blank" rel="noopener noreferrer">roneshsofresh</a>
      </p>
      <p>
        <i className="fab fa-facebook icon"></i>
        <a href="https://facebook.com/roneshsofresh" target="_blank" rel="noopener noreferrer">roneshsofresh</a>
      </p>
      <p>
        <i className="fab fa-twitter icon"></i>
        <a href="https://twitter.com/roneshsofresh" target="_blank" rel="noopener noreferrer">roneshsofresh</a>
      </p>
      <p>
        <i className="fab fa-soundcloud icon"></i>
        <a href="https://soundcloud.com/roneshsofresh" target="_blank" rel="noopener noreferrer">roneshsofresh</a>
      </p>
      <p>
        <i className="fab fa-bandcamp icon"></i>
        <a href="https://ronesh.bandcamp.com" target="_blank" rel="noopener noreferrer">ronesh.bandcamp.com</a>
      </p>
    </div>
  );
};

export default Contact;
