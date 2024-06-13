"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TasksService = void 0;
const common_1 = require("@nestjs/common");
const task_repository_1 = require("../../db/repositories/task.repository");
const Column_repository_1 = require("../../db/repositories/Column.repository");
let TasksService = class TasksService {
    constructor(taskRepository, columnRepository) {
        this.taskRepository = taskRepository;
        this.columnRepository = columnRepository;
    }
    async createTask(dto) {
        try {
            const column = await this.columnRepository.findById({ where: { id: dto.columnId } });
            if (!column) {
                throw new Error('task not found');
            }
            const newTask = await this.taskRepository.createTask({
                ...dto,
                column
            });
            return newTask;
        }
        catch (e) {
            console.log(e);
        }
    }
    async updateTask(id, dto) {
        return await this.taskRepository.updateTask(id, dto);
    }
    async findAll() {
        return await this.taskRepository.findAll();
    }
    async deleteTask(id) {
        return await this.taskRepository.deleteTask(id);
    }
};
exports.TasksService = TasksService;
exports.TasksService = TasksService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [task_repository_1.TaskRepository,
        Column_repository_1.ColumnRepository])
], TasksService);
//# sourceMappingURL=tasks.service.js.map