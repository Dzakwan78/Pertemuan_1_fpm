// Tugas No 1

import { IsEmail, IsNotEmpty, IsString, MaxLength, } from 'class-validator';

export class CreateCustomerDto {
  @IsString()
  @IsNotEmpty({ message: 'Nama pelanggan harus diisi' })
  @MaxLength(150, {
    message: 'Nama pelanggan maksimal 150 karakter',
  })
  readonly name: string;

  @IsEmail({}, { message: 'Format email tidak valid' })
  @IsNotEmpty({ message: 'Email harus diisi' })
  @MaxLength(150, {
    message: 'Email maksimal 150 karakter',
  })
  readonly email: string;

  @IsString()
  @IsNotEmpty({ message: 'Nomor telepon harus diisi' })
  @MaxLength(20, {
    message: 'Nomor telepon maksimal 20 karakter',
  })
  readonly phone: string;
}