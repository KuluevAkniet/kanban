import { Injectable } from '@nestjs/common';
import { UserRepository } from "../../db/repositories/user.repository";
import { CreateUserDto } from "./dto/create-user.dto";
import { Users } from "../../models/Users";

@Injectable()
export class UsersService {
  constructor(
    private readonly userRepository: UserRepository,
  ) {}
  async createUser(createUserDto: CreateUserDto) {
      return await this.userRepository.createUser(createUserDto)
  }

  async findOneByEmail(email: string) {
    return await this.userRepository.findByEmail(email)
  }

  async findByLogin(login: string) {
      return await this.userRepository.findByLogin(login)
  }

  async findById(userId: number) {
    return await this.userRepository.findById(userId)
  }

  async updateUser(userId: number, dto: CreateUserDto) {
    return await this.userRepository.updateUser(userId, dto)
  }

  async updateToken(id: number, refreshToken: string): Promise<void> {
    await this.userRepository.update(id, { refreshToken });
  }
}
