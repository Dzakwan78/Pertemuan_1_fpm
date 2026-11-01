import { IsBoolean, IsInt, IsNotEmpty, IsNumber, IsString, IsUUID, MaxLength, Min, } from 'class-validator';

export class CreateBookDto {
  @IsString()
  @IsNotEmpty({ message: 'Judul buku harus diisi' })
  @MaxLength(30, {
    message: 'Judul buku maksimal 30 karakter',
  })
  readonly title: string;

  @IsString()
  @IsNotEmpty({ message: 'ISBN harus diisi' })
  @MaxLength(45, {
    message: 'ISBN maksimal 45 karakter',
  })
  readonly isbn: string;

  @IsInt()
  @Min(0)
  readonly publishedYear: number;

  @IsBoolean()
  readonly isAvailable: boolean;

  @IsNumber()
  @Min(0)
  readonly price: number;

  @IsInt()
  @Min(0)
  readonly stock: number;

  @IsUUID()
  @IsNotEmpty({ message: 'Kategori buku harus dipilih' })
  readonly categoryId: string;

  @IsUUID()
  @IsNotEmpty({ message: 'Penerbit buku harus dipilih' })
  readonly publisherId: string;
}