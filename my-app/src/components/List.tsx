import React from "react";
import Item from "./Item";
import { RootState } from "../redux/store";
import { Employee } from "../types/employee.type";
import { useSelector } from "react-redux";

export default function List() {
  const employees = useSelector((state: RootState) => state.employee.list);

  const employeesListElement = employees.map((employee : Employee) => {
    return (
      <Item employee={employee} key={employee.id} /> 
    )
  })
  return (
    <table className="table table-striped table-hover">
      <thead>
        <tr>
          <th>
            <span className="custom-checkbox">
              <input type="checkbox" id="selectAll" />
              <label htmlFor="selectAll" />
            </span>
          </th>
          <th>Name</th>
          <th>Email</th>
          <th>Address</th>
          <th>Phone</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {employeesListElement}
      </tbody>
    </table>
  );
}
