import { TaskRepository } from "../../db/repositories/task.repository";
import { ColumnRepository } from "../../db/repositories/Column.repository";
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
export declare class TasksService {
    private readonly taskRepository;
    private readonly columnRepository;
    constructor(taskRepository: TaskRepository, columnRepository: ColumnRepository);
    createTask(dto: CreateTaskDto): Promise<import("../../models/Tasks").Tasks[]>;
    updateTask(id: number, dto: UpdateTaskDto): Promise<import("typeorm").UpdateResult>;
    findAll(): Promise<import("../../models/Tasks").Tasks[]>;
    deleteTask(id: number): Promise<import("typeorm").DeleteResult>;
}
