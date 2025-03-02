import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { UserType } from 'src/enums/userType.enum';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  cpf: string;

  @IsString()
  zipCode: string;

  @IsString()
  street: string;

  @IsString()
  neighborhood: string;

  @IsString()
  city: string;

  @IsString()
  state: string;

  @IsString()
  number: string;

  @IsString()
  phone: string;

  @IsString()
  email: string;

  @IsString()
  status: boolean;

  @IsOptional()
  image?: Express.Multer.File;

  @IsString()
  password: string;

  @IsString()
  userType: UserType;

  @IsString()
  @IsNotEmpty()
  gymId: number;
}
