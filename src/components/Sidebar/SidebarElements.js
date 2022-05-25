//CSS
import { Link } from "react-router-dom";
import styled from "styled-components";

export const SideBarCont = styled.div`
  border-bottom: 2px solid #fff;
  width: 75px;
  overflow-x: hidden;
  transition: width 0.3s;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 10;

  &:hover {
    width: 42vh;
    box-shadow: 8px 0px 0 #12abdb;
    transition: 0.3s ease-in-out;
  }
`;

export const NavCont = styled.div`
  position: center;
  height: 350vh;
  width: 50vh;
  background: #0070ad;
`;

export const NavBody = styled.div`
  display: flex;
  align-items: center;
  min-height: 100vh;
  width: 120px;
  background: #0070ad;
`;

export const NavUL = styled.ul`
  position: relative;
  top: 0;
  left: 0;
  width: 130;
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`;

export const NavLi = styled.li`
  position: relative;
  width: 100%;
  list-style: none;
  cursor: pointer;
`;

export const NavButton = styled.div`
  position: relative;
  display: flex;
  text-decoration: none;
  width: 37vh;
  background: #0070ad;
  border-color: #0070ad;
  border-bottom: #0070ad;
  margin-top: 5%;
  padding-top: 5%;
  border-right: #0070ad;
  cursor: pointer;
  transition: width 0.5s;

  &:hover {
    transform: scale(1.15);
    transition: 0.3s;
    background-color: #12abdb;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    left: 0%;
    border-color: #12abdb;
  }
`;

export const NavButtonH2 = styled.h2`
  display: block;
  width: 100%;
  display: flex;
  text-decoration: none;
  color: #fff;
  font-family: "Ubuntu";
  font-size: 3vh;
  font-weight: 100;
  text-align: start;
  padding-left: 10%;
  padding-top: 1%;
  padding-bottom: 0%;
`;

export const IconSpan = styled.span`
  width: 0%;
  margin-left: 0px;
  margin-bottom: 3px;
`;

export const IconImg = styled.img`
  height: 100px;
  margin-left: 0px;
  margin-top: 10px;
`;
