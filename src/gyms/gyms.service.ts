import { Injectable } from '@nestjs/common';
import { CreateGymDto } from './dto/create-gym.dto';
import { UpdateGymDto } from './dto/update-gym.dto';
import { Repository } from 'typeorm';
import { Gym } from './entities/gym.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class GymsService {

  private gymsRepository: Repository<Gym>;

  constructor(
    @InjectRepository(Gym) gymsRepository: Repository<Gym>) {
    this.gymsRepository = gymsRepository;
  }

  create(createGymDto: CreateGymDto) {
    const gym = this.gymsRepository.create(createGymDto);
    return this.gymsRepository.save(gym);
  }

  findAll() {
    return this.gymsRepository.find();
  }

  findOne(id: string) {
    return this.gymsRepository.findOne({ where: { id } });
  }

  async update(id: string, updateGymDto: UpdateGymDto) {
    const gym = await this.gymsRepository.findOne({ where: { id } });
    if (!gym) return null;
    this.gymsRepository.merge(gym, updateGymDto);
    return this.gymsRepository.save(gym);
  }

  async remove(id: string) {
    const gym = await this.gymsRepository.findOne({ where: { id } });
    if (!gym) return null;
    this.gymsRepository.softDelete(id);
    return gym;
  }
}
