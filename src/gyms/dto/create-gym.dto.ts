// src/gyms/dto/create-gym.dto.ts

import {
  IsString,
  IsNotEmpty,
  IsPhoneNumber,
  IsOptional,
} from 'class-validator';

export class CreateGymDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  zipCode: string;

  @IsString()
  @IsNotEmpty()
  street: string;

  @IsString()
  @IsNotEmpty()
  city: string;

  @IsString()
  @IsNotEmpty()
  state: string;

  @IsString()
  @IsNotEmpty()
  number: string;

  @IsString()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  status: boolean;

  @IsPhoneNumber()
  phone: string;

  @IsString()
  @IsNotEmpty()
  planId: number;

  @IsOptional()
  image?: Express.Multer.File;

  @IsString()
  @IsNotEmpty()
  password: string;
}
