import { Form, Row, Col, Button } from "react-bootstrap";
import LogoHeader from "../../../components/Logo";
import SideBar from "../../../components/Sidebar";
import { Link } from "react-router-dom";
import { FormContainer, Title, TitleContainer } from "./FilterElements";
import "./FilterStyling.css";

function Filter() {
  return (
    <>
      <LogoHeader></LogoHeader>

      <FormContainer>
        <TitleContainer>
          <Title> Admin Filter</Title>
        </TitleContainer>
      </FormContainer>
    </>
  );
}
export default Filter;
