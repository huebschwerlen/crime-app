import React, { useState, useEffect } from "react";

const ReportForm = (props) => {
  const initialFieldValues = {
    name: "",
    location: "",
    title: "",
    crime: "",
  };

  var [values, setValues] = useState(initialFieldValues);

  useEffect(() => {
    if (props.currentId === "")
      setValues({
        ...initialFieldValues,
      });
    else
      setValues({
        ...props.reportObjects[props.currentId],
      });
  }, [props.currentId, props.reportObjects]);

  const handleInputChange = (e) => {
    var { name, value } = e.target;
    setValues({
      ...values,
      [name]: value, //have to use 'name'
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    props.addOrEdit(values);
  };

  return (
    <form autoComplete="off" onSubmit={handleFormSubmit}>
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
          onChange={handleInputChange}
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
            onChange={handleInputChange}
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
            placeholder="Title"
            name="title"
            value={values.title}
            onChange={handleInputChange}
          />
        </div>
      </div>

      <div className="form-group">
        <textarea
          className="form-control"
          placeholder="Crime Description"
          name="crime"
          value={values.crime}
          onChange={handleInputChange}
        />
      </div>

      <div className="form-group">
        <input
          type="submit"
          value={props.currentId === "" ? "Save" : "Update"}
          className="btn btn-primary btn-block"
        />
      </div>
    </form>
  );
};

export default ReportForm;
