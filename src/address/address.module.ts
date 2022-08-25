import { Module } from '@nestjs/common';
import { AddressController } from './address.controller';
import { AddressService } from './address.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AddressEntity } from './entites/address.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AddressEntity]), ConfigModule],
  controllers: [AddressController],
  providers: [AddressService],
})
export class AddressModule {}
