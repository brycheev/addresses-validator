import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateAddressDEDto {
  @IsString()
  @IsNotEmpty()
  country: string;

  @IsString()
  @IsOptional()
  region: string;

  @IsString()
  @IsNotEmpty()
  locality: string;

  @IsString()
  @IsNotEmpty()
  index: string;

  @IsString()
  @IsNotEmpty()
  street: string;

  @IsString()
  @IsNotEmpty()
  home: string;

  @IsString()
  @IsOptional()
  flat: string;

  @IsString()
  @IsOptional()
  extra: string;
}
