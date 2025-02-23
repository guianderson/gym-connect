// src/gyms/dto/create-gym.dto.ts

import { IsString, IsNotEmpty, IsBoolean, IsNumber } from 'class-validator';

export class CreatePlanDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsNumber()
    @IsNotEmpty()
    price: number;

    @IsBoolean()
    status: boolean;
    default: true;

    @IsString()
    @IsNotEmpty()
    duration: string;
}
