import {
  IsNotEmpty,
  IsNumber,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateServiceDto {
  @IsNotEmpty()
  @MinLength(5)
  @MaxLength(100)
  @IsString()
  title!: string;

  @IsString()
  @IsNotEmpty()
  country!: string;

  @IsString()
  @IsNotEmpty()
  city!: string;

  @IsNumber()
  @IsNotEmpty()
  price!: number;

  discountPrice?: number;

  @IsNumber()
  @IsNotEmpty()
  stars?: number;

  @IsNotEmpty()
  images!: string[];

  @IsNotEmpty()
  @IsString()
  @MinLength(50)
  @MaxLength(200)
  aboutService!: string;

  @IsNotEmpty()
  threeSteps!: string[];

  @IsNotEmpty()
  youNeedToKnow!: string[];

  servicesComments?: Comment;

  @IsNumber()
  companiesId?: number;
}
