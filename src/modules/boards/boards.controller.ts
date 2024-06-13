import { BoardsService } from "./boards.service"
import { Body, Controller, Param, Post, Query, Patch, Delete, Get } from "@nestjs/common";
import { CreateBoardDto } from './board.dto';
import { UpdateBoardDto } from './update.board.dto';

@Controller('boards')
export class BoardsController {
    constructor(
        private readonly boardService: BoardsService,
    ){}

    @Post('create')
    async createBoard(
      @Body() dto: CreateBoardDto 
    ){
      return await this.boardService.createBoard(dto)
    }

    @Patch('update/:id')
    async updateBoard( 
      @Param('id') id: number,
      @Body() dto: UpdateBoardDto
    ){
      return await this.boardService.updateBoard(id, dto)
    }

    @Get('get/:id')
    async getOneBoard(@Param('id') id: number){
      return await this.boardService.getOneBoard(id)
    }

    @Get("all")
    async getAllBoards(){
      return await this.boardService.getAll()
    }

    @Delete('delete/:id')
    async deleteBoard(@Param('id') id: number){
      return await this.boardService.deleteBoard(id)
    }
}
