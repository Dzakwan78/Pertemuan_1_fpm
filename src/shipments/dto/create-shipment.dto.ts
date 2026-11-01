import { IsDateString, IsNotEmpty, IsOptional, IsString, IsUUID, MaxLength, } from 'class-validator';

export class CreateShipmentDto {
  @IsUUID()
  @IsNotEmpty({ message: 'ID pesanan harus diisi' })
  readonly orderId: string;

  @IsString()
  @IsNotEmpty({ message: 'Nama kurir harus diisi' })
  @MaxLength(100, { message: 'Nama kurir maksimal 100 karakter' })
  readonly courier: string;

  @IsOptional()
  @IsString()
  @MaxLength(100, { message: 'Nomor pelacakan maksimal 100 karakter' })
  readonly trackingNumber?: string;

  @IsString()
  @IsNotEmpty({ message: 'Status pengiriman harus diisi' })
  @MaxLength(30, { message: 'Status pengiriman maksimal 30 karakter' })
  readonly status: string;

  @IsOptional()
  @IsDateString({}, { message: 'Format tanggal pengiriman tidak valid' })
  readonly shippedAt?: string;

  @IsOptional()
  @IsDateString({}, { message: 'Format tanggal diterima tidak valid' })
  readonly deliveredAt?: string;
}