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
import { IconImg } from "./LandingElements";

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
      <IconImg src={AlphaIcon} />
    </div>
  );
}

export default Landing;
