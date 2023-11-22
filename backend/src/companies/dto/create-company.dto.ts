import {
  IsNotEmpty,
  IsNumber,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';
import { CreateServiceDto } from 'src/services/dto/create-service.dto';

export class CreateCompanyDto {
  @IsString()
  @MinLength(5)
  @MaxLength(30)
  @IsNotEmpty()
  name!: string;

  @IsString()
  @IsNotEmpty()
  country!: string;

  @IsString()
  @IsNotEmpty()
  city!: string;

  @IsString()
  @MinLength(5)
  @MaxLength(200)
  @IsNotEmpty()
  description!: string;

  @IsNotEmpty()
  languages!: string[];

  @IsNumber()
  @IsNotEmpty()
  stars?: number;

  @IsNotEmpty()
  image: string;

  services?: CreateServiceDto[];

  companyComments: any[];
}
