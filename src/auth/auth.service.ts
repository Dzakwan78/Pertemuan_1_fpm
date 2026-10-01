import { Injectable } from '@nestjs/common';
import { RegisterDto } from './dto/register.dto.js';
import { User } from './entities/user-entity.dto.js';
import { LoginDto } from './dto/login.dto.js';

@Injectable()
export class AuthService {
    //register
    register(registerDto: RegisterDto): User {
        const newUser: User = {
            id: 1,
            username: registerDto.username,
            email: registerDto.email,
            password: registerDto.password
        };
        return newUser;
    }

    //login
    login(loginDto: LoginDto): { message: string } {
        return { message: 'Berhasil Login' };
    }

    //forgot password
    forgotPassword() {
        return { message: 'Password reset link sent successfully' };
    }

    //reset password
    resetPassword() {
        return { message: 'Password reset successfully' };
    }
}


