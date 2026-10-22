import { IsInt, IsOptional, IsString } from 'class-validator';

export class UpdateBookDto {
  @IsOptional()
  @IsString({ message: 'Title harus berupa teks' })
  readonly title?: string;

  @IsOptional()
  @IsString({ message: 'Author harus berupa teks' })
  readonly author?: string;

  @IsOptional()
  @IsString({ message: 'ISBN harus berupa teks' })
  readonly isbn?: string;

  @IsOptional()
  @IsInt({ message: 'Published Year harus berupa angka' })
  readonly publishedYear?: number;
}