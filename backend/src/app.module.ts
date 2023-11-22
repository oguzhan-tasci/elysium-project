import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { ServicesModule } from './services/services.module';
import { CompaniesModule } from './companies/companies.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    PrismaModule,
    UserModule,
    ServicesModule,
    CompaniesModule,
  ],
})
export class AppModule {}
