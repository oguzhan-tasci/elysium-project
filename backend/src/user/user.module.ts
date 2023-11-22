import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { DenemeMiddleware } from 'src/deneme/deneme.middleware';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [UserController],
  providers: [UserService, PrismaService],
})
export class UserModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(DenemeMiddleware)
      .exclude({ path: 'user', method: RequestMethod.POST })
      .forRoutes({ path: 'user', method: RequestMethod.GET });
  }
  // configure(consumer: MiddlewareConsumer) {
  //   consumer.apply(DenemeMiddleware).forRoutes('user');
  // }
}
