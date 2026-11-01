import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateAuthorDto {
  @IsString()
  @IsNotEmpty({ message: 'Nama pengarang harus diisi' })
  @MaxLength(150, {
    message: 'Nama pengarang maksimal 150 karakter',
  })
  readonly name: string;
}