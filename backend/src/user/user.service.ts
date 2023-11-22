import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import { comparePassword, encodePassword } from 'src/utils/bcrypt';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto) {
    const user = await this.prisma.user.create({
      data: {
        country: createUserDto.country,
        email: createUserDto.email,
        firstName: createUserDto.firstName,
        hash: encodePassword(createUserDto.hash),
        lastName: createUserDto.lastName,
        phoneNumber: createUserDto.phoneNumber,
      },
    });
    console.log(bcrypt.compareSync(user.hash, createUserDto.hash));
    return user;
  }

  async findAll() {
    const users = await this.prisma.user.findMany();
    return users;
  }

  async findOne(id: number): Promise<CreateUserDto> {
    const user = await this.prisma.user.findUnique({ where: { id: id } });
    if (!user) {
      throw new HttpException('There is no such user', HttpStatus.BAD_REQUEST);
    } else {
      return user;
    }
  }

  async update(id: number, dto: CreateUserDto) {
    const user = await this.prisma.user.update({
      where: {
        id: id,
      },
      data: dto,
    });
    return user;
  }

  async remove(id: number) {
    const user = await this.prisma.user.delete({
      where: {
        id: id,
      },
    });
    return user;
  }

  async validateUser(email: string, password: string) {
    const user = await this.prisma.user.findUnique({
      where: {
        email: email,
      },
    });
    const matchedPassword = comparePassword(password, user.hash);
    if (matchedPassword) {
      console.log('User validation success!');
      return user;
    } else {
      console.log('User validation failure!');
      throw new HttpException('User validation failure', HttpStatus.NOT_FOUND);
    }
  }
}
