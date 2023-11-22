import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpException,
  HttpStatus,
  ParseIntPipe,
  UseGuards,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { AuthorizationGuard } from 'src/authorization/authorization.guard';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto): Promise<any> {
    return await this.userService.create(createUserDto);
  }

  @UseGuards(AuthorizationGuard)
  @Get()
  findAll() {
    try {
      return this.userService.findAll();
    } catch (error) {
      throw new HttpException(
        { error: 'something went wrong..', status: HttpStatus.BAD_REQUEST },
        // { msg: 'something went wrong..', errorCode: HttpStatus.BAD_REQUEST },
        HttpStatus.BAD_REQUEST,
        { cause: 'dunno', description: 'I DUNNO' },
      );
    }
  }
  @Get(':id')
  findOne(
    @Param(
      'id',
      new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_FOUND }),
    )
    id: number,
  ) {
    try {
      return this.userService.findOne(id);
    } catch (error) {
      throw new HttpException(
        {
          message: 'Something went wrong!',
          errorCode: 404,
        },
        HttpStatus.BAD_REQUEST,
        { description: "We didn't find someone like this!" },
      );
    }
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: CreateUserDto) {
    return this.userService.update(+id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }

  @Post('find')
  validateUser(@Body() body) {
    return this.userService.validateUser(body.email, body.password);
  }
}
