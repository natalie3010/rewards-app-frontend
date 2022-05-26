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
import axios from "axios";
import {
  FormContainer,
  Title,
  TitleContainer,
  IconImg,
  BackBtn,
} from "./NomineeElements";
import Icon from "../../assets/i.svg";
import "./NomineeStyling.css";
import { useNavigate } from "react-router-dom";
import "./NomineeStyling.css";
import * as yup from "yup";
import { Formik } from "formik";

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

  const schema = yup.object().shape({
    nomineeName: yup.string().required(),
    nomineeEmail: yup.string().email().required(),
    nomineeCapUnit: yup.number().required(),
    categoryNominated: yup.string().required(),
    electorName: yup.string().required(),
    electorEmail: yup.string().email().required(),
    electorCapUnit: yup.number().required(),
    nominationDescription: yup.string().required(),
    nominationEmailMessage: yup.string().required(),
    sendMail: yup.bool(),
  });

  const navigate = useNavigate();
  const [step, setStep] = useState(0);

  function nextStep() {
    if (step < 1) {
      setStep(step + 1);
    }
  }

  function prevStep() {
    if (step > 0) {
      setStep(step - 1);
    }
  }

  function sendData(values) {
    console.log("clicked");
    console.log(values);
    axios
      .post(`https://nomination-rewardsportal.azurewebsites.net/v1/nominations/nomination`, values, {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then((res) => {
        console.log(res);
        if (res) {
          window.location.reload(false);
        }
      });
  }

  return (
    <>
      <LogoHeader></LogoHeader>
      <SideBar></SideBar>
      <FormContainer>
        <TitleContainer>
          <Title> {step === 0 ? "Nominee Details" : "Your Details"} </Title>
        </TitleContainer>
        <Formik
          id="form"
          validationSchema={schema}
          onSubmit={(values) => sendData(values)}
          initialValues={{
            nomineeName: "",
            nomineeEmail: "",
            nomineeCapUnit: "",
            categoryNominated: "",
            electorName: "",
            electorEmail: "",
            electorCapUnit: "",
            nominationDescription: "",
            nominationEmailMessage: "",
            sendMail: false,
          }}
        >
          {({
            handleSubmit,
            handleChange,
            values,
            touched,
            isValid,
            errors,
          }) => (
            <Form onSubmit={handleSubmit}>
              {step === 0 && (
                <>
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
                  <Form.Group
                    className="mb-3"
                    as={Col}
                    controlId="formGridState"
                  >
                    <Form.Label>
                      Nominee current Capability Unit (if known)
                    </Form.Label>

                    {/* <Form.Control
                      type="text"
                      name="nomineeUnit"
                      value={values.nomineeCapUnit}
                      onChange={handleChange}
                      isValid={touched.nomineeCapUnit && !errors.nomineeCapUnit}
                    /> */}

                    <Form.Select
                      type="dropdown"
                      name="nomineeCapUnit"
                      value={values.nomineeCapUnit}
                      onChange={handleChange}
                      isValid={touched.nomineeCapUnit && !errors.nomineeCapUnit}
                    >
                      <option defaultValue>--Select--</option>

                      {apiGetUnits.data?.map((unit, i) => (
                        <option key={i} value={unit.id}>
                          {unit.capabilityName}
                        </option>
                      ))}
                    </Form.Select>
                  </Form.Group>
                  <Row className="mb-3">
                    <Form.Group as={Col}>
                      <Form.Label>
                        {" "}
                        Category Nominated for*{" "}
                        <OverlayTrigger
                          placement="right"
                          delay={{ show: 250, hide: 400 }}
                          overlay={renderTooltip}
                        >
                          <IconImg src={Icon} />
                        </OverlayTrigger>
                      </Form.Label>

                      <Form.Select
                        type="dropdown"
                        name="categoryNominated"
                        value={values.categoryNominated}
                        onChange={handleChange}
                        isValid={
                          touched.categoryNominated && !errors.categoryNominated
                        }
                      >
                        <option defaultValue>--Select--</option>

                        {apiGetCategory.data?.map((category, i) => (
                          <option key={i} value={category.id}>
                            {category.categoryName}
                          </option>
                        ))}
                      </Form.Select>
                    </Form.Group>
                    <Form.Group as={Col} id="formGridCheckbox">
                      <Form.Check
                        type="checkbox"
                        name="sendMail"
                        value={values.sendMail}
                        onChange={handleChange}
                        label="Please tick the box if you want a mail to be sent to the
                    Candidate"
                      />
                    </Form.Group>
                  </Row>
                  <Row className="mb-3">
                    <Form.Group
                      as={Col}
                      controlId="exampleForm.ControlTextarea1"
                    >
                      <Form.Label>
                        {" "}
                        Please tell us how you feel the nominee met the criteria
                        for the award that relates to the category :*
                      </Form.Label>
                      <Form.Control
                        type="text"
                        name="nominationDescription"
                        value={values.nominationDescription}
                        onChange={handleChange}
                        isValid={
                          touched.nominationDescription &&
                          !errors.nominationDescription
                        }
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
                        name="nominationEmailMessage"
                        value={values.nominationEmailMessage}
                        onChange={handleChange}
                        isValid={
                          touched.nominationEmailMessage &&
                          !errors.nominationEmailMessage
                        }
                        as="textarea"
                        rows={3}
                        placeholder="Enter Text"
                      />
                    </Form.Group>
                  </Row>
                  <Button
                    type="button"
                    className="btn btn-primary"
                    variant="primary"
                    onClick={nextStep}
                  >
                    Next
                  </Button>
                </>
              )}

              {step === 1 && (
                <>
                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridNomineeName">
                      <Form.Label>Your Name</Form.Label>
                      <Form.Control
                        type="text"
                        name="electorName"
                        placeholder="Enter your name"
                        value={values.electorName}
                        onChange={handleChange}
                        isValid={touched.electorName && !errors.electorName}
                      />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridEmail">
                      <Form.Label>Your Email</Form.Label>
                      <Form.Control
                        type="email"
                        name="electorEmail"
                        placeholder="Enter your email"
                        value={values.electorEmail}
                        onChange={handleChange}
                        isValid={touched.electorEmail && !errors.electorEmail}
                      />
                    </Form.Group>
                  </Row>
                  <Form.Group
                    className="mb-3"
                    as={Col}
                    controlId="formGridState"
                  >
                    <Form.Label> Your current Capability Unit</Form.Label>
                    <Form.Select
                      type="dropdown"
                      name="electorCapUnit"
                      value={values.electorCapUnit}
                      onChange={handleChange}
                      isValid={touched.electorCapUnit && !errors.electorCapUnit}
                    >
                      <option defaultValue>--Select--</option>

                      {apiGetUnits.data?.map((unit, i) => (
                        <option key={i} value={unit.id}>
                          {unit.capabilityName}
                        </option>
                      ))}
                    </Form.Select>
                  </Form.Group>

                  <br></br>
                  <br></br>
                  <Row className="mb-3">
                    <Button type="submit" className="btn btn-primary">
                      Submit
                    </Button>
                    {/* </Link> */}{" "}
                    <BackBtn>
                      <Button
                        type="back"
                        className="btn btn-primary2"
                        variant="primary"
                        onClick={prevStep}
                      >
                        Back
                      </Button>
                    </BackBtn>
                  </Row>
                </>
              )}
            </Form>
          )}
        </Formik>
      </FormContainer>
    </>
  );
}
export default FormLayoutNominee;
