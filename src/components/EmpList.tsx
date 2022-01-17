import {Emp} from './MyTypes'

type EmpListProps = {
    empList:Emp[]
}

function EmpList(props : EmpListProps) {
    return (
        <div>
            {
                props.empList.map(emp => <h2 key={emp.name}>{emp.name} {emp.dept}</h2>)
            }
        </div>
    )
}

export default EmpList