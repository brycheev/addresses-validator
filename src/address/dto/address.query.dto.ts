import { ApiProperty } from '@nestjs/swagger';

export class AddressQueryDto {
  @ApiProperty({
    required: false,
    description: 'filter addresses by index',
  })
  index: string;

  @ApiProperty({
    required: false,
    description: 'filter addresses by locality',
  })
  locality: string;

  @ApiProperty({
    required: false,
    description: 'filter addresses by country',
  })
  country: string;
}
