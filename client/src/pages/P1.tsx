import "../css/P1.css"
import { Student } from "../mode/Student"

export default function P1({ student, hideAge = false }: { student: Student, hideAge?: boolean }) {
  const ageFragment = !hideAge && <> 年龄 {student.age}</>;

  return (
    <div className='student'>
      <div className='photo'>
        <img src={student.photo} alt="" />
      </div>
      <h1>{student.name}</h1>
      <h2>{student.id}</h2>
      <p>性别 {student.sex}  {ageFragment}</p>
    </div>
  )
}