// Tugas No 10

import { IsDateString, IsNotEmpty, IsNumber, IsOptional, IsString, IsUUID, MaxLength, Min, } from 'class-validator';

export class CreatePaymentDto {
  @IsUUID()
  @IsNotEmpty({ message: 'ID pesanan harus diisi' })
  readonly orderId: string;

  @IsString()
  @IsNotEmpty({ message: 'Metode pembayaran harus diisi' })
  @MaxLength(50, {
    message: 'Metode pembayaran maksimal 50 karakter',
  })
  readonly paymentMethod: string;

  @IsNumber()
  @Min(0, { message: 'Jumlah pembayaran tidak boleh negatif' })
  readonly amount: number;

  @IsString()
  @IsNotEmpty({ message: 'Status pembayaran harus diisi' })
  @MaxLength(30, {
    message: 'Status pembayaran maksimal 30 karakter',
  })
  readonly status: string;

  @IsOptional()
  @IsDateString({}, { message: 'Format tanggal pembayaran tidak valid' })
  readonly paidAt?: string;
}