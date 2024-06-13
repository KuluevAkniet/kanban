import { Body, Controller, Param, Post, Query } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { CreateUserDto } from "../users/dto/create-user.dto";
import { UsersService } from "../users/users.service";
import { LoginDto } from "../users/dto/login.dto";

@Controller('auth')
export class AuthController {
    constructor(
      private readonly authService: AuthService,
    ) {}

  @Post('registration')
  async registration(@Body() createUserDto: CreateUserDto) {
      return await this.authService.registration(createUserDto)
  }

  @Post('login')
  async login(@Body() dto: LoginDto) {
      return await this.authService.login(dto)
  }

  @Post('logout/:userId')
  async logout(@Query('userId') userId: number) {
      return await this.authService.logOut(userId)
  }

}
