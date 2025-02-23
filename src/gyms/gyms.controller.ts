// src/gyms/gyms.controller.ts

import { Controller, Get, Post, Body, Param, UseInterceptors, UploadedFile } from '@nestjs/common';
import { GymsService } from './gyms.service';
import { CreateGymDto } from './dto/create-gym.dto';
import { Gym } from './entities/gym.entity';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('gyms')
export class GymsController {
  constructor(private readonly gymsService: GymsService) {}

  @Post()
  @UseInterceptors(FileInterceptor('image'))
  async create(@Body() createGymDto: CreateGymDto, @UploadedFile() file: Express.Multer.File) {
    return this.gymsService.create(createGymDto, file);
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
