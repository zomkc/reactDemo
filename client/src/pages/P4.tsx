import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { result } from "../mode/result";
import { Student } from "../mode/Student";

const HiddenContext = createContext(false)

export default function P4() {
    const [student, setStudent] = useState<Student[]>([])
    const [hidden, setHidden] = useState(false)
    useEffect(() => {
        async function getStudent() {
            const resp = await axios.get<result<Student[]>>("/api/student")
            setStudent(resp.data.data)
        }
        getStudent()
    }, [])
    function HideorShow() {
        setHidden((i) => {
            return !i
        })
    }

    return (<HiddenContext.Provider value={hidden}>
        <input type="button" value={hidden ? '显示' : '隐藏'} onClick={HideorShow} />
        <P5 students={student} />
            </HiddenContext.Provider>
    );
}

//负责处理学生集合
function P5({ students }: { students: Student[] }) {
    const list = students.map(i => <P6 key={i.id} student={i} />)
    return <>{list}</>;
}

//负责显示多个学生
function P6({ student }: { student: Student }) {
    const hidden = useContext(HiddenContext)
    const jsx = !hidden && student.age
    return <div>{student.name} {jsx}</div>;
}