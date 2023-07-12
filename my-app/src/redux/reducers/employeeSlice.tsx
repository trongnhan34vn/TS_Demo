import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialList } from "../../constant/employees";
import { Employee, EmployeeDTO } from "../../types/employee.type";


const initEmploy : Employee = {
  id: 0,
  name: '',
  email: '',
  address: '',
  phone: '',
}

const employeeSlice = createSlice({
  name: "employee",
  initialState: {
    list: initialList,
    selected: initEmploy,
  },
  reducers: {
    createEmployee: (state, action: PayloadAction<EmployeeDTO>) => {
      let newE = {
        ...action.payload,
        id: state.list[state.list.length - 1].id + 1,
      };
      state.list.push(newE);
    },
    findById: (state, action: PayloadAction<number>) => {
      let select = findByIdFn(state.list, action.payload);
      if (select) {
        state.selected = select;
      }
    },
    updateEmployee: (state, action: PayloadAction<Employee>) => {
       let index = state.list.findIndex((item) => item.id === action.payload.id);
       state.list[index] = action.payload
    }
  },
});

export default employeeSlice.reducer;
export const { createEmployee, findById, updateEmployee } = employeeSlice.actions;


const findByIdFn = (array: Employee[], id: number) : Employee | null => {
  let result : Employee | undefined = array.find((e) => e.id === id)
  if (result) {
    return result;
  }
  return null;
}