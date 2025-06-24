import {
  Max,
  Min,
  IsIn,
  IsInt,
  Matches,
  IsString,
  IsNumber,
  MaxLength,
  MinLength,
  ValidateIf,
} from 'class-validator';

export class CreateCategoryDto {
  @IsString({ message: ' نام باید متن نوشتاری باشد' })
  @MaxLength(50, { message: 'نام باید حداکثر 100 حرف باشد' })
  @MinLength(3, { message: 'نام باید حداقل شامل ۳ حرف باشد' })
  // @ValidateIf((object, value) => value !== undefined)
  @Matches(/^[\u0600-\u06FFA-Za-z0-9._/,-\s\u200C]*$/, {
    message: 'مقادیر ورودی معتبر نیست',
  })
  readonly title: string;

  @IsNumber(
    {
      allowNaN: false,
      allowInfinity: false,
    },
    { message: 'دسته‌بندی‌ والد باید عدد باشد' },
  )
  @ValidateIf((object, value) => value !== null)
  @Matches(/^[\u0600-\u06FFA-Za-z0-9._/,-\s\u200C]*$/, {
    message: 'مقادیر ورودی معتبر نیست',
  })
  readonly parentId: number;

}
