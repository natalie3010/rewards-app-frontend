import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../../assets/Logo.svg';
import './LandingStyles.css';

function Landing() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate('/auth');
    }, 2250);
  });

  return (
    <div className="w-100 h-100 ">
      <img
        src={Logo}
        alt=""
        className="logo position-absolute top-50 start-50 translate-middle"
      />
    </div>
  );
}

export default Landing;
