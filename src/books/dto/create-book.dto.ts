
import { IsBoolean, IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreateBookDto {
  @IsString()
  @IsNotEmpty({ message: 'Title harus di isi' })
  readonly title: string;

  @IsString()
  @IsNotEmpty({ message: 'Author harus di isi' })
  readonly author: string;

  @IsString()
  @IsNotEmpty({ message: 'ISBN harus di isi' })
  readonly isbn: string;

  @IsInt({ message: 'Tahun terbit harus berupa angka bulat' })
  readonly publishedYear: number;

  @IsBoolean({ message: 'Status ketersediaan harus berupa boolean' })
  readonly isAvailable: boolean;
}