import { Link, useNavigate } from 'react-router-dom';
import Logo from '../../assets/Logo.svg';
import './LandingStyles.css';
import AboveAndBeyondLanding from "../../assets/AboveAndBeyondLanding.svg";
import AlphaLanding from "../../assets/AlphaLanding.svg";
import BeyondGratefulLanding from "../../assets/BeyondGratefulLanding.svg";
import CommunityLanding from "../../assets/CommunityLanding.svg";
import PathFinderLanding from "../../assets/PathFinderLanding.svg";
import PlacemakerLanding from "../../assets/PlacemakerLanding.svg";
import PositiveRadiatorLanding from "../../assets/PositiveRadiatorLanding.svg";
import ProfessionalLanding from "../../assets/ProfessionalLanding.svg";
import { LandingImg1, LandingImg2, LandingImg3, LandingImg4, LandingImg5, LandingImg6, LandingImg7, LandingImg8, } from "./LandingElements";

function Landing() {
  return (
    <div className="w-100 h-100 ">
      <img
        src={Logo}
        alt=""
        className="logo position-absolute top-50 start-50 translate-middle"
      />
      <div>  
        <h1 className="title position-absolute top-50 start-50 translate-middle">
          Welcome to Capgemini's Tech Practice UK's Rewards App
        </h1>
        <h2 className="description position-absolute">
          You can nominate someone for an award here
        </h2>
      </div>
      <Link to={'/auth'}>
        <button className="nominate position-absolute">Nominate</button>
      </Link>

      <div>
      <LandingImg1 src={AboveAndBeyondLanding} />
      <LandingImg2 src={AlphaLanding} />
      <LandingImg3 src={BeyondGratefulLanding} />
      <LandingImg4 src={CommunityLanding} />
      <LandingImg5 src={PathFinderLanding} />
      <LandingImg6 src={PlacemakerLanding} />
      <LandingImg7 src={PositiveRadiatorLanding} />
      <LandingImg8 src={ProfessionalLanding} />  
      </div>
      
    </div>
  );
}

export default Landing;
