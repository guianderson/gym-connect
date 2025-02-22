// src/gyms/dto/create-gym.dto.ts

import { IsString, IsNotEmpty, IsPhoneNumber } from 'class-validator';

export class CreateGymDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  address: string;

  @IsPhoneNumber()
  phone: string;
}
