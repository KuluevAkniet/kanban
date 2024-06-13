import { BadRequestException, ForbiddenException, Injectable, NotFoundException } from "@nestjs/common";
import { UsersService } from "../users/users.service";
import { CreateUserDto } from "../users/dto/create-user.dto";
import { ConfigService } from '@nestjs/config';
import { LoginDto } from "../users/dto/login.dto";
import * as bcrypt from 'bcrypt';
import { Users } from "../../models/Users";
import { JwtService } from "@nestjs/jwt";
import * as process from "node:process";

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UsersService,
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
  ) {}

  async registration(dto: CreateUserDto) {
    const findUser = await  this.userService.findOneByEmail(dto.email)
    if (findUser) {
      throw new NotFoundException('Пользователь с таким логином уже существует');
    }
    const hashPassword = await this.hashPassword(dto.password);
    const newUser = {
      ...dto,
      password: hashPassword.password
    };
    return await this.userService.createUser(newUser)
  }

  async login(dto: LoginDto){
    const user = await this.userService.findByLogin(dto.login)
    if (!user || !bcrypt.compareSync(dto.password, user.password)) {
      throw new BadRequestException({
        success: false,
        error: 'Неверный логин или пароль',
      });
    }
    if(user){
      const token = await this.generateToken(user)
      await this.updateHash(user.id, token.refresh)
      return token
    }else{
      throw new ForbiddenException({message:'Incorrect password'})
    }
  }

  async logOut(userId: number){
    const user = await this.userService.findById(userId)
    if (user) {
      user.refreshToken = null
      await this.userService.updateUser(user.id, user)
      return 'Вы вышли из системы'
    }
  }

  async hashPassword(password: string): Promise<{ password: string }> {
    const encodedPassword = { password: (await bcrypt.hash(password, 10)) as string };
    return encodedPassword;
  }

  async generateToken(user: Users){
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

  async refreshToken(userId : number, rt : string){
    const user = await this.userService.findById(userId)
    if(!user){
      throw new ForbiddenException("Access denied!");
    }
    const rtCompare = await bcrypt.compare(rt, user.refreshToken)
    if(!rtCompare){
      throw new ForbiddenException("Access denied!");
    }
    const tokens = await this.generateToken(user);
    await this.updateHash(user.id, tokens.refresh);
    return tokens;
  }

  async updateHash(id: number, rt: string): Promise<void> {
    const hash = await bcrypt.hash(rt, 5);
    const user = await this.userService.findById(id);
    if (!user) {
      throw new BadRequestException({
        success: false,
        error: 'User not found',
      });
    }
    user.refreshToken = hash;
    await this.userService.updateUser(user.id, user)
  }

}
