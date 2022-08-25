import { IsNotEmpty, IsOptional, IsString, MinLength, MaxLength } from 'class-validator';

export class CreateAddressRUDto {
  @IsString()
  @IsNotEmpty()
  country: string;

  @IsString()
  @IsNotEmpty()
  region: string;

  @IsString()
  @IsNotEmpty()
  locality: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(6)
  @MaxLength(6)
  index: string;

  @IsString()
  @IsOptional()
  street: string;

  @IsString()
  @IsOptional()
  home: string;

  @IsString()
  @IsOptional()
  flat: string;

  @IsString()
  @IsOptional()
  extra: string;
}
