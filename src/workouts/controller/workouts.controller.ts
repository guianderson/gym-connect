// src/workouts/workouts.controller.ts

import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { WorkoutsService } from '../service/workouts.service';
import { Workout } from '../entity/workouts.entity';
import { CreateWorkoutDto } from '../dto/create-workout.dto';

@Controller('workouts')
export class WorkoutsController {
  constructor(private readonly workoutsService: WorkoutsService) {}

  @Post()
  create(@Body() createWorkoutDto: CreateWorkoutDto): Promise<Workout> {
    return this.workoutsService.create(createWorkoutDto);
  }

  @Get()
  findAll(): Promise<Workout[]> {
    return this.workoutsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Workout> {
    return this.workoutsService.findOne(id);
  }
}
