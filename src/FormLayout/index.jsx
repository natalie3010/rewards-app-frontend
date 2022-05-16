import "./FormLayout.css";

function FormLayout() {
  return (
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
      {/* <div class="row mb-3">
        <label for="inputPassword" class="col-sm-2 col-form-label">
          Password
        </label>
        <div class="col-sm-10">
          <input
            type="password"
            class="form-control"
            id="inputPassword"
            placeholder="Password"
          ></input>
        </div>
      </div> */}
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
        <div class="col-sm-10 offset-sm-2">
          <button type="next" class="btn btn-primary">
            Next
          </button>
        </div>
      </div>
    </form>
  );
}

export default FormLayout;
