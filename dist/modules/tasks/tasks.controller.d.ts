import { TasksService } from "./tasks.service";
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
export declare class TasksController {
    private readonly tasksService;
    constructor(tasksService: TasksService);
    createTask(dto: CreateTaskDto): Promise<import("../../models/Tasks").Tasks[]>;
    updateColumn(id: number, dto: UpdateTaskDto): Promise<import("typeorm").UpdateResult>;
    findAll(): Promise<import("../../models/Tasks").Tasks[]>;
    deleteTask(id: number): Promise<import("typeorm").DeleteResult>;
}
