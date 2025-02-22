// src/workouts/workouts.service.ts

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Workout } from '../entity/workouts.entity';
import { CreateWorkoutDto } from '../dto/create-workout.dto';

@Injectable()
export class WorkoutsService {
  constructor(
    @InjectRepository(Workout)
    private readonly workoutRepository: Repository<Workout>,
  ) {}

  async create(createWorkoutDto: CreateWorkoutDto): Promise<Workout> {
    const workout = this.workoutRepository.create(createWorkoutDto);
    return this.workoutRepository.save(workout);
  }

  findAll(): Promise<Workout[]> {
    return this.workoutRepository.find();
  }

  async findOne(id: number): Promise<Workout> {
    const workout = await this.workoutRepository.findOne({ where: { id } });
    if (!workout) {
      throw new Error(`Workout with id ${id} not found`);
    }
    return workout;
  }
}
