import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { JsonWebTokenError, TokenExpiredError, JwtPayload, verify } from 'jsonwebtoken';
import { Observable } from 'rxjs';
import { settings } from 'src/config/settings';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class JwtAuthGuard implements CanActivate {
  constructor(private prisma: PrismaService) {}
  async canActivate(
    context: ExecutionContext,
  ): Promise<boolean>  {
    try {
      const request = context.switchToHttp().getRequest();
    const token = request.headers['access-token'];
    if (!token) {
      return false;
    }
    const decoded = verify(token, settings.jwt.secret) as JwtPayload;
    const user = await this.prisma.user.findUnique({
      where: {
        id: decoded.userId,
      },
    });
    if (!user) {
      return false;
    }
      request.user = user;
      return true;
    } catch (error) {
      if (error instanceof JsonWebTokenError || error instanceof TokenExpiredError) {
        throw new UnauthorizedException('Invalid or expired token');
      }
      throw new UnauthorizedException('Invalid or expired token');
    }
  }
}
