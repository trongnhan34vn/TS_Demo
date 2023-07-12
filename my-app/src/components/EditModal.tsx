import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateEmployee } from "../redux/reducers/employeeSlice";
import { RootState } from "../redux/store";
import { Employee, EmployeeDTO } from "../types/employee.type";

const initState : Employee = {
  id: 0,
  name: '',
  email: '',
  address: '',
  phone: '',
}

export default function EditModal() {
  const dispatch = useDispatch();
  const [inputValue, setInputValue]= useState<Employee>(initState);
  const selectedEmployee : Employee = useSelector((state: RootState) => state.employee.selected);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
    let name = e.target.name;
    let value = e.target.value;
    setInputValue({...inputValue, [name]: value});
  }

  useEffect(() => {
    if (selectedEmployee) {
      setInputValue({
        id: selectedEmployee.id,
        name: selectedEmployee.name,
        address: selectedEmployee.address,
        email: selectedEmployee.email,
        phone: selectedEmployee.phone
      })
    }
  },[selectedEmployee])

  const handleSubmit = (e:React.FormEvent<HTMLInputElement>) => {
    e.preventDefault()
    dispatch(updateEmployee(inputValue));
  }
  return (
    <div id="editEmployeeModal" className="modal fade">
      <div className="modal-dialog">
        <div className="modal-content">
          <form>
            <div className="modal-header">
              <h4 className="modal-title">Edit Employee</h4>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-hidden="true"
              >
                ×
              </button>
            </div>
            <div className="modal-body">
              <div className="form-group">
                <label>Name</label>
                <input name="name" onChange={handleChange} value={inputValue.name} type="text" className="form-control" />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input name="email" onChange={handleChange}  value={inputValue.email} type="email" className="form-control" />
              </div>
              <div className="form-group">
                <label>Address</label>
                <textarea name="address" onChange={handleChange}  value={inputValue.address} className="form-control" />
              </div>
              <div className="form-group">
                <label>Phone</label>
                <input name="phone" onChange={handleChange}  value={inputValue.phone} type="text" className="form-control" />
              </div>
            </div>
            <div className="modal-footer">
              <input
                type="button"
                className="btn btn-default"
                data-dismiss="modal"
                defaultValue="Cancel"
              />
              <input
                onClick={handleSubmit}
                type="submit"
                className="btn btn-info"
                defaultValue="Save"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
