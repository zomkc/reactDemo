package com.cn.service.impl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.cn.dto.Student;
import com.cn.mapper.StudentMapper;
import com.cn.service.StudentService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

@Service
public class StudentServiceImpl extends ServiceImpl<StudentMapper, Student> implements StudentService {

    @Resource
    StudentMapper studentMapper;
    @Override
    public List<Student> page(int page, int size) {
       return studentMapper.page(page, size);
    }

    @Override
    public long count() {
        return studentMapper.count();
    }
}
