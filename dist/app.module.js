"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const db_module_1 = require("./db/db.module");
const schedule_1 = require("@nestjs/schedule");
const users_module_1 = require("./modules/users/users.module");
const auth_module_1 = require("./modules/auth/auth.module");
const boards_module_1 = require("./modules/boards/boards.module");
const columns_controller_1 = require("./modules/columns/columns.controller");
const tasks_module_1 = require(".//modules/tasks/tasks.module");
const tasks_service_1 = require("./modules/tasks/tasks.service");
const tasks_controller_1 = require("./modules/tasks/tasks.controller");
const columns_service_1 = require("./modules/columns/columns.service");
const columns_module_1 = require("./modules/columns/columns.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [db_module_1.DbModule, schedule_1.ScheduleModule.forRoot(), users_module_1.UsersModule, auth_module_1.AuthModule, boards_module_1.BoardsModule, tasks_module_1.TasksModule, columns_module_1.ColumnsModule],
        controllers: [columns_controller_1.ColumnsController, tasks_controller_1.TasksController],
        providers: [columns_service_1.ColumnsService, tasks_service_1.TasksService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map