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
exports.BoardRepository = void 0;
const common_1 = require("@nestjs/common");
const Boards_1 = require("../../models/Boards");
const typeorm_1 = require("@nestjs/typeorm");
const base_repository_1 = require("./base.repository");
const typeorm_2 = require("typeorm");
let BoardRepository = class BoardRepository extends base_repository_1.BaseRepository {
    constructor(boardRepository) {
        super();
        this.boardRepository = boardRepository;
    }
    async createBoard(data) {
        const board = await this.boardRepository.create(data);
        return await this.boardRepository.save(board);
    }
    async findById(criteria) {
        return await this.boardRepository.findOne(criteria);
    }
    async findAll() {
        return this.boardRepository.find();
    }
    async updateBoard(criteria, data) {
        return await this.boardRepository.update(criteria, data);
    }
    async deleteBoard(id) {
        return await this.boardRepository.delete(id);
    }
};
exports.BoardRepository = BoardRepository;
exports.BoardRepository = BoardRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(Boards_1.Boards)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], BoardRepository);
//# sourceMappingURL=board.repository.js.map