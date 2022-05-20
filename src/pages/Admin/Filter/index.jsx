import { Form, Row, Col, Button, Table } from "react-bootstrap";

import LogoHeader from "../../../components/Logo";
import SideBar from "../../../components/Sidebar";
import { Link } from "react-router-dom";
import {
  FormContainer,
  Title,
  TitleContainer,
  TableContainer,
  DateContainer,
  Dates,
  Dates2,
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
        <DateContainer>
          <Dates>
            <div className="date1">
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
          </Dates>
          <Dates2>
            <Dates>
              <div className="date2">
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
            </Dates>
          </Dates2>
          <Button variant="light">Download</Button>
        </DateContainer>
        {/* <TableContainer>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th colSpan={2}>Nominated by</th>
                <th colSpan={2}>Month of Nomination</th>
                <th colSpan={3}>Nominee Details</th>
                <th>Mail sent to Nominee</th>
                <th>Details</th>
              </tr>
              <tr>
                <th>Name</th>
                <th>CU</th>
                <th>Month</th>
                <th>Date</th>
                <th>Name</th>
                <th>CU</th>
                <th>Category</th>
                <th>Yes/No</th>
                <th>From the 250 Words Section</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
            </tbody>
          </Table> 
  </TableContainer>*/}
      </FormContainer>
    </>
  );
}
export default Filter;
