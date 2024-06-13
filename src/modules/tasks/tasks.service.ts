import { Injectable } from '@nestjs/common';
import { TaskRepository } from "../../db/repositories/task.repository";
import { ColumnRepository } from "../../db/repositories/Column.repository";
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Injectable()
export class TasksService {
    constructor(
       private readonly taskRepository: TaskRepository,
       private readonly columnRepository: ColumnRepository
    ){}
    
    async createTask(dto: CreateTaskDto){
        try{
            const column = await this.columnRepository.findById({where: {id: dto.columnId}})
            if (!column) {
              throw new Error('task not found');
            }
            const newTask = await this.taskRepository.createTask({
              ...dto,
              column
            })
            return newTask
         }catch(e){
           console.log(e)
        }
    }

    async updateTask(id: number, dto: UpdateTaskDto){
        return await this.taskRepository.updateTask(id, dto)
    }

    async findAll(){
        return await this.taskRepository.findAll()
    }

    async deleteTask(id: number){
        return await this.taskRepository.deleteTask(id)
    }

}
