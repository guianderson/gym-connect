import { IsString, IsNotEmpty, IsBoolean, IsNumber } from 'class-validator';

export class UpdatePlanDto {
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
