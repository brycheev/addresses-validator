import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateAddressGBDto {
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
