"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const config_1 = require("@nestjs/config");
const typeorm_config_service_1 = require("./typeorm-config.service");
const Users_1 = require("../models/Users");
const Boards_1 = require("../models/Boards");
const Columns_1 = require("../models/Columns");
const Tasks_1 = require("../models/Tasks");
const user_repository_1 = require("./repositories/user.repository");
const Column_repository_1 = require("./repositories/Column.repository");
const task_repository_1 = require("./repositories/task.repository");
const board_repository_1 = require("./repositories/board.repository");
let DbModule = class DbModule {
};
exports.DbModule = DbModule;
exports.DbModule = DbModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
            }),
            typeorm_1.TypeOrmModule.forRootAsync({
                imports: [config_1.ConfigModule],
                useClass: typeorm_config_service_1.TypeormConfigService,
                inject: [config_1.ConfigService],
            }),
            typeorm_1.TypeOrmModule.forFeature([Users_1.Users, Boards_1.Boards, Columns_1.Columns, Tasks_1.Tasks]),
        ],
        providers: [
            user_repository_1.UserRepository,
            Column_repository_1.ColumnRepository,
            task_repository_1.TaskRepository,
            board_repository_1.BoardRepository
        ],
        exports: [
            user_repository_1.UserRepository,
            Column_repository_1.ColumnRepository,
            task_repository_1.TaskRepository,
            board_repository_1.BoardRepository
        ]
    })
], DbModule);
//# sourceMappingURL=db.module.js.map