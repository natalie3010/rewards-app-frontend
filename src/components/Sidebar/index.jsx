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

//Modal imports
import { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import "./ModalStyling.css";

function SideBar() {
  //Modal Info
  {
    /* The Alpha */
  }
  const [showAlpha, setShowAlpha] = useState(false);
  const alphaHandleClose = () => setShowAlpha(false);
  const alphaHandleShow = () => setShowAlpha(true);
  {
    /* Shining Star */
  }
  const [showStar, setShowStar] = useState(false);
  const starHandleClose = () => setShowStar(false);
  const starHandleShow = () => setShowStar(true);
  {
    /* Mr./Ms. Professional */
  }
  const [showProf, setShowProf] = useState(false);
  const profHandleClose = () => setShowProf(false);
  const profHandleShow = () => setShowProf(true);
  {
    /* Positive Radiator */
  }
  const [showPos, setShowPos] = useState(false);
  const posHandleClose = () => setShowPos(false);
  const posHandleShow = () => setShowPos(true);
  {
    /*  Path Finder */
  }
  const [showPath, setShowPath] = useState(false);
  const pathHandleClose = () => setShowPath(false);
  const pathHandleShow = () => setShowPath(true);
  {
    /* Spartan Spirit Award */
  }
  const [showSpar, setShowSpar] = useState(false);
  const sparHandleClose = () => setShowSpar(false);
  const sparHandleShow = () => setShowSpar(true);

  {
    /*  Community-centred */
  }
  const [showCom, setShowCom] = useState(false);
  const comHandleClose = () => setShowCom(false);
  const comHandleShow = () => setShowCom(true);
  {
    /* Above and Beyond */
  }
  const [showAbo, setShowAbo] = useState(false);
  const aboHandleClose = () => setShowAbo(false);
  const aboHandleShow = () => setShowAbo(true);

  {
    /* Beyond Grateful */
  }
  const [showBey, setShowBey] = useState(false);
  const beyHandleClose = () => setShowBey(false);
  const beyHandleShow = () => setShowBey(true);

  {
    /*   Placemaker */
  }
  const [showPlace, setShowPlace] = useState(false);
  const placeHandleClose = () => setShowPlace(false);
  const placeHandleShow = () => setShowPlace(true);

  //HTML Code
  return (
    <SideBarCont>
      <NavBody>
        <NavCont>
          <NavUL>
            <NavLi>
              <NavButton to="/">
                <IconSpan />
                <IconImg src={AlphaIcon} />
                <NavButtonH2 onClick={alphaHandleShow}>The Alpha</NavButtonH2>
              </NavButton>
            </NavLi>
            <NavLi>
              <NavButton to="/">
                <IconSpan />
                <IconImg src={ShiningStarIcon} />
                <NavButtonH2 onClick={starHandleShow}>Shining Star</NavButtonH2>
              </NavButton>
            </NavLi>
            <NavLi>
              <NavButton to="/">
                <IconSpan />
                <IconImg src={ProfessionalIcon} />
                <NavButtonH2 onClick={profHandleShow}>
                  Mr./Ms. Professional
                </NavButtonH2>
              </NavButton>
            </NavLi>
            <NavLi>
              <NavButton to="/">
                <IconSpan />
                <IconImg src={PositiveRadiatorIcon} />
                <NavButtonH2 onClick={posHandleShow}>
                  Positive Radiator
                </NavButtonH2>
              </NavButton>
            </NavLi>
            <NavLi>
              <NavButton to="/">
                <IconSpan />
                <IconImg src={PathFinderIcon} />
                <NavButtonH2 onClick={pathHandleShow}>Path Finder</NavButtonH2>
              </NavButton>
            </NavLi>
            <NavLi>
              <NavButton to="/">
                <IconSpan />
                <IconImg src={SpartanSpiritIcon} />
                <NavButtonH2 onClick={sparHandleShow}>
                  Spartan Spirit Award
                </NavButtonH2>
              </NavButton>
            </NavLi>
            <NavLi>
              <NavButton to="/">
                <IconSpan />
                <IconImg src={CommunityIcon} />
                <NavButtonH2 onClick={comHandleShow}>
                  Community-centred
                </NavButtonH2>
              </NavButton>
            </NavLi>
            <NavLi>
              <NavButton to="/">
                <IconSpan />
                <IconImg src={AboveAndBeyondIcon} />
                <NavButtonH2 onClick={aboHandleShow}>
                  Above and Beyond
                </NavButtonH2>
              </NavButton>
            </NavLi>
            <NavLi>
              <NavButton to="/">
                <IconSpan />
                <IconImg src={BeyondGratefulIcon} />
                <NavButtonH2 onClick={beyHandleShow}>
                  Beyond Grateful
                </NavButtonH2>
              </NavButton>
            </NavLi>
            <NavLi>
              <NavButton to="/">
                <IconSpan />
                <IconImg src={PlacemakerIcon} />
                <NavButtonH2 onClick={placeHandleShow}>Placemaker</NavButtonH2>
              </NavButton>
            </NavLi>
          </NavUL>
        </NavCont>
      </NavBody>
      {/* MODALS */}
      {/* The Alpha */}
      <Modal
        show={showAlpha}
        onHide={alphaHandleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>The Alpha</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Tell us about how the nominee has made a valuable contribution to the
          project / program/practice
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={alphaHandleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      {/* Shining Star */}
      <Modal
        show={showStar}
        onHide={starHandleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Shining Star</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          How does the nominee exemplify a positive attitude, inspire others to
          higher achievement, and uplift and support others
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={starHandleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      {/* Mr./Ms. Professional */}
      <Modal
        show={showProf}
        onHide={profHandleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Mr. / Ms. Professional</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          How does the nominee exemplify professionalism in response to customer
          questions and requests? Does the nominee display integrity and
          professionalism under pressure? Has the nominee gone above and beyond
          their daily responsibilities to meet changing demands and new
          initiatives?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={profHandleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      {/* Positive Radiator */}
      <Modal
        show={showPos}
        onHide={posHandleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Positive Radiator</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          How has the nominee demonstrated a resilient and helping attitude?
          Does the nominee take a proactive approach to their work, while
          welcoming feedback and collaboration? Has the nominee encouraged and
          pushed others to higher achievement?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={posHandleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      {/* Path Finder */}
      <Modal
        show={showPath}
        onHide={pathHandleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Path Finder</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          How does the nominee contribute to the improvement of processes,
          systems, and/or operations? Does the nominee make daily work run
          smoother and easier for the campus community? Is the nominee willing
          to learn new skills and practices?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={pathHandleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      {/* Spartan Spirit Award */}
      <Modal
        show={showSpar}
        onHide={sparHandleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Spartan Spirit Award</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          How has the nominee conveyed spirit, passion, and pride about being a
          member of Capability Unit/Practice?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={sparHandleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      {/* Community-centered */}
      <Modal
        show={showCom}
        onHide={comHandleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Community-centered</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          How has the nominee demonstrated a commitment to serving other
          colleagues? Has the nominee contributed to the community outside the
          scope of their job/practice area? Is the nominee involved in
          supporting projects outside the one they are primarily allocated into?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={comHandleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      {/* Above and Beyond */}
      <Modal
        show={showAbo}
        onHide={aboHandleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Above and Beyond</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          This award is to recognize an individual or team who has performed
          tasks or services in an exemplary manner, have gone “above and beyond”
          what is expected in their normal range of responsibilities, and/ or
          have improved the quality of deliverables/ Customer satisfaction or
          Profitability
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={aboHandleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      {/* Beyond Grateful */}
      <Modal
        show={showBey}
        onHide={beyHandleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Beyond Grateful</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          This award is to thanks an individual for their support and help with
          anything within the project or practice. Has the nominee contributed
          to the growth on the Practice by helping in recruitment or by
          supporting bids ?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={beyHandleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      {/* Placemaker */}
      <Modal
        show={showPlace}
        onHide={placeHandleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Placemaker</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          This award will celebrate a technology or solution that elevates our
          presence within the customer organisation or helps making a Got-to-
          Market differentiator
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={placeHandleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </SideBarCont>
  );
}

export default SideBar;
