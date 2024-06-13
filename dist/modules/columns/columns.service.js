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
exports.ColumnsService = void 0;
const common_1 = require("@nestjs/common");
const board_repository_1 = require("../../db/repositories/board.repository");
const Column_repository_1 = require("../../db/repositories/Column.repository");
let ColumnsService = class ColumnsService {
    constructor(boardRepository, columnRepository) {
        this.boardRepository = boardRepository;
        this.columnRepository = columnRepository;
    }
    async createColumn(dto) {
        try {
            const board = await this.boardRepository.findById({
                where: dto.boardId
            });
            if (!board) {
                throw new Error('board not found');
            }
            const newColumn = await this.columnRepository.createColumn({
                ...dto,
                board
            });
            return newColumn;
        }
        catch (e) {
            console.log(e);
        }
    }
    async updateColumn(id, dto) {
        return await this.columnRepository.updateColumn(id, dto);
    }
    async findAll() {
        return await this.columnRepository.findAll();
    }
    async deleteColumn(id) {
        return await this.columnRepository.deleteColumn(id);
    }
};
exports.ColumnsService = ColumnsService;
exports.ColumnsService = ColumnsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [board_repository_1.BoardRepository,
        Column_repository_1.ColumnRepository])
], ColumnsService);
//# sourceMappingURL=columns.service.js.map