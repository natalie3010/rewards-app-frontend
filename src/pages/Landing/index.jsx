import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../../assets/Logo.svg';
import { NominateButton } from './LandingElements';
import './LandingStyles.css';

function Landing() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      // navigate('/auth');
    }, 2250);
  });

  return (
    <div className="w-100 h-100 ">
      <img
        src={Logo}
        alt=""
        className="logo position-absolute top-50 start-50 translate-middle"
      />
      <div>
        <h1 className="title position-absolute top-50 start-50 translate-middle">Welcome to Capgemini's Tech Practice UK's Rewards App</h1>
        <h2 className="description position-absolute">You can nominate someone for an award here</h2>
      </div>
      <NominateButton >Nominate</NominateButton>
    </div>
  );
}

export default Landing;
