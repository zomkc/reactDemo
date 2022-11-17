package com.cn.controller;

import com.cn.dto.Result;
import com.cn.dto.Student;
import com.cn.dto.StudentPage;
import com.cn.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class StudentController {

    @Autowired
    private StudentService studentService;

    @GetMapping("/student/{id}")
    public Result<Student> getByid(@PathVariable int id) throws InterruptedException {
        Thread.sleep(2000);
        Student byId = studentService.getById(id);
        return Result.success(byId);
    }

    @GetMapping("/student")
    public Result<List> get() throws InterruptedException {
        Thread.sleep(2000);
        List<Student> list = studentService.list();
        return Result.success(list);
    }

    @PostMapping("/student")
    public Result insert(@RequestBody Student student){
        studentService.save(student);
        return Result.success("新增成功");
    }

    //分页
    @GetMapping("/student/page")
    public Result<StudentPage> page(int page,int size){
        List<Student> students = studentService.page( (page-1) * size , size);
        long count = studentService.count();

        StudentPage studentPage = new StudentPage();
        studentPage.setTotal(count);
        studentPage.setList(students);

        return Result.success(studentPage);
    }
}
