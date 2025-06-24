import { IsBoolean, IsIn, IsNotEmpty, IsNumber, IsString, MaxLength, Min } from "class-validator";

export class CreateProductDto {
  @IsString()
  @IsNotEmpty({ message: 'کد محصول الزامی است' })
  code: string;

  @IsString()
  @IsNotEmpty({ message: 'نام محصول الزامی است' })
  name: string;

  @IsString()
  @MaxLength(500, { message: 'توضیحات نباید بیشتر از ۵۰۰ کاراکتر باشد' })
  description?: string;

  @IsNumber()
  @IsNotEmpty({ message: 'دسته‌بندی الزامی است' })
  categoryId: number;

  @IsString()
  @IsIn(['عدد', 'کیلو', 'لیتر'], { message: 'واحد سنجش معتبر نیست' })
  unit: string;

  @IsNumber()
  @Min(0)
  minStock: number;

  @IsNumber()
  @Min(0)
  maxStock: number;

  @IsBoolean()
  active: boolean;
}
