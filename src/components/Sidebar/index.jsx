import {
  SideBarCont,
  NavCont,
  NavBody,
  NavUL,
  NavLi,
  NavButton,
  NavButtonH2,
  IconImg,
  IconSpan,
} from "./SidebarElements";

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

function SideBar() {
  //HTML Code
  return (
    <SideBarCont>
      <NavBody>
        <NavCont>
          <NavUL>
            <NavLi>
              <NavButton to="/">
                <IconSpan/>
                <IconImg src={AlphaIcon} />
                <NavButtonH2>The Alpha</NavButtonH2>
              </NavButton>
            </NavLi>
            <NavLi>
              <NavButton to="/">
                <IconSpan/>
                <IconImg src={ShiningStarIcon} />
                <NavButtonH2>Shining Star</NavButtonH2>
              </NavButton>
            </NavLi>
            <NavLi>
              <NavButton to="/">
              <IconSpan/>
                <IconImg src={ProfessionalIcon} />
                <NavButtonH2>Mr./Ms. Professional</NavButtonH2>
              </NavButton>
            </NavLi>
            <NavLi>
              <NavButton to="/">
              <IconSpan/>
                <IconImg src={PositiveRadiatorIcon} />
                <NavButtonH2>Positive Radiator</NavButtonH2>
              </NavButton>
            </NavLi>
            <NavLi>
              <NavButton to="/">
              <IconSpan/>
                <IconImg src={PathFinderIcon} />
                <NavButtonH2>Path Finder</NavButtonH2>
              </NavButton>
            </NavLi>
            <NavLi>
              <NavButton to="/">
              <IconSpan/>
                <IconImg src={SpartanSpiritIcon} />
                <NavButtonH2>Spartan Spirit Award</NavButtonH2>
              </NavButton>
            </NavLi>
            <NavLi>
              <NavButton to="/">
              <IconSpan/>
                <IconImg src={CommunityIcon} />
                <NavButtonH2>Community-centred</NavButtonH2>
              </NavButton>
            </NavLi>
            <NavLi>
              <NavButton to="/">
              <IconSpan/>
                <IconImg src={AboveAndBeyondIcon} />
                <NavButtonH2>Above and Beyond</NavButtonH2>
              </NavButton>
            </NavLi>
            <NavLi>
              <NavButton to="/">
              <IconSpan/>
                <IconImg src={BeyondGratefulIcon} />
                <NavButtonH2>Beyond Graetful</NavButtonH2>
              </NavButton>
            </NavLi>
            <NavLi>
              <NavButton to="/">
              <IconSpan/>
                <IconImg src={PlacemakerIcon} />
                <NavButtonH2>Placemaker</NavButtonH2>
              </NavButton>
            </NavLi>
          </NavUL>
        </NavCont>
      </NavBody>
    </SideBarCont>
  );
}

export default SideBar;
