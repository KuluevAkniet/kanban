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
exports.BoardsController = void 0;
const boards_service_1 = require("./boards.service");
const common_1 = require("@nestjs/common");
const board_dto_1 = require("./board.dto");
const update_board_dto_1 = require("./update.board.dto");
let BoardsController = class BoardsController {
    constructor(boardService) {
        this.boardService = boardService;
    }
    async createBoard(dto) {
        return await this.boardService.createBoard(dto);
    }
    async updateBoard(id, dto) {
        return await this.boardService.updateBoard(id, dto);
    }
    async getOneBoard(id) {
        return await this.boardService.getOneBoard(id);
    }
    async getAllBoards() {
        return await this.boardService.getAll();
    }
    async deleteBoard(id) {
        return await this.boardService.deleteBoard(id);
    }
};
exports.BoardsController = BoardsController;
__decorate([
    (0, common_1.Post)('create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [board_dto_1.CreateBoardDto]),
    __metadata("design:returntype", Promise)
], BoardsController.prototype, "createBoard", null);
__decorate([
    (0, common_1.Patch)('update/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_board_dto_1.UpdateBoardDto]),
    __metadata("design:returntype", Promise)
], BoardsController.prototype, "updateBoard", null);
__decorate([
    (0, common_1.Get)('get/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], BoardsController.prototype, "getOneBoard", null);
__decorate([
    (0, common_1.Get)("all"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BoardsController.prototype, "getAllBoards", null);
__decorate([
    (0, common_1.Delete)('delete/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], BoardsController.prototype, "deleteBoard", null);
exports.BoardsController = BoardsController = __decorate([
    (0, common_1.Controller)('boards'),
    __metadata("design:paramtypes", [boards_service_1.BoardsService])
], BoardsController);
//# sourceMappingURL=boards.controller.js.map