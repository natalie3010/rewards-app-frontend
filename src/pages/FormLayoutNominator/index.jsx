import { Form, Row, Col, Button } from "react-bootstrap";
import LogoHeader from "../../components/Logo";
import SideBar from "../../components/Sidebar";
import { Link } from "react-router-dom";
import { FormContainer, Title, TitleContainer } from "./NominatorElements";
import { useNavigate } from "react-router-dom";

import "./NominatorStyling.css";
function FormLayoutNominator() {
  const navigate = useNavigate();

  function validateForm() {
    let form = document.getElementById("#form");
  }

  return (
    <>
      <LogoHeader></LogoHeader>
      <SideBar></SideBar>
      <FormContainer>
        <TitleContainer>
          <Title> Your Details </Title>
        </TitleContainer>
        <Form id="form">
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridNomineeName">
              <Form.Label>Your Name</Form.Label>
              <Form.Control type="name" placeholder="Enter Name" />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Your Email</Form.Label>
              <Form.Control type="email" placeholder="Enter Email" />
            </Form.Group>
          </Row>
          <Form.Group className="mb-3" as={Col} controlId="formGridState">
            <Form.Label> Your current Capability Unit</Form.Label>
            <Form.Select defaultValue="Choose...">
              <option>--Select--</option>
              <option>MAPII</option>
              <option>Insights and Data</option>
            </Form.Select>
          </Form.Group>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>Date Submitted</Form.Label>
              <Form.Control type="Date" placeholder="Month" />
            </Form.Group>
          </Row>
          {/* <Link to="/login"> */}
          <br></br>
          <Button
            onClick={navigate("/login")}
            type="submit"
            class="btn btn-primary"
            variant="primary"
          >
            Submit
          </Button>
          {/* </Link> */}
        </Form>
      </FormContainer>
    </>
  );
}

export default FormLayoutNominator;
