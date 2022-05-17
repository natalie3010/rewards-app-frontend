//CSS
import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeaderCont = styled.div`
  display: flex;
  align-items: center;
  justify-content: right;
  width: 100%;
  height: 70px;
  border-bottom: 1px solid rgba(18, 171, 219, 0.25);
  z-index: 10;
`;

export const LogoLink = styled(Link)``;

export const LogoImg = styled.img`
  width: 380px;
  margin-right: 30px;
  margin-top: 10px;
`;
