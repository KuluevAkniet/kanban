import { Tasks } from "../../models/Tasks";
import { BaseRepository } from "./base.repository";
import { Repository } from "typeorm";
export declare class TaskRepository extends BaseRepository<Tasks> {
    protected readonly taskRepository: Repository<Tasks>;
    constructor(taskRepository: Repository<Tasks>);
    createTask(data: any): Promise<Tasks[]>;
    findById(criteria: any): Promise<Tasks>;
    findAll(): Promise<Tasks[]>;
    updateTask(criteria: any, data: any): Promise<import("typeorm").UpdateResult>;
    deleteTask(id: number): Promise<import("typeorm").DeleteResult>;
}
