import { useState, useEffect } from "react";
import {
  Form,
  Row,
  Col,
  Button,
  Tooltip,
  OverlayTrigger,
} from "react-bootstrap";
import LogoHeader from "../../components/Logo";
import SideBar from "../../components/Sidebar";
import { Link } from "react-router-dom";
import {
  FormContainer,
  Title,
  TitleContainer,
  IconImg,
} from "./NomineeElements";
import Icon from "../../assets/i.svg";
import "./NomineeStyling.css";

import { apiProvider } from "../../services/api/provider";

function FormLayoutNominee() {
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Select the icons on the left to view the different categories.
    </Tooltip>
  );

  const apiGetUnits = apiProvider.GetAllApi("v1/nominations/cap-units");
  const apiGetCategory = apiProvider.GetAllApi("v1/nominations/rewards");

  useEffect(() => {
    apiGetUnits.request();
    apiGetCategory.request();
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
              <option>--Select--</option>

              {apiGetUnits.data?.map((unit, i) => (
                <option key={i} value={unit}>
                  {unit.capabilityName}
                </option>
              ))}
            </Form.Select>
          </Form.Group>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>
                {" "}
                Category Nominated for*
                <OverlayTrigger
                  placement="right"
                  delay={{ show: 250, hide: 400 }}
                  overlay={renderTooltip}
                >
                  <IconImg src={Icon} />
                </OverlayTrigger>
              </Form.Label>
              <Form.Select defaultValue="Choose...">
                <option>--Select--</option>

                {apiGetCategory.data?.map((category, i) => (
                  <option key={i} value={category}>
                    {category.categoryName}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
            <Form.Group as={Col} id="formGridCheckbox">
              <Form.Check
                // value={this.state.key.mail}
                // onChange={(e) => this.handleKey(e)}
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
