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
exports.Boards = void 0;
const typeorm_1 = require("typeorm");
const Base_1 = require("./Base");
const Users_1 = require("./Users");
const Columns_1 = require("./Columns");
let Boards = class Boards extends Base_1.Base {
};
exports.Boards = Boards;
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Boards.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: '' }),
    __metadata("design:type", String)
], Boards.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Users_1.Users, (user) => user.boards, {
        cascade: true
    }),
    __metadata("design:type", Users_1.Users)
], Boards.prototype, "owner", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Columns_1.Columns, (columns) => columns.board),
    __metadata("design:type", Array)
], Boards.prototype, "column", void 0);
exports.Boards = Boards = __decorate([
    (0, typeorm_1.Entity)('boards')
], Boards);
//# sourceMappingURL=Boards.js.map