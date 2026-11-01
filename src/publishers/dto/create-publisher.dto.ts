// Tugas No 4

import { IsNotEmpty, IsString, MaxLength, } from 'class-validator';

export class CreatePublisherDto {
  @IsString()
  @IsNotEmpty({ message: 'Nama penerbit harus diisi' })
  @MaxLength(150, {
    message: 'Nama penerbit maksimal 150 karakter',
  })
  readonly name: string;
}