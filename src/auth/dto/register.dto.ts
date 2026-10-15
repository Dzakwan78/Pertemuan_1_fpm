import {
    IsEmail,
    IsNotEmpty,
    MaxLength,
    MinLength,
    Validate,
    ValidatorConstraint,
    ValidatorConstraintInterface,
    ValidationArguments,
} from "class-validator";

@ValidatorConstraint({ name: "matchPassword", async: false })
class MatchPasswordConstraint implements ValidatorConstraintInterface {
    validate(confirmPassword: string, args: ValidationArguments) {
        const object = args.object as RegisterDto;
        return confirmPassword === object.password;
    }

    defaultMessage() {
        return "password konfirmasi harus sama dengan password";
    }
}

export class RegisterDto {
    @IsNotEmpty({ message: "username harus di isi" })
    @MaxLength(30, { message: "maksimal 30 karakter" })
    readonly username: string;

    @IsNotEmpty({ message: "email harus di isi" })
    @IsEmail({}, { message: "format email tidak valid" })
    readonly email: string;

    @IsNotEmpty({ message: "password harus di isi" })
    @MinLength(3, { message: "Minimal 3 karakter" })
    @MaxLength(16, { message: "maksimal 16 karakter" })
    readonly password: string;

    @IsNotEmpty({ message: "password konfirmasi harus di isi" })
    @MinLength(3, { message: "Minimal 3 karakter" })
    @MaxLength(16, { message: "maksimal 16 karakter" })
    @Validate(MatchPasswordConstraint)
    readonly confirmPassword: string;
}