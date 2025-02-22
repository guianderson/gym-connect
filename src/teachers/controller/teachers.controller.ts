// src/teachers/teachers.controller.ts

import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { TeachersService } from '../service/teachers.service';
import { CreateTeacherDto } from '../dto/create-teacher.dto';
import { Teacher } from '../entity/teachers.entity';

@Controller('teachers')
export class TeachersController {
  constructor(private readonly teachersService: TeachersService) {}

  @Post()
  create(@Body() createTeacherDto: CreateTeacherDto): Promise<Teacher> {
    return this.teachersService.create(createTeacherDto);
  }

  @Get()
  findAll(): Promise<Teacher[]> {
    return this.teachersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Teacher> {
    return this.teachersService.findOne(id);
  }
}
