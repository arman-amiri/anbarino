import { IsBoolean, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateSupplierDto {
  @IsNotEmpty()
  name: string;

  @IsOptional()
  taxCode?: string;

  @IsOptional()
  address?: string;

  @IsOptional()
  phone?: string;

  @IsOptional()
  email?: string;

  @IsOptional()
  bankAccount?: string;

  @IsOptional()
  contactPerson?: string;

  @IsBoolean()
  @IsOptional()
  active?: boolean;
}
