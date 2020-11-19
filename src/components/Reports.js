import React, { useState, useEffect } from "react";
import ReportForm from "./ReportForm";
import firebaseDb from "../firebase";

const Reports = () => {
  var [reportObjects, setReportObjects] = useState({});
  var [currentId, setCurentId] = useState("");

  useEffect(() => {
    firebaseDb.child("reports").on("value", (snapshot) => {
      if (snapshot.val() != null)
        setReportObjects({
          ...snapshot.val(),
        });
      else {
        setReportObjects({});
      }
    });
  }, []); //similar to componentDidMount

  const addOrEdit = (obj) => {
    if (currentId === "") {
      firebaseDb.child("reports").push(obj, (err) => {
        if (err) console.log(err);
        else setCurentId("");
      });
    } else {
      firebaseDb.child(`reports/${currentId}`).set(obj, (err) => {
        if (err) console.log(err);
        else setCurentId("");
      });
    }
  };

  const onDelete = (key) => {
    if (window.confirm("Are you sure you want to delete?")) {
      firebaseDb.child(`reports/${key}`).remove((err) => {
        if (err) console.log(err);
        else setCurentId("");
      });
    }
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
          <ReportForm {...{ addOrEdit, currentId, reportObjects }} />
        </div>
        <div className="col-md-7">
          <table className="table table-borderless table-stripped">
            <thead className="thead-light">
              <tr>
                <th>Name</th>
                <th>Location</th>
                <th>Title</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(reportObjects).map((id) => {
                return (
                  <tr key={id}>
                    <td>{reportObjects[id].name}</td>
                    <td>{reportObjects[id].location}</td>
                    <td>{reportObjects[id].title}</td>
                    <td>
                      <a
                        className="btn text-primary"
                        onClick={() => {
                          setCurentId();
                        }}
                      >
                        <i className="fas fa-pencil-alt"></i>
                      </a>
                      <a
                        className="btn text-danger"
                        onClick={() => {
                          onDelete(id);
                        }}
                      >
                        <i className="fas fa-trash-alt"></i>
                      </a>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Reports;
