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
exports.BoardsService = void 0;
const common_1 = require("@nestjs/common");
const board_repository_1 = require("../../db/repositories/board.repository");
const user_repository_1 = require("../../db/repositories/user.repository");
let BoardsService = class BoardsService {
    constructor(boardRepository, userRepository) {
        this.boardRepository = boardRepository;
        this.userRepository = userRepository;
    }
    async createBoard(dto) {
        try {
            const user = await this.userRepository.findById(dto.userId);
            if (!user) {
                throw new Error('User not found');
            }
            const newBoard = await this.boardRepository.createBoard({
                ...dto,
                owner: user
            });
            return newBoard;
        }
        catch (e) {
            throw new common_1.HttpException(`Not found user`, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async updateBoard(id, dto) {
        return await this.boardRepository.updateBoard(id, dto);
    }
    async getOneBoard(id) {
        return await this.boardRepository.findById(id);
    }
    async getAll() {
        return await this.boardRepository.findAll();
    }
    async deleteBoard(id) {
        return await this.boardRepository.deleteBoard(id);
    }
};
exports.BoardsService = BoardsService;
exports.BoardsService = BoardsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [board_repository_1.BoardRepository,
        user_repository_1.UserRepository])
], BoardsService);
//# sourceMappingURL=boards.service.js.map