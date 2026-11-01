import { IsNotEmpty, IsString, MaxLength, } from 'class-validator';

export class CreateCategoryDto {
  @IsString()
  @IsNotEmpty({ message: 'Nama kategori harus diisi' })
  @MaxLength(100, {
    message: 'Nama kategori maksimal 100 karakter',
  })
  readonly name: string;
}