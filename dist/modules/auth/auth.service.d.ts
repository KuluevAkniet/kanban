import { UsersService } from "../users/users.service";
import { CreateUserDto } from "../users/dto/create-user.dto";
import { ConfigService } from '@nestjs/config';
import { LoginDto } from "../users/dto/login.dto";
import { Users } from "../../models/Users";
import { JwtService } from "@nestjs/jwt";
export declare class AuthService {
    private readonly userService;
    private readonly jwtService;
    private readonly configService;
    constructor(userService: UsersService, jwtService: JwtService, configService: ConfigService);
    registration(dto: CreateUserDto): Promise<Users>;
    login(dto: LoginDto): Promise<{
        access: string;
        refresh: string;
    }>;
    logOut(userId: number): Promise<string>;
    hashPassword(password: string): Promise<{
        password: string;
    }>;
    generateToken(user: Users): Promise<{
        access: string;
        refresh: string;
    }>;
    refreshToken(userId: number, rt: string): Promise<{
        access: string;
        refresh: string;
    }>;
    updateHash(id: number, rt: string): Promise<void>;
}
