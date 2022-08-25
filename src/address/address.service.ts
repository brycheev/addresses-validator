import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AddressEntity } from './entites/address.entity';
import { Repository } from 'typeorm';
import { filterByCountry, filterByIndex, filterByLocality } from './filters/filters';

@Injectable()
export class AddressService {
  constructor(
    @InjectRepository(AddressEntity)
    private readonly addressRepository: Repository<AddressEntity>,
  ) {}

  async create(payload) {
    return await this.addressRepository.save(payload);
  }

  async find(query) {
    let addressQuery = await this.addressRepository.createQueryBuilder(
      'address',
    );
    if (query) {
      addressQuery = await filterByIndex(addressQuery, query);
      addressQuery = await filterByLocality(addressQuery, query);
      addressQuery = await filterByCountry(addressQuery, query);
    }
    return await addressQuery.getMany();
  }

  async findOne(id: number) {
    return await this.addressRepository.findOne({ where: { id } });
  }
}
