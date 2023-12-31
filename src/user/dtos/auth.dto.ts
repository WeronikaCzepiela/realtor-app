import {
  IsEmail,
  IsNotEmpty,
  IsString,
  Matches,
  MinLength,
  IsEnum,
  IsOptional,
} from 'class-validator';
import { UserType } from '@prisma/client';

export class SignupDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @Matches(/^(\+0?1\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/, {
    message: 'phone must be a valid phone number',
  })
  phone: string;

  @IsEmail()
  email: string;

  @IsString()
  @MinLength(5)
  password: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  productKey?: string;
}

export class SigninDto {
  @IsEmail()
  email: string;

  @IsString()
  password: string;
}

export class GenerateProductKeyDto {
  @IsEmail()
  email: string;

  @IsEnum(UserType)
  userType: UserType;
}
