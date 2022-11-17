import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import zhCN from 'antd/es/locale/zh_CN'
import { ConfigProvider } from 'antd';
import A3 from './pages2/A3';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

// const stu1 = {id:1,name:"张三",sex:"男",age:18,photo:"/logo512.png"}
// const stu2 = {id:2,name:"李四",sex:"女",age:17,photo:"/logo512.png"}

// root.render(
//   <React.StrictMode>
//     {/* <App /> */}
//     {/* <Hello msg='hello,react' age={8}/>
//     <Hello msg='hello,react'/> */}
//     {/* <P1 student={stu1} /> */}
//     {/* <P2 students={[stu1,stu2]} hideAge={true} /> */}
//     <P3 id={1}/>
//   </React.StrictMode>
// );

root.render(
  // <P3 id={1}></P3>
  // <P4/>>
  // <P5/>
  <ConfigProvider locale={zhCN}>
    {/* <A1/> */}
    {/* <A2/> */}
    <A3/>
  </ConfigProvider>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
