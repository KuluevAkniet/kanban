import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Columns } from "../../models/Columns";
import { BaseRepository } from "./base.repository";
import { Repository } from "typeorm";

@Injectable()
export class ColumnRepository extends  BaseRepository<Columns> {
    constructor(
        @InjectRepository(Columns)
        protected readonly columnRepository: Repository<Columns>
  
      ) {
        super();
      }

    async createColumn(data: any){
        const board = await this.columnRepository.create(data)
        return await this.columnRepository.save(board)
    }

    async findById(criteria: any): Promise<Columns>{
        return await this.columnRepository.findOne(criteria)
      }

    async findAll() {
        return this.columnRepository.find();
    }

    async updateColumn(criteria: any, data: any) {
        return await this.columnRepository.update(criteria, data);
    }
    
    async deleteColumn(id: number){
        return await this.columnRepository.delete(id)
    }
}