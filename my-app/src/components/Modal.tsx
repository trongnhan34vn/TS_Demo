import React, { ChangeEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { createEmployee } from "../redux/reducers/employeeSlice";
import { EmployeeDTO } from "../types/employee.type";

const initState : EmployeeDTO = {
  name:'',
  email: '',
  address: '',
  phone: ''
}

export default function Modal() {
  const [inputValue, setInputValue] = useState<EmployeeDTO>(initState);
  const dispatch = useDispatch()
  const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
    let name = e.target.name;
    let value = e.target.value;
    setInputValue({...inputValue, [name]: value});
  }

  const handleSubmit = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    dispatch(createEmployee(inputValue))
  }

  return (
    <div id="addEmployeeModal" className="modal fade">
      <div className="modal-dialog">
        <div className="modal-content">
          <form>
            <div className="modal-header">
              <h4 className="modal-title">Add Employee</h4>
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
                <input onChange={handleChange} value={inputValue.name} name="name" type="text" className="form-control" />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input onChange={handleChange} value={inputValue.email} name="email" type="email" className="form-control" />
              </div>
              <div className="form-group">
                <label>Address</label>
                <textarea onChange={handleChange} value={inputValue.address} name="address" className="form-control"/>
              </div>
              <div className="form-group">
                <label>Phone</label>
                <input onChange={handleChange} value={inputValue.phone} name="phone" type="text" className="form-control" />
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
                className="btn btn-success"
                defaultValue="Add"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
