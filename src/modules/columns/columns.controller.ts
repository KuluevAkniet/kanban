import { Controller, Body, Param, Post, Query, Patch, Delete, Get } from '@nestjs/common';
import { ColumnsService } from "./columns.service";
import { CreateColumnDto } from './dto/create-column.dto';
import { UpdateColumnDto } from './dto/update-column.dto';

@Controller('columns')
export class ColumnsController {
    constructor(
       private readonly  columnsService: ColumnsService
    ){}

    @Post('create')
    async createColumn(
        @Body() dto: CreateColumnDto
    ){
      return await this.columnsService.createColumn(dto)
    }

    @Patch('update')
    async updateColumn(
    @Param('id') id: number,
    @Body() dto: UpdateColumnDto 
    ){
      return await this.columnsService.updateColumn(id, dto)
    }

    @Get('findAll')
    async findAll(){
      return await this.columnsService.findAll()
    }

    @Delete('deleteColumn')
    async deleteColumn(@Param('id') id: number){
       return await this.columnsService.deleteColumn(id)
    }

}
