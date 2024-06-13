import { UserRepository } from "../../db/repositories/user.repository";
import { CreateUserDto } from "./dto/create-user.dto";
import { Users } from "../../models/Users";
export declare class UsersService {
    private readonly userRepository;
    constructor(userRepository: UserRepository);
    createUser(createUserDto: CreateUserDto): Promise<Users>;
    findOneByEmail(email: string): Promise<Users>;
    findByLogin(login: string): Promise<Users>;
    findById(userId: number): Promise<Users>;
    updateUser(userId: number, dto: CreateUserDto): Promise<import("typeorm").UpdateResult>;
    updateToken(id: number, refreshToken: string): Promise<void>;
}
