import React from "react";
import { useDispatch } from "react-redux";
import { findById } from "../redux/reducers/employeeSlice";
import { Employee } from "../types/employee.type";

interface EmployeeType {
  employee: Employee
}

export default function Item({employee} : EmployeeType) {
  const dispatch = useDispatch();
  const handleSelectEmployee = () => {
    dispatch(findById(employee.id));
  }
  return (
    <tr>
      <td>
        <span className="custom-checkbox">
          <input
            type="checkbox"
            id="checkbox1"
            name="options[]"
            defaultValue={1}
          />
          <label htmlFor="checkbox1" />
        </span>
      </td>
      <td>{employee.name}</td>
      <td>{employee.email}</td>
      <td>{employee.address}</td>
      <td>{employee.phone}</td>
      <td>
        <a onClick={handleSelectEmployee} href="#editEmployeeModal" className="edit" data-toggle="modal">
          <i className="material-icons" data-toggle="tooltip" title="Edit">
            
          </i>
        </a>
        <a href="#deleteEmployeeModal" className="delete" data-toggle="modal">
          <i className="material-icons" data-toggle="tooltip" title="Delete">
            
          </i>
        </a>
      </td>
    </tr>
  );
}
