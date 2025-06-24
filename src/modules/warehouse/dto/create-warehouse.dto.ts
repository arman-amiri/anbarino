import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsBoolean } from 'class-validator';

export class CreateWarehouseDto {
  @ApiProperty({
    description: 'Name of the warehouse',
    example: 'Main Warehouse',
  })
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    description: 'Address of the warehouse',
    example: '123 Main St, Tehran',
    required: false,
  })
  @IsOptional()
  address?: string;

  @ApiProperty({
    description: 'Manager of the warehouse',
    example: 'John Doe',
    required: false,
  })
  @IsOptional()
  manager?: string;

  @ApiProperty({
    description: 'Contact phone number',
    example: '+982112345678',
    required: false,
  })
  @IsOptional()
  phone?: string;

  @ApiProperty({
    description: 'Whether the warehouse is active',
    example: true,
    default: true,
    required: false,
  })
  @IsBoolean()
  @IsOptional()
  active?: boolean;
}
