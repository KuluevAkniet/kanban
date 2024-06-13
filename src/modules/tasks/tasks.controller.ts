import { Controller, Body, Param, Post, Query, Patch, Delete, Get } from '@nestjs/common';
import { TasksService } from "./tasks.service";
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Controller('tasks')
export class TasksController {
     constructor(
        private readonly  tasksService: TasksService
     ){}

     @Post('create')
     async createTask(
         @Body() dto: CreateTaskDto
     ){
       return await this.tasksService.createTask(dto)
     }
 
     @Patch('update')
     async updateColumn(
     @Param('id') id: number,
     @Body() dto: UpdateTaskDto 
     ){
       return await this.tasksService.updateTask(id, dto)
     }
 
     @Get('findAll')
     async findAll(){
       return await this.tasksService.findAll()
     }
 
     @Delete('deleteTask')
     async deleteTask(@Param('id') id: number){
        return await this.tasksService.deleteTask(id)
     }
}
