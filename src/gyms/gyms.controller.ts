// src/gyms/gyms.controller.ts

import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { GymsService } from './gyms.service';
import { CreateGymDto } from './dto/create-gym.dto';
import { Gym } from './entities/gym.entity';

@Controller('gyms')
export class GymsController {
  constructor(private readonly gymsService: GymsService) {}

  @Post()
  create(@Body() createGymDto: CreateGymDto): Promise<Gym> {
    return this.gymsService.create(createGymDto);
  }

  @Get()
  findAll(): Promise<Gym[]> {
    return this.gymsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Gym> {
    return this.gymsService.findOne(id);
  }
}
