import { Injectable } from "@nestjs/common";
import { Boards } from "../../models/Boards";
import { InjectRepository } from "@nestjs/typeorm";
import { BaseRepository } from "./base.repository";
import { Repository } from "typeorm";

@Injectable()
export class BoardRepository extends BaseRepository<Boards> {
    constructor(
        @InjectRepository(Boards)
        protected readonly boardRepository: Repository<Boards>
    ){
        super();
    }

    async createBoard(data: any){
        const board = await this.boardRepository.create(data)
        return await this.boardRepository.save(board)
    }

    async findById(criteria: any): Promise<Boards>{
        return await this.boardRepository.findOne(criteria)
    }

    async findAll() {
        return this.boardRepository.find();
    }

    async updateBoard(criteria: any, data: any) {
        return await this.boardRepository.update(criteria, data);
    }
    
    async deleteBoard(id: number){
        return await this.boardRepository.delete(id)
    }
}

