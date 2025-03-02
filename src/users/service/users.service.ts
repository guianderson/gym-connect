import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from '../entity/users.entity';
import { Repository } from 'typeorm';
import { Gym } from 'src/gyms/entities/gym.entity';
import { CreateUserDto } from '../dto/creteUser.dto';
import { encryptPass } from 'src/utils/encryptPass';
import { image2Base64 } from 'src/utils/image2base64';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private readonly userRepository: Repository<Users>,
  ) {}

  async create(createUserDto: CreateUserDto, file?: Express.Multer.File) {
    const { name, cpf, email, password, gymId } = createUserDto;

    const existingUser = await this.findByCpfAndEmail(cpf, email, {
      id: gymId,
    });

    if (existingUser) {
      throw new Error('User already exists');
    }

    const encryptedPassword = await encryptPass(password);
    const base64Image = file ? await image2Base64(file) : null;

    const user = this.userRepository.create({
      ...createUserDto,
      password: encryptedPassword,
      image: base64Image,
    });

    return this.userRepository.save(user);
  }

  async findByCpfAndEmail(
    cpf: string,
    email: string,
    gym: { id: number },
  ): Promise<Users | null> {
    return this.userRepository.findOne({ where: { cpf, email, gym } });
  }
}
