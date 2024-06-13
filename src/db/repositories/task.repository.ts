import { Injectable } from "@nestjs/common";
import { Tasks } from "../../models/Tasks";
import { InjectRepository } from "@nestjs/typeorm";
import { BaseRepository } from "./base.repository";
import { Repository } from "typeorm";

@Injectable()
export class TaskRepository extends  BaseRepository<Tasks> {
    constructor(
        @InjectRepository(Tasks)
        protected readonly taskRepository: Repository<Tasks>
  
      ) {
        super();
      }
    
    async createTask(data: any){
      const task = await this.taskRepository.create(data)
      return await this.taskRepository.save(task)
    }

    async findById(criteria: any): Promise<Tasks>{
      return await this.taskRepository.findOne(criteria)
    }

    async findAll() {
      return this.taskRepository.find();
    }

    async updateTask(criteria: any, data: any) {
      return await this.taskRepository.update(criteria, data);
    }
    
    async deleteTask(id: number){
      return await this.taskRepository.delete(id)
    }
    
}