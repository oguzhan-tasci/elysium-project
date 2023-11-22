import {
  IsEmail,
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  @IsNotEmpty()
  email!: string;

  @IsNotEmpty()
  @MinLength(5)
  @MaxLength(20)
  hash!: string;

  @IsString()
  @MinLength(5)
  @MaxLength(20)
  @IsNotEmpty()
  firstName!: string;

  @IsString()
  @MinLength(5)
  @MaxLength(20)
  @IsNotEmpty()
  lastName!: string;

  @IsNotEmpty()
  phoneNumber!: string;

  @IsString()
  @IsNotEmpty()
  country!: string;
}
