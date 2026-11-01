// Tugas No 9

import { IsInt, IsNotEmpty, IsNumber, IsUUID, Min, } from 'class-validator';

export class CreateOrderItemDto {
  @IsUUID()
  @IsNotEmpty({ message: 'ID pesanan harus diisi' })
  readonly orderId: string;

  @IsUUID()
  @IsNotEmpty({ message: 'ID buku harus diisi' })
  readonly bookId: string;

  @IsInt()
  @Min(1, { message: 'Jumlah buku minimal 1' })
  readonly quantity: number;

  @IsNumber()
  @Min(0, { message: 'Harga buku tidak boleh negatif' })
  readonly price: number;

  @IsNumber()
  @Min(0, { message: 'Subtotal tidak boleh negatif' })
  readonly subtotal: number;
}
