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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("../users/users.service");
const config_1 = require("@nestjs/config");
const bcrypt = require("bcrypt");
const jwt_1 = require("@nestjs/jwt");
const process = require("node:process");
let AuthService = class AuthService {
    constructor(userService, jwtService, configService) {
        this.userService = userService;
        this.jwtService = jwtService;
        this.configService = configService;
    }
    async registration(dto) {
        const findUser = await this.userService.findOneByEmail(dto.email);
        if (findUser) {
            throw new common_1.NotFoundException('Пользователь с таким логином уже существует');
        }
        const hashPassword = await this.hashPassword(dto.password);
        const newUser = {
            ...dto,
            password: hashPassword.password
        };
        return await this.userService.createUser(newUser);
    }
    async login(dto) {
        const user = await this.userService.findByLogin(dto.login);
        if (!user || !bcrypt.compareSync(dto.password, user.password)) {
            throw new common_1.BadRequestException({
                success: false,
                error: 'Неверный логин или пароль',
            });
        }
        if (user) {
            const token = await this.generateToken(user);
            await this.updateHash(user.id, token.refresh);
            return token;
        }
        else {
            throw new common_1.ForbiddenException({ message: 'Incorrect password' });
        }
    }
    async logOut(userId) {
        const user = await this.userService.findById(userId);
        if (user) {
            user.refreshToken = null;
            await this.userService.updateUser(user.id, user);
            return 'Вы вышли из системы';
        }
    }
    async hashPassword(password) {
        const encodedPassword = { password: (await bcrypt.hash(password, 10)) };
        return encodedPassword;
    }
    async generateToken(user) {
        const accessPayload = {
            login: user.login,
            adminId: user.id,
            type: 'accessToken',
        };
        const refreshPayload = {
            login: user.login,
            userId: user.id,
            type: 'refreshToken',
        };
        const accessToken = this.jwtService.sign(accessPayload, {
            secret: this.configService.get('JWT_SECRET'),
            expiresIn: this.configService.get('JWT_EXPIRES_IN'),
        });
        const refreshToken = this.jwtService.sign(refreshPayload, {
            secret: process.env.JWT_SECRET,
            expiresIn: process.env.JWT_EXPIRES_IN,
        });
        return {
            access: accessToken,
            refresh: refreshToken
        };
    }
    async refreshToken(userId, rt) {
        const user = await this.userService.findById(userId);
        if (!user) {
            throw new common_1.ForbiddenException("Access denied!");
        }
        const rtCompare = await bcrypt.compare(rt, user.refreshToken);
        if (!rtCompare) {
            throw new common_1.ForbiddenException("Access denied!");
        }
        const tokens = await this.generateToken(user);
        await this.updateHash(user.id, tokens.refresh);
        return tokens;
    }
    async updateHash(id, rt) {
        const hash = await bcrypt.hash(rt, 5);
        const user = await this.userService.findById(id);
        if (!user) {
            throw new common_1.BadRequestException({
                success: false,
                error: 'User not found',
            });
        }
        user.refreshToken = hash;
        await this.userService.updateUser(user.id, user);
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        jwt_1.JwtService,
        config_1.ConfigService])
], AuthService);
//# sourceMappingURL=auth.service.js.map