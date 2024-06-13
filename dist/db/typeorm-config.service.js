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
exports.TypeormConfigService = void 0;
const config_1 = require("@nestjs/config");
const typeorm_naming_strategies_1 = require("typeorm-naming-strategies");
const common_1 = require("@nestjs/common");
const path = require("path");
let TypeormConfigService = class TypeormConfigService {
    constructor(configService) {
        this.configService = configService;
    }
    createTypeOrmOptions() {
        return {
            type: 'postgres',
            host: this.configService.get('POSTGRES_HOST'),
            port: this.configService.get('POSTGRES_PORT'),
            username: this.configService.get('POSTGRES_USER'),
            password: this.configService.get('POSTGRES_PASSWORD'),
            database: this.configService.get('POSTGRES_DB'),
            namingStrategy: new typeorm_naming_strategies_1.SnakeNamingStrategy(),
            autoLoadEntities: true,
            synchronize: true,
            migrationsRun: true,
            entities: [path.join(__dirname, './models/*.{.ts,.js}')],
            migrations: [path.join(__dirname, './migrations/*{.ts,.js}')],
            useUTC: true,
        };
    }
};
exports.TypeormConfigService = TypeormConfigService;
exports.TypeormConfigService = TypeormConfigService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], TypeormConfigService);
//# sourceMappingURL=typeorm-config.service.js.map