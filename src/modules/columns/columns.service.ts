import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { BoardRepository } from "../../db/repositories/board.repository";
import { ColumnRepository } from "../../db/repositories/Column.repository";
import { CreateColumnDto } from './dto/create-column.dto';
import { UpdateColumnDto } from './dto/update-column.dto';

@Injectable()
export class ColumnsService {
    constructor(
        private readonly boardRepository: BoardRepository,
        private readonly columnRepository: ColumnRepository
    ){}

    async createColumn(dto: CreateColumnDto){
       try{
          const board = await this.boardRepository.findById({
            where: dto.boardId
          })
          if (!board) {
            throw new Error('board not found');
          }
          const newColumn = await this.columnRepository.createColumn({
            ...dto,
            board
          })
          return newColumn
       }catch(e){
         console.log(e)
       }
    }

    async updateColumn(id: number, dto: UpdateColumnDto){
        return await this.columnRepository.updateColumn(id, dto)
    }

    async findAll(){
        return await this.columnRepository.findAll()
    }

    async deleteColumn(id: number){
        return await this.columnRepository.deleteColumn(id)
    }

}
