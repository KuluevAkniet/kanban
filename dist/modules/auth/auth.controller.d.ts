import { AuthService } from "./auth.service";
import { CreateUserDto } from "../users/dto/create-user.dto";
import { LoginDto } from "../users/dto/login.dto";
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    registration(createUserDto: CreateUserDto): Promise<import("../../models/Users").Users>;
    login(dto: LoginDto): Promise<{
        access: string;
        refresh: string;
    }>;
    logout(userId: number): Promise<string>;
}
