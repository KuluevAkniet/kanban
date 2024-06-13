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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColumnsController = void 0;
const common_1 = require("@nestjs/common");
const columns_service_1 = require("./columns.service");
const create_column_dto_1 = require("./dto/create-column.dto");
const update_column_dto_1 = require("./dto/update-column.dto");
let ColumnsController = class ColumnsController {
    constructor(columnsService) {
        this.columnsService = columnsService;
    }
    async createColumn(dto) {
        return await this.columnsService.createColumn(dto);
    }
    async updateColumn(id, dto) {
        return await this.columnsService.updateColumn(id, dto);
    }
    async findAll() {
        return await this.columnsService.findAll();
    }
    async deleteColumn(id) {
        return await this.columnsService.deleteColumn(id);
    }
};
exports.ColumnsController = ColumnsController;
__decorate([
    (0, common_1.Post)('create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_column_dto_1.CreateColumnDto]),
    __metadata("design:returntype", Promise)
], ColumnsController.prototype, "createColumn", null);
__decorate([
    (0, common_1.Patch)('update'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_column_dto_1.UpdateColumnDto]),
    __metadata("design:returntype", Promise)
], ColumnsController.prototype, "updateColumn", null);
__decorate([
    (0, common_1.Get)('findAll'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ColumnsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Delete)('deleteColumn'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ColumnsController.prototype, "deleteColumn", null);
exports.ColumnsController = ColumnsController = __decorate([
    (0, common_1.Controller)('columns'),
    __metadata("design:paramtypes", [columns_service_1.ColumnsService])
], ColumnsController);
//# sourceMappingURL=columns.controller.js.map