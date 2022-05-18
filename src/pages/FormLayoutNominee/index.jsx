import { Form, Row, Col, Button } from "react-bootstrap";
import LogoHeader from "../../components/Logo";
import SideBar from "../../components/Sidebar";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { FormContainer, Title, TitleContainer } from "./NomineeElements";
import "./NomineeStyling.css";
function FormLayoutNominee() {
  const [unitArray, setUnitArray] = useState([]);
  const [capUnit, setCapUnit] = useState("");
  const [unitID, setUnitID] = useState();
  const [awardArray, setawardArray] = useState([]);
  const [categoryAward, setCategoryAward] = useState("");
  const [awardID, setAwardID] = useState();

  useEffect((awardcategory) => {
    fetch(`http://localhost:8090/v1/nominations/rewards/get`)
      .then((res) => res.json())
      .then((result) => {
        console.log(result);

        setUnitArray(result);
        setUnitID(result[0]);
        setCategoryAward(result.categoryAward);

        console.log(awardArray);
        console.log(awardArray.awardId);
        console.log(awardArray.categoryAward);
      });
  }, []);

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
          <Title> Nominee Details </Title>
        </TitleContainer>
        <Form>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridNomineeName">
              <Form.Label>Nominee Name</Form.Label>
              <Form.Control type="name" placeholder="Enter Name" />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Nominee Email</Form.Label>
              <Form.Control type="email" placeholder="Enter Email" />
            </Form.Group>
          </Row>
          <Form.Group className="mb-3" as={Col} controlId="formGridState">
            <Form.Label> Nominee current Capability Unit (if known)</Form.Label>
            <Form.Select defaultValue="--Select--">
              {/* {" "}
              <option>{unitArray}</option>
              {getOptionLabel} = {(option) => option["capUnit"]}
              {getOptionValue} = {(option) => option["unitId"]}
              {onChange}={(opt) => ClickPool(opt.unitId)} */}
              <option>--Select--</option>
              <option>MAPII</option>
              <option>Insights and Data</option>
            </Form.Select>
          </Form.Group>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridState">
              <Form.Label> Category Nominated for* </Form.Label>
              <Form.Select defaultValue="Choose...">
                <option>--Select--</option>
                <option>The Alpha</option>
                <option>Shining Star</option>
                <option>Mr./Mrs Professional</option>
                <option>Positive Radiator</option>
                <option>Pathfinder</option>
                <option>Spartan Spirit Award</option>
                <option>Community-Centered</option>
                <option>Above and Beyond Award</option>
                <option>Beyond Grateful Award</option>
                <option>Placemaker</option>
              </Form.Select>
            </Form.Group>
            <Form.Group as={Col} id="formGridCheckbox">
              <Form.Check
                type="checkbox"
                label="Please tick the box if you want a mail to be sent to the
                  Candidate*"
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="exampleForm.ControlTextarea1">
              <Form.Label>
                {" "}
                Please tell us how you feel the nominee met the criteria for the
                award that relates to the category :*
              </Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Enter Text" />
            </Form.Group>

            <Form.Group
              as={Col}
              className="mb-3"
              controlId="exampleForm.ControlTextarea2"
            >
              <br></br>
              <Form.Label>
                Any additional message you would want to add in the mail body
              </Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Enter Text" />
            </Form.Group>
          </Row>
          {/* <Link to="/Nominator"> */}
          <Button
            href="/Nominator"
            type="submit"
            class="btn btn-primary"
            variant="primary"
          >
            Next
          </Button>

          {/* </Link> */}
        </Form>
      </FormContainer>
    </>
  );
}

export default FormLayoutNominee;
