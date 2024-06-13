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
exports.Tasks = void 0;
const typeorm_1 = require("typeorm");
const positionEnum_1 = require("../enums/positionEnum");
const Base_1 = require("./Base");
const Columns_1 = require("./Columns");
let Tasks = class Tasks extends Base_1.Base {
};
exports.Tasks = Tasks;
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Tasks.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Tasks.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Tasks.prototype, "position", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Columns_1.Columns, (columns) => columns.tasks, {
        cascade: true
    }),
    __metadata("design:type", Columns_1.Columns)
], Tasks.prototype, "column", void 0);
exports.Tasks = Tasks = __decorate([
    (0, typeorm_1.Entity)()
], Tasks);
//# sourceMappingURL=Tasks.js.map