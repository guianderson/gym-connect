// src/students/students.controller.ts

import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { StudentsService } from '../service/students.service';
import { CreateStudentDto } from '../dto/create-student.dto';
import { Student } from '../entity/students.entity';

@Controller('students')
export class StudentsController {
  constructor(private readonly studentsService: StudentsService) {}

  @Post()
  create(@Body() createStudentDto: CreateStudentDto): Promise<Student> {
    return this.studentsService.create(createStudentDto);
  }

  @Get()
  findAll(): Promise<Student[]> {
    return this.studentsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Student> {
    return this.studentsService.findOne(id);
  }
}
