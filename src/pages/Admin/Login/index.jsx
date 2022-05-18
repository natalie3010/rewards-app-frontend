import { Form, Row, Col, Button } from "react-bootstrap";
import LogoHeader from "../../../components/Logo";
import SideBar from "../../../components/Sidebar";
import { Link } from "react-router-dom";
import { FormContainer, Title, TitleContainer } from "./LoginElements";
import "./LoginStyling.css";
function Login() {
  return (
    <>
      <LogoHeader></LogoHeader>
      <SideBar></SideBar>
      <FormContainer>
        <TitleContainer>
          <Title> Login</Title>
        </TitleContainer>
        <Form>
          <Row className="mb-3">
            <Form.Group controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter Email" />
            </Form.Group>
          </Row>
          <Form.Group controlId="formGridNomineeName">
            <Form.Label> Password </Form.Label>
            <Form.Control type="password" placeholder="Enter Password" />
          </Form.Group>
          {/*         
          <Link to=""> */}
          <br></br>
          <br></br>
          <Button type="Sign in" class="btn btn-primary" variant="primary">
            Sign in
          </Button>
          {/* </Link> */}
        </Form>
      </FormContainer>
    </>
  );
}

export default Login;
