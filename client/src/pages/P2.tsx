import { Student } from "../mode/Student"
import P1 from "./P1"

export default function P2({ students , hideAge = false}: { students: Student[] , hideAge?:boolean }) {

    // const array = [1,2,3]
    // const jsx = array.map(e => <p key={e}>{e}</p>)
    // //React.Fragment 简化写法: <> 元素 </>
    // return <>{jsx}</>;
    const list = students.map((s) => <P1 student={s} key={s.id} hideAge={hideAge} ></P1>)
    return <>{list}</>
}