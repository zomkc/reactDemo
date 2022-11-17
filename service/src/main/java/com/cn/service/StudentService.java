package com.cn.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.cn.dto.Student;

import java.util.List;

public interface StudentService extends IService<Student> {
    public List<Student> page(int page, int size);

    public long count();
}
