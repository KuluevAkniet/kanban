import { BaseRepository } from "./base.repository";
import { Users } from "../../models/Users";
import { Repository } from "typeorm";
import { CreateUserDto } from "../../modules/users/dto/create-user.dto";
export declare class UserRepository extends BaseRepository<Users> {
    protected readonly userRepository: Repository<Users>;
    constructor(userRepository: Repository<Users>);
    createUser(dto: CreateUserDto): Promise<Users>;
    findByEmail(email: string): Promise<Users>;
    findByLogin(login: string): Promise<Users>;
    findById(criteria: any): Promise<Users>;
    updateUser(id: number, user: CreateUserDto): Promise<import("typeorm").UpdateResult>;
    updateToken(id: number, data: any): Promise<import("typeorm").UpdateResult>;
}
