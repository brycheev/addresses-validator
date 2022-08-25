import {
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateAddressDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  country: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  region: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  locality: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  index: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  street: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  home: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  flat: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  extra: string;
}
