import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { AddressService } from './address.service';
import { ValidationPipe } from './pipes/validation.pipe';
import { CreateAddressDto } from './dto/createAddress.dto';
import { AddressQueryDto } from './dto/address.query.dto';

@Controller('address')
export class AddressController {
  constructor(private readonly addressService: AddressService) {}

  @Post()
  async create(@Body(ValidationPipe) payload: CreateAddressDto) {
    return await this.addressService.create(payload);
  }

  @Get()
  async find(@Query() query: AddressQueryDto) {
    return await this.addressService.find(query);
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return await this.addressService.findOne(id);
  }
}
