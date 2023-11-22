import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateServiceDto } from './dto/create-service.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ServicesService {
  constructor(private prisma: PrismaService) {}

  async create(createServiceDto: CreateServiceDto) {
    const service = this.prisma.services.create({
      data: {
        city: createServiceDto?.city,
        aboutService: createServiceDto?.aboutService,
        country: createServiceDto?.country,
        price: createServiceDto?.price,
        youNeedToKnow: createServiceDto?.youNeedToKnow,
        images: createServiceDto?.images,
        title: createServiceDto?.title,
        stars: createServiceDto?.stars,
        threeSteps: createServiceDto?.threeSteps,
        companiesId: createServiceDto?.companiesId,
      },
    });
    return service;
  }

  async findAll() {
    const services = await this.prisma.services.findMany();
    return services;
  }

  async findOne(id: number) {
    const service = await this.prisma.services.findUnique({
      where: {
        id: id,
      },
    });
    return service;
  }

  async update(id: number, dto: CreateServiceDto) {
    const service = await this.prisma.services.update({
      where: {
        id: id,
      },
      data: {
        city: dto.city,
        aboutService: dto.aboutService,
        country: dto.country,
        price: dto.price,
        youNeedToKnow: dto.youNeedToKnow,
        images: dto.images,
        title: dto.title,
        stars: dto.stars,
        threeSteps: dto.threeSteps,
      },
    });
    return service;
  }

  async remove(id: number) {
    try {
      const service = await this.prisma.services.delete({
        where: {
          id: id,
        },
      });
      return service;
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }
}
