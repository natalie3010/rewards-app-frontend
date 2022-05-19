import { Form, Row, Col, Button, Table } from "react-bootstrap";
import LogoHeader from "../../../components/Logo";
import SideBar from "../../../components/Sidebar";
import { Link } from "react-router-dom";
import {
  FormContainer,
  Title,
  TitleContainer,
  TableContainer,
} from "./FilterElements";
import "./FilterStyling.css";

function Filter() {
  return (
    <>
      <LogoHeader></LogoHeader>

      <FormContainer>
        <TitleContainer>
          <Title> Admin Filter</Title>
        </TitleContainer>
        <div>
          <div className="row">
            <div className="col-md-4">
              <Form.Group controlId="dob">
                <Form.Label>Select Date</Form.Label>
                <Form.Control
                  type="date"
                  name="dob"
                  placeholder="Date of Birth"
                />
              </Form.Group>
            </div>
          </div>
        </div>
        <div>
          <div className="row">
            <div className="col-md-4">
              <Form.Group controlId="dob">
                <Form.Label>Select Date</Form.Label>
                <Form.Control
                  type="date"
                  name="dob"
                  placeholder="Date of Birth"
                />
              </Form.Group>
            </div>
          </div>
        </div>
        <TableContainer>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Username</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <td>3</td>
                <td colSpan={2}>Larry the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </Table>
          <Button variant="light">Download</Button>
        </TableContainer>
      </FormContainer>
    </>
  );
}
export default Filter;
