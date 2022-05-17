import "./FormLayout.css";
import { useNavigate } from "react-router-dom";
import SideBar from "../../components/Sidebar";

function FormLayoutNominee() {
  const navigate = useNavigate();

  return (
    <>
      <SideBar />
      <h1 className="Title">Nominee Details</h1>
      <form>
        <div class="row mb-3">
          <label for="NomineeName" class="col-sm-2 col-form-label">
            Nominee Name
          </label>

          <div class="col-sm-10">
            <input
              type="name"
              class="form-control"
              id="NomineeName"
              placeholder="First Name"
            ></input>
            {/* <label for="NomineLastName" class="col-sm-2 col-form-label">
  </label> */}
            <div class="col-sm-10">
              <input
                type="name"
                class="form-control"
                id="NomineeLastName"
                placeholder="Last Name"
              ></input>
            </div>
          </div>
        </div>
        <div class="row mb-3">
          <label for="inputEmail" class="col-sm-2 col-form-label">
            Nominee Email
          </label>
          <div class="col-sm-10">
            <input
              type="email"
              class="form-control"
              id="inputEmail"
              placeholder="Email"
            ></input>
          </div>
        </div>

        <div class="col-sm-10 offset-sm-2">
          <div className="dropdown">
            <button
              class="btn btn-primary dropdown-toggle"
              type="button"
              data-toggle="dropdown"
            >
              Nominee current Capability Unit (if known){" "}
              <span class="caret"></span>
            </button>
            <div className="dropdown-menu">
              <li>
                <a href="#">MAPII</a>
              </li>
              <li>
                <a href="#">Insights and Data</a>
              </li>
            </div>
          </div>
        </div>
        <div class="col-sm-15 offset-sm-2">
          <div className="dropdown2">
            <button
              class="btn btn-primary dropdown-toggle"
              type="button"
              data-toggle="dropdown"
            >
              Category Nominated for* <span class="caret"></span>
            </button>
            <div className="dropdown-menu">
              <li>
                <a href="#">MAPII</a>
              </li>
              <li>
                <a href="#">Insights and Data</a>
              </li>
            </div>
          </div>

          <div class="row mb-3">
            <div class="col-sm-10 offset-sm-2">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="checkRemember"
                ></input>
                <label class="form-check-label" for="checkRemember">
                  Please tick the box if you want a mail to be sent to the
                  Candidate*
                </label>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="row mb-3">
              <div class="form-group">
                <label for="exampleFormControlTextarea1">
                  Please tell us how you feel the nominee meet the criteria for
                  the award that relates to the category :*
                </label>

                <textarea
                  class="form-control"
                  placeholder="Free form text 1"
                  id="exampleFormControlTextarea1"
                  rows="5"
                ></textarea>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="row mb-3">
              <div class="form-group">
                <label for="exampleFormControlTextarea1">
                  Any additional message you would want to add in the mail body
                </label>
                <textarea
                  class="form-control"
                  placeholder="Free form text 2"
                  id="exampleFormControlTextarea1"
                  rows="5"
                ></textarea>
              </div>
            </div>
          </div>
          <div class="row mb-3">
            <div class="col-sm-10 offset-sm-10">
              <button
                className="Nextbtn"
                onClick={() => {
                  navigate("/Nominator");
                }}
                type="next"
                class="btn btn-primary"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default FormLayoutNominee;
