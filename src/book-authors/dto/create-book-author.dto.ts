import { IsNotEmpty, IsUUID } from 'class-validator';

export class CreateBookAuthorDto {
  @IsUUID()
  @IsNotEmpty({ message: 'ID buku harus diisi' })
  readonly bookId: string;

  @IsUUID()
  @IsNotEmpty({ message: 'ID pengarang harus diisi' })
  readonly authorId: string;
}