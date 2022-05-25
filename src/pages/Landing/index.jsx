import { Link, useNavigate } from 'react-router-dom';
import Logo from '../../assets/Logo.svg';
import './LandingStyles.css';
import AboveAndBeyondIcon from "../../assets/AboveAndBeyondIcon.svg";
import AlphaIcon from "../../assets/AlphaIcon.svg";
import BeyondGratefulIcon from "../../assets/BeyondGratefulIcon.svg";
import CommunityIcon from "../../assets/CommunityIcon.svg";
import PathFinderIcon from "../../assets/PathFinderIcon.svg";
import PlacemakerIcon from "../../assets/PlacemakerIcon.svg";
import PositiveRadiatorIcon from "../../assets/PositiveRadiatorIcon.svg";
import ProfessionalIcon from "../../assets/ProfessionalIcon.svg";
import ShiningStarIcon from "../../assets/ShiningStarIcon.svg";
import SpartanSpiritIcon from "../../assets/SpartanSpiritIcon.svg";
import { IconImg1, IconImg2, IconImg3, IconImg4, IconImg5, IconImg6, IconImg7, IconImg8, } from "./LandingElements";

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
      <IconImg1 src={AboveAndBeyondIcon} />
      <IconImg2 src={AlphaIcon} />
      <IconImg3 src={BeyondGratefulIcon} />
      <IconImg4 src={CommunityIcon} />
      <IconImg5 src={PathFinderIcon} />
      <IconImg6 style={{fill: "black"}} src={PlacemakerIcon} />
      <IconImg7 style={{fill: "black"}} src={PositiveRadiatorIcon} />
      <IconImg8 style={{fill: "black"}} src={ProfessionalIcon} />  
      </div>
      
    </div>
  );
}

export default Landing;
