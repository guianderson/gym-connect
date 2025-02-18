import { IsBase64, IsEmail, IsString } from "class-validator";

export class CreateGymDto {
    @IsString()
    name: string;
    
    @IsString()
    city: string;

    @IsString()
    state: string;

    @IsString()
    street: string;

    @IsString()
    neighborhood: string;

    @IsString()
    number: string;

    @IsString()
    zipcode: string;

    @IsString()
    phone: string;

    @IsEmail()
    email: string;

    @IsString()
    website: string;

    @IsString()
    description: string;

    @IsBase64()
    gymImage: string;
}