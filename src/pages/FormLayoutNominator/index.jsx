import { Form, Row, Col, Button } from "react-bootstrap";
import LogoHeader from "../../components/Logo";
import SideBar from "../../components/Sidebar";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  FormContainer,
  Title,
  TitleContainer,
  BackBtn,
} from "./NominatorElements";
import "./NominatorStyling.css";
function FormLayoutNominator() {
  const [unitArray, setUnitArray] = useState([]);
  const [capUnit, setCapUnit] = useState("");
  const [unitID, setUnitID] = useState();

  useEffect((capabilityunits) => {
    fetch(`http://localhost:8090/v1/nominations/cap-units/get`)
      .then((res) => res.json())
      .then((result) => {
        console.log(result);

        setUnitArray(result);
        setUnitID(result[0]);
        setCapUnit(result.CapUnit);
        console.log(unitArray);
        console.log(unitArray.unitId);
        console.log(unitArray.capUnit);
      });
  }, []);

  useEffect((addingNomination) => {
    fetch(`http://localhost:8090/v1/nominations/add-nomination/post`)
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });
  }, []);

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
          <br></br>
          <Row className="mb-3">
            <Button type="next" class="btn btn-primary" variant="primary">
              Submit
            </Button>
            {/* </Link> */}{" "}
            <BackBtn>
              <Link to="/Nominee">
                <Button type="back" class="btn btn-primary2" variant="primary">
                  Back
                </Button>
              </Link>
            </BackBtn>
          </Row>
        </Form>
      </FormContainer>
    </>
  );
}

export default FormLayoutNominator;
