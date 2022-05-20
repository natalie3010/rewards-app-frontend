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
import { useState } from "react";
import axios from "axios";

function Filter() {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  function downloadSpreadsheet(startDate, endDate) {
    const URL = `http://localhost:8080/v1/nominations/spreadsheet/${startDate}/${endDate}`;

    axios
      .get(URL, {
        responseType: "blob",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then((res) => {
        const url = window.URL.createObjectURL(new Blob([res.data]));

        const link = document.createElement("a");

        link.href = url;

        link.setAttribute("download", `nominations.xlsx`);

        document.body.appendChild(link);

        link.click();

        link.parentNode.removeChild(link);
      })
      .catch((err) => {
        console.error(err);
      });
  }
  return (
    <>
      <LogoHeader></LogoHeader>

      <FormContainer>
        <TitleContainer>
          <Title>Download Nominations</Title>
        </TitleContainer>
        <DateContainer>
          <Dates>
            <div className="date1">
              <div className="row">
                <div className="col-md-4">
                  <Form.Group controlId="startDate">
                    <Form.Label>Start Date</Form.Label>
                    <Form.Control
                      type="date"
                      name="start"
                      placeholder="Start Date"
                      onChange={(e) => {
                        setStartDate(e.target.value);
                      }}
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
                    <Form.Group controlId="endDate">
                      <Form.Label>End Date</Form.Label>
                      <Form.Control
                        type="date"
                        name="end"
                        placeholder="End Date"
                        onChange={(e) => {
                          setEndDate(e.target.value);
                        }}
                      />
                    </Form.Group>
                  </div>
                </div>
              </div>
            </Dates>
          </Dates2>
          <Button
            variant="light"
            onClick={() => {
              console.log(startDate, endDate);
              downloadSpreadsheet(startDate, endDate);
            }}
          >
            Download
          </Button>
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
