import { Table } from "antd";
import { ColumnsType, TablePaginationConfig } from "antd/lib/table";
import axios from "axios";
import { useEffect, useState } from "react";
import { Student } from "../mode/Student";



export default function A2() {
    const [student, setStudent] = useState<Student[]>([])
    const [loading, setLoading] = useState(true)
    const [pagination, setPagination] = useState<TablePaginationConfig>(
        //current,pageSize,分页条件     showSizeChanger: 开启每页显示条数   pageSizeOptions: 每页显示条数
        { current: 1, pageSize: 5, showSizeChanger: true , pageSizeOptions:[5,10,15,20]}
    )

    //参数: 新的分页数据
    function onTableChange(newPagination: TablePaginationConfig) {
        setPagination(newPagination)
    }

    useEffect(() => {
        async function getStudent() {
            const resp = await axios.get(`/api/student/page`, {
                params: {
                    page: pagination.current,
                    size: pagination.pageSize
                }
            })
            setStudent(resp.data.data.list)
            //total 返回数据表总条数,赋值给表单
            setPagination((old) => {
                return { ...old, total: resp.data.data.total }
            })
            setLoading(false)
        }
        getStudent()
    }, [pagination.current, pagination.pageSize])

    //title: 类标题 dataIndex: 要关联的属性名
    const columns: ColumnsType<Student> = [
        { title: '编号', dataIndex: 'id' },
        { title: '姓名', dataIndex: 'name' },
        { title: '性别', dataIndex: 'sex' },
        { title: '年龄', dataIndex: 'age' }
    ]


    //columns: 列定义
    //dataSource: 数据源
    //rowKey: 作为唯一标识的属性名
    //loading: 显示加载动画
    //pagination: 分页数据
    //onChange: 数据改变时触发,当页大小,页号改变时触发
    return (<div>
        
        <Table columns={columns}
        dataSource={student}
        rowKey='id' loading={loading}
        pagination={pagination}
        onChange={onTableChange}></Table>
            </div>);
}