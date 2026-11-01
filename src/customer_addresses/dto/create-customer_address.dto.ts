// Tugas No 2

import { IsNotEmpty, IsString, IsUUID, MaxLength } from 'class-validator';

export class CreateCustomerAddressDto {
  @IsUUID()
  @IsNotEmpty({ message: 'ID pelanggan harus diisi' })
  readonly customerId: string;

  @IsString()
  @IsNotEmpty({ message: 'Nama penerima harus diisi' })
  @MaxLength(150, {
    message: 'Nama penerima maksimal 150 karakter',
  })
  readonly recipientName: string;

  @IsString()
  @IsNotEmpty({ message: 'Nomor telepon harus diisi' })
  @MaxLength(20, {
    message: 'Nomor telepon maksimal 20 karakter',
  })
  readonly phone: string;

  @IsString()
  @IsNotEmpty({ message: 'Alamat harus diisi' })
  readonly address: string;

  @IsString()
  @IsNotEmpty({ message: 'Kota harus diisi' })
  @MaxLength(100, {
    message: 'Nama kota maksimal 100 karakter',
  })
  readonly city: string;

  @IsString()
  @IsNotEmpty({ message: 'Kode pos harus diisi' })
  @MaxLength(10, {
    message: 'Kode pos maksimal 10 karakter',
  })
  readonly postalCode: string;
}