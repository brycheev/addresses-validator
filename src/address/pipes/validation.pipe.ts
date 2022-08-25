import {
  PipeTransform,
  Injectable,
  ArgumentMetadata,
  HttpException,
  HttpStatus,
  BadRequestException,
} from '@nestjs/common';
import { validate } from 'class-validator';
import { ConfigService } from '@nestjs/config';
import { RUSSIA, GERMANY, GREAT_BRITAIN } from '../../constants/countries';
import { plainToClass } from 'class-transformer';
import { CreateAddressRUDto } from '../dto/RU/createAddressRU.dto';
import { CreateAddressGBDto } from '../dto/GB/createAddressGB.dto';
import { CreateAddressDEDto } from '../dto/DE/createAddressDE.dto';

@Injectable()
export class ValidationPipe implements PipeTransform {
  constructor(private readonly config: ConfigService) {}
  private readonly dtoMap = {
    RU: CreateAddressRUDto,
    GB: CreateAddressGBDto,
    DE: CreateAddressDEDto,
  };
  async transform(value: any, metadata: ArgumentMetadata) {
    const country = this.config.get('app.country');
    if (this.isEmpty(value)) {
      throw new BadRequestException('Validation failed: No payload provided.');
    }
    const object = plainToClass(this.dtoMap[country], value);
    const errors = await validate(object);
    if (errors.length > 0) {
      throw new BadRequestException(this.formatErrors(errors));
    }
    return value;
  }

  private isEmpty(value: any) {
    return Object.keys(value).length < 1;
  }

  private formatErrors(errors: any[]) {
    const err = [];
    errors
      .map((error) => {
        for (const key in error.constraints) {
          err.push(error.constraints[key]);
        }
      })
      .join(', ');
    return err;
  }
}
