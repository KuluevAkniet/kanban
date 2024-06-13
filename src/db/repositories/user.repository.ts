import { Injectable } from "@nestjs/common";
import { BaseRepository } from "./base.repository";
import { Users } from "../../models/Users";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateUserDto } from "../../modules/users/dto/create-user.dto";

@Injectable()
export class UserRepository extends  BaseRepository<Users>{
    constructor(
      @InjectRepository(Users)
      protected readonly userRepository: Repository<Users>

    ) {
      super();
    }

    async createUser(dto: CreateUserDto){
      const user = await this.userRepository.create(dto)
      return this.userRepository.save(user)
    }

    async findByEmail(email: string){
      return await this.userRepository.findOne({
        where: { email }
      })
    }

    async findByLogin(login: string){
      return await this.userRepository.findOne({
        where: { login }
      })
    }

    async findById(criteria: any): Promise<Users>{
      return await this.userRepository.findOne(criteria)
    }

    async updateUser(id: number, user: CreateUserDto){
      return await this.userRepository.update(id, user)
    }

    async updateToken(id: number, data: any) {
      return await this.repository.update(id, data)
    }
}