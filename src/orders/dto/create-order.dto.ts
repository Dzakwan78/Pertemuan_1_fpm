// Tugas No 8

import { IsNotEmpty, IsString, IsUUID, MaxLength, IsNumber, Min, } from 'class-validator';

export class CreateOrderDto {
  @IsUUID()
  @IsNotEmpty({ message: 'ID pelanggan harus diisi' })
  readonly customerId: string;

  @IsString()
  @IsNotEmpty({ message: 'Nomor pesanan harus diisi' })
  @MaxLength(50, { message: 'Nomor pesanan maksimal 50 karakter' })
  readonly orderNumber: string;

  @IsString()
  @IsNotEmpty({ message: 'Status pesanan harus diisi' })
  @MaxLength(30, { message: 'Status pesanan maksimal 30 karakter' })
  readonly status: string;

  @IsNumber()
  @Min(0, { message: 'Total pembayaran tidak boleh negatif' })
  readonly totalAmount: number;
}
