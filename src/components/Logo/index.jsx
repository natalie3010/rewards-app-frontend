import { HeaderCont, LogoLink, LogoImg } from "./LogoElements";
import Logo from "../../assets/Logo.svg";

function LogoHeader() {
  return (
    <HeaderCont>
      <LogoLink to="/auth">
        <LogoImg src={Logo} />
      </LogoLink>
    </HeaderCont>
  );
}

export default LogoHeader;
