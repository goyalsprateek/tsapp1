import {EmployeeProps} from './MyTypes'



function Employee(props:EmployeeProps) {
    return (
        <div>
            {props.emp.name}  {props.emp.dept} {props.emp.age}
        </div>
    )
}

export default Employee
