import React, { useState, useEffect } from "react";

const ReportForm = () => {
  const initialFieldValues = {
    name: "",
    location: "",
    crime: "",
  };

  var [values, setValues] = useState(initialFieldValues);

  return (
    <form autoComplete="off">
      <div className="form-group input-group">
        <div className="input-group-prepend">
          <div className="input-group-text">
            <i className="fas fa-user"></i>
          </div>
        </div>
        <input
          className="form-control"
          placeholder="Name"
          name="name"
          value={values.name}
        />
      </div>
      <div className="form-row">
        <div className="form-group input-group col-md-6">
          <div className="input-group-prepend">
            <div className="input-group-text">
              <i className="fas fa-compass"></i>
            </div>
          </div>
          <input
            className="form-control"
            placeholder="Location"
            name="location"
            value={values.location}
          />
        </div>
        <div className="form-group input-group col-md-6">
          <div className="input-group-prepend">
            <div className="input-group-text">
              <i className="fas fa-exclamation-triangle"></i>
            </div>
          </div>
          <input
            className="form-control"
            placeholder="Crime Description"
            name="crime"
            value={values.crime}
          />
        </div>
      </div>
    </form>
  );
};

export default ReportForm;
