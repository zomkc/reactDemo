import axios from "axios";
import { useEffect, useState } from "react";
import { result } from "../mode/result";
import { Student } from "../mode/Student";

export default function P3({ id = 1 }: { id?: number }) {
    
    const [student, setStudent] = useState({ name: 'xx' })

    useEffect(() =>{
        async function getByid() {
            const resp = await axios.get<result<Student>>(`/api/student/${id}`)
            setStudent(resp.data.data)
        }
        getByid()
    },[id])
    

    return <h2>{student.name}</h2>;
}