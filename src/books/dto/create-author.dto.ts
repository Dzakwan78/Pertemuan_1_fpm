import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateAuthorDto {
  @IsString()
  @IsNotEmpty({ message: 'Nama pengarang harus diisi' })
  @MaxLength(100, { message: 'Nama pengarang maksimal 100 karakter' })
  readonly nama_pengarang: string;

  @IsString()
  @IsNotEmpty({ message: 'Foto harus diisi' })
  @MaxLength(100, { message: 'Foto maksimal 100 karakter' })
  readonly foto: string;

  @IsString()
  @IsNotEmpty({ message: 'Alamat harus diisi' })
  @MaxLength(100, { message: 'Alamat maksimal 100 karakter' })
  readonly alamat: string;
}