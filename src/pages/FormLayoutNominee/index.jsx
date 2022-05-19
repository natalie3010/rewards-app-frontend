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
import { useNavigate } from "react-router-dom";
import "./NomineeStyling.css";
import * as yup from "yup";
import { Formik } from "formik";

function FormLayoutNominee() {
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Select the icons on the left to view the different categories.
    </Tooltip>
  );

  const [unitArray, setUnitArray] = useState([]);
  const [capUnit, setCapUnit] = useState("");
  const [unitID, setUnitID] = useState();
  const [awardArray, setawardArray] = useState([]);
  const [categoryAward, setCategoryAward] = useState("");
  const [awardID, setAwardID] = useState();

  //for getting award categories
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

  //for getting capability units
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

  //for (posting) adding Nomination
  useEffect((addingNomination) => {
    fetch(`http://localhost:8090/v1/nominations/add-nomination/post`)
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });
  }, []);

  // for checkbox
  // handleKey(e);
  // {
  //   let change = {};
  //   const { value, checked, name } = e.target;
  //   const previousKeyState = this.state[name] || {};
  //   this.setState({
  //     [name]: { ...previousKeyState, [name]: checked },
  //   });
  // }

  const schema = yup.object().shape({
    nomineeName: yup.string().required(),
    nomineeEmail: yup.string().email().required(),
    nomineeUnit: yup.string(),
    nomineeCategory: yup.string().required(),
    nomineeCriteria: yup.string().max(300).required(),
    nomineeComment: yup.string().max(250),
  });

  const navigate = useNavigate();

  return (
    <>
      <LogoHeader></LogoHeader>
      <SideBar></SideBar>
      <FormContainer>
        <TitleContainer>
          <Title> Nominee Details </Title>
        </TitleContainer>
        <Formik
          validationSchema={schema}
          onSubmit={() => {
            navigate("/Nominator");
          }}
          initialValues={{
            nomineeName: "",
            nomineeEmail: "",
            nomineeUnit: "",
            nomineeCategory: "",
            nomineeCriteria: "",
            nomineeComment: "",
          }}
        >
          {({
            handleSubmit,
            handleChange,
            handleBlur,
            values,
            touched,
            isValid,
            errors,
          }) => (
            <Form onSubmit={handleSubmit}>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridNomineeName">
                  <Form.Label>Nominee Name*</Form.Label>
                  <Form.Control
                    type="text"
                    name="nomineeName"
                    value={values.nomineeName}
                    onChange={handleChange}
                    isValid={touched.nomineeName && !errors.nomineeName}
                  />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Nominee Email*</Form.Label>
                  <Form.Control
                    type="text"
                    name="nomineeEmail"
                    value={values.nomineeEmail}
                    onChange={handleChange}
                    isValid={touched.nomineeEmail && !errors.nomineeEmail}
                  />
                </Form.Group>
              </Row>
              <Form.Group className="mb-3" as={Col} controlId="formGridState">
                <Form.Label>
                  Nominee current Capability Unit (if known)
                </Form.Label>
                <Form.Control
                  type="text"
                  name="nomineeUnit"
                  value={values.nomineeUnit}
                  onChange={handleChange}
                  isValid={touched.nomineeUnit && !errors.nomineeUnit}
                />
                {/* <Form.Select defaultValue="Choose...">
                  <option>--Select--</option>
                  <option>MAPII</option>
                  <option>Insights and Data</option>
                </Form.Select> */}
              </Form.Group>

              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridState">
                  <Form.Label> Category Nominated for* </Form.Label>
                  <Form.Control
                    type="text"
                    name="nomineeCategory"
                    value={values.nomineeCategory}
                    onChange={handleChange}
                    isValid={touched.nomineeCategory && !errors.nomineeCategory}
                  />
                  {/* <Form.Select defaultValue="Choose...">
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
                  </Form.Select> */}
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
                    Please tell us how you feel the nominee met the criteria for
                    the award that relates to the category :*
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="nomineeCriteria"
                    value={values.nomineeCriteria}
                    onChange={handleChange}
                    isValid={touched.nomineeCriteria && !errors.nomineeCriteria}
                    as="textarea"
                    rows={3}
                    placeholder="Enter Text"
                  />
                </Form.Group>

                <Form.Group
                  as={Col}
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea2"
                >
                  <br></br>
                  <Form.Label>
                    Any additional message you would want to add in the mail
                    body
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="nomineeComment"
                    value={values.nomineeComment}
                    onChange={handleChange}
                    isValid={touched.nomineeComment && !errors.nomineeComment}
                    as="textarea"
                    rows={3}
                    placeholder="Enter Text"
                  />
                </Form.Group>
              </Row>

              <Button type="submit" class="btn btn-primary" variant="primary">
                Next
              </Button>
            </Form>
          )}
        </Formik>
      </FormContainer>
    </>
  );
}
export default FormLayoutNominee;
