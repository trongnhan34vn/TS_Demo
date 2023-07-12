import React from "react";

export default function Toolbar() {
  return (
    <div className="col-sm-6">
      <a
        href="#addEmployeeModal"
        className="btn btn-success"
        data-toggle="modal"
      >
        <i className="material-icons"></i> <span>Add New Employee</span>
      </a>
      <a
        href="#deleteEmployeeModal"
        className="btn btn-danger"
        data-toggle="modal"
      >
        <i className="material-icons"></i> <span>Delete</span>
      </a>
    </div>
  );
}
