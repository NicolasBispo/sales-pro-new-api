import { Controller, Post, Body, Res, Get, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto, LoginResponseDto } from './dto/login.dto';
import { Response } from 'express';
import { User } from 'src/decorators/user.decorator';
import { User as PrismaUser } from 'generated/prisma';
import { JwtAuthGuard } from 'src/jwt-auth/jwt-auth.guard';
import { MeDto } from './dto/me.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  async signup(@Body() registerDto: RegisterDto, @Res({ passthrough: true }) res: Response) {
    const user = await this.authService.register(registerDto);
    const accessToken = this.authService.generateAccessToken(user);
    res.header('access-token', accessToken);
    return new LoginResponseDto(user);
  }

  @Post('login')
  async login(@Body() loginDto: LoginDto, @Res({ passthrough: true }) res: Response) {
    const {user, accessToken} = await this.authService.login(loginDto);
    res.header('access-token', accessToken);
    return new LoginResponseDto(user);
  }

  @Get('me')
  @UseGuards(JwtAuthGuard)
  async me(@User() user: PrismaUser) {
    return new MeDto(user);
  }
}
