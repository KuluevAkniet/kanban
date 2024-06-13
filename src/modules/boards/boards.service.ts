import { Injectable,HttpException, HttpStatus  } from '@nestjs/common';
import { BoardRepository } from "../../db/repositories/board.repository";
import { UserRepository } from "../../db/repositories/user.repository";
import { CreateBoardDto } from './board.dto';
import { UpdateBoardDto } from './update.board.dto';

@Injectable()
export class BoardsService {
    constructor(
        private readonly boardRepository: BoardRepository,
        private readonly userRepository: UserRepository,
    ){}

    async createBoard(dto: CreateBoardDto){
        try{
            const user = await this.userRepository.findById(dto.userId)
            if (!user) {
                throw new Error('User not found');
            }
            const newBoard = await this.boardRepository.createBoard({
                ...dto,
            owner: user
            });
            return newBoard
        }catch(e){
            throw new HttpException(`Not found user`, HttpStatus.BAD_REQUEST);
        }
    }

    async updateBoard(id: number,dto: UpdateBoardDto){
        return await this.boardRepository.updateBoard(id, dto)
    }

    async getOneBoard(id: number){
        return await this.boardRepository.findById(id)
    }

    async getAll(){
        return await this.boardRepository.findAll()
    }

    async deleteBoard(id: number){
        return await this.boardRepository.deleteBoard(id)
    }
}
