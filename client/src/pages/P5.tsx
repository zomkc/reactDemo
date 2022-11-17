import axios from "axios";
import React, {useState } from "react";

export default function P5() {
    const [student, setStudent] = useState({name: '林青霞', sex: '女', age: 18 })

    const options = ['男', '女']
    const jsx = options.map((o) =>
        <option key={o}>{o}</option>
    )
    // e:事件对象, e.target:事件源
    function onChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
        // console.log(e.target.value+""+e.target.name);
        setStudent((old) => {
            return { ...old, [e.target.name]: e.target.value };
        })
    }

    async function onClick(){
       const resp = await axios.post(`/api/student`,student)
       alert(resp.data.data   );
       
    }

    return (
        <form >
            <div>
                <label>姓名</label>
                <input type="text" value={student.name} name='name' onChange={onChange} />
            </div>
            <div>
                <label>性别</label>
                <select name='sex' value={student.sex} onChange={onChange}>
                    {jsx}
                </select>
            </div>
            <div>
                <label>年龄</label>
                <input type="text" value={student.age} name='age' onChange={onChange} />
            </div>
            <div>
                <input type='button' value={"新增"} onClick={onClick}/>
            </div>
        </form>
    );
}