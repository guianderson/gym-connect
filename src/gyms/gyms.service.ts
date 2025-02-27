import { ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateGymDto } from './dto/create-gym.dto';
import { Gym } from './entities/gym.entity';
import { encryptPass } from 'src/utils/encryptPass';
import { image2Base64 } from 'src/utils/image2base64';
import { cleanCpfCnpj } from 'src/utils/formatCpfCnpj';

@Injectable()
export class GymsService {
  constructor(
    @InjectRepository(Gym)
    private readonly gymRepository: Repository<Gym>,
  ) {}

  async create(createGymDto: CreateGymDto, file?: Express.Multer.File) {
    const cnpj = cleanCpfCnpj(createGymDto.cnpj);
    const gymExists = await this.findByCnpj(cnpj);
    if (gymExists) {
      throw new ConflictException(`Failed to create gym.`);
    }

    const encryptedPassword = await encryptPass(createGymDto.password);
    const base64Image = file ? await image2Base64(file) : null;

    const gym = this.gymRepository.create({
      ...createGymDto,
      cnpj: cnpj,
      password: encryptedPassword,
      image: base64Image,
    });

    return this.gymRepository.save(gym);
  }

  async findByCnpj(cnpj: string): Promise<Gym | null> {
    return this.gymRepository.findOne({ where: { cnpj } });
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
