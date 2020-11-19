import React from "react";
import ReportForm from "./ReportForm";
import firebaseDb from "../firebase";

const Reports = () => {
  const addOrEdit = (obj) => {
    firebaseDb.child("reports").push(obj, (err) => {
      if (err) console.log(err);
    });
  };

  return (
    <>
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4 text-center">Report Crime</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-md-5">
          <ReportForm addOrEdit={addOrEdit} />
        </div>
        <div className="col-md-7">
          <div>List of Reports</div>
        </div>
      </div>
    </>
  );
};

export default Reports;
