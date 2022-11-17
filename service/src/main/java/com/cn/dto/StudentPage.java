package com.cn.dto;

import lombok.Data;

import java.util.List;

@Data
public class StudentPage {
    long total;
    List<Student> list;
}
