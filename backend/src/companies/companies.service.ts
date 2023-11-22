import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateCompanyDto } from './dto/create-company.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CompaniesService {
  constructor(private prisma: PrismaService) {}
  async create(createCompanyDto: CreateCompanyDto) {
    const company = await this.prisma.companies.create({
      data: {
        languages: createCompanyDto.languages,
        city: createCompanyDto.city,
        country: createCompanyDto.country,
        description: createCompanyDto.description,
        name: createCompanyDto.name,
        image: createCompanyDto.image,
        stars: createCompanyDto.stars,
      },
    });
    return company;
  }

  async findAll() {
    const companies = await this.prisma.companies.findMany({});
    return companies;
  }

  async findOne(id: number) {
    const company = await this.prisma.companies.findUnique({
      where: {
        id,
      },
    });
    if (!company) {
      throw new HttpException("Couldn't find company", HttpStatus.NOT_FOUND);
    } else {
      return company;
    }
  }

  async update(id: number, dto: CreateCompanyDto) {
    const company = await this.prisma.companies.update({
      where: {
        id,
      },
      data: {
        city: dto.city,
        country: dto.country,
        languages: dto.languages,
        name: dto.name,
        description: dto.description,
      },
    });
    if (!company) {
      throw new HttpException("Couldn't find company", HttpStatus.NOT_FOUND);
    } else {
      return company;
    }
  }

  async remove(id: number) {
    const company = await this.prisma.companies.delete({
      where: {
        id,
      },
    });
    if (!company) {
      throw new HttpException("Couldn't find company", HttpStatus.NOT_FOUND);
    } else {
      return company;
    }
  }
}
