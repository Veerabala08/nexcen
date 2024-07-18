// Navbar.jsx
import { Link } from 'react-router-dom';
import Logo from '../assets/ComLogo.png';
import './Navbar.scss';
import useTourStore from '../TourStore';

function Navbar() {
    
  const startTour = useTourStore((state) => state.startTour);

  return (
    <div className="navbar">
      <img src={Logo} alt="logo-img" />
      <div className="menu">
        <Link to='/'>
          <p className="home">Home</p>
        </Link>
        <p className="service">Service</p>
        <p className="feature">Feature</p>
        <p className="product">Product</p>
        <p className="testimonial">Testimonial</p>
        <p className="faq">FAQ</p>
      </div>
      <div className="buttonGroup">
        <button onClick={startTour}>Start Tour</button>
        <Link to='/registerform'>
          <button className="SignUp">SignUp</button>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
