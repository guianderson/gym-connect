// src/gyms/gyms.service.ts

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateGymDto } from './dto/create-gym.dto';
import { Gym } from './entities/gym.entity';

@Injectable()
export class GymsService {
  constructor(
    @InjectRepository(Gym)
    private readonly gymRepository: Repository<Gym>,
  ) {}

  async create(createGymDto: CreateGymDto): Promise<Gym> {
    const gym = this.gymRepository.create(createGymDto);
    return this.gymRepository.save(gym);
  }

  findAll(): Promise<Gym[]> {
    return this.gymRepository.find();
  }

  async findOne(id: number): Promise<Gym> {
    const gym = await this.gymRepository.findOne({ where: { id } });
    if (!gym) {
      throw new Error(`Gym with id ${id} not found`);
    }
    return gym;
  }
}
