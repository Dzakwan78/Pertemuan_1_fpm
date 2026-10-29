import { IsEmail, IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty({ message: 'Nama harus diisi' })
  @MaxLength(65, { message: 'Nama maksimal 65 karakter' })
  readonly nama: string;

  @IsEmail({}, { message: 'Format email tidak valid' })
  @IsNotEmpty({ message: 'Email harus diisi' })
  @MaxLength(100, { message: 'Email maksimal 100 karakter' })
  readonly email: string;

  @IsString()
  @IsNotEmpty({ message: 'Password harus diisi' })
  @MinLength(8, { message: 'Password minimal 8 karakter' })
  @MaxLength(255, { message: 'Password maksimal 255 karakter' })
  readonly password: string;

  @IsString()
  @IsNotEmpty({ message: 'Nomor telepon harus diisi' })
  @MaxLength(100, { message: 'Nomor telepon maksimal 100 karakter' })
  readonly phone: string;

  @IsString()
  @IsNotEmpty({ message: 'Alamat harus diisi' })
  @MaxLength(255, { message: 'Alamat maksimal 255 karakter' })
  readonly alamat: string;
}