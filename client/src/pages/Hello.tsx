// export default function Hello(props : {msg : string, age?: number}){
//     return <h1>{props.msg},{props.age}</h1>
// }
export default function Hello({msg , age = 20}:{msg: string, age?: number}){
    return <h1>{msg},{age}</h1>
}