import SideBar from "../../components/Sidebar";
import "./FormLayoutNominator.css";

function FormLayoutNominator() {
  return (
    <>
      <SideBar />
      <h1 className="Title">Your Details</h1>
      <form>
        <div class="row mb-3">
          <label for="NomineeName" class="col-sm-2 col-form-label">
            Your Name
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
            Your Email
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
              Your current Capability Unit <span class="caret"></span>
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

        <div class="column">
          Date Submitted*
          <input
            type="name"
            class="form-control"
            id="Month"
            placeholder="Month"
          ></input>
        </div>
        <div class="column2">
          {" "}
          <input
            type="name"
            class="form-control"
            id="Day"
            placeholder="Day"
          ></input>
        </div>
        <div class="column3">
          {" "}
          <input
            type="name"
            class="form-control"
            id="Year"
            placeholder="Year"
          ></input>
        </div>

        <div class="row mb-3">
          <div class="col-sm-10 offset-sm-10">
            <button type="next" class="btn btn-primary">
              Submit
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

export default FormLayoutNominator;
