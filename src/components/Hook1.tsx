import React,{useState} from 'react'

type MyUser = {
    name:string
    email:string
}

function Hook1() {
    const [user,setUser] = useState<MyUser>({} as MyUser)

    return (
        <div>
            <button onClick={()=>setUser({
                name:'Test',email:'xyz'
            })}>Load User</button>
            Name:{user.name}
            Email:{user.email}
        </div>
    )
}

export default Hook1