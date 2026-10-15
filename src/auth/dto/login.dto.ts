import {
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
  Matches,
} from 'class-validator';

export class LoginDto {
  @IsNotEmpty({ message: 'Username harus diisi' })
  @IsString({ message: 'Username harus berupa teks' })
  @MaxLength(30, {
    message: 'Username maksimal 30 karakter',
  })
  readonly username: string;

  @IsNotEmpty({ message: 'Password harus diisi' })
  @MinLength(3, {
    message: 'Password minimal 3 angka',
  })
  @MaxLength(16, {
    message: 'Password maksimal 16 angka',
  })
  @Matches(/^[0-9]+$/, {
    message: 'Password harus berupa angka',
  })
  readonly password: string;
}