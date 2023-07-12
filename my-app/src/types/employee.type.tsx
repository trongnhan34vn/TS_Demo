export interface EmployeeDTO {
    name: string,
    email: string,
    address: string,
    phone: string
}

export interface Employee extends EmployeeDTO {
    id: number,
}