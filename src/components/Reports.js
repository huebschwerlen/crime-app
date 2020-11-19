import React from "react";
import ReportForm from "./ReportForm";

const Reports = () => {
  return (
    <>
      <div class="jumbotron jumbotron-fluid">
        <div class="container">
          <h1 class="display-4 text-center">Report Crime</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-md-5">
          <ReportForm />
        </div>
        <div className="col-md-7">
          <div>List of Reports</div>
        </div>
      </div>
    </>
  );
};

export default Reports;
