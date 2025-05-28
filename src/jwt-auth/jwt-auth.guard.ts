import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { JwtPayload, verify } from 'jsonwebtoken';
import { Observable } from 'rxjs';
import { settings } from 'src/config/settings';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class JwtAuthGuard implements CanActivate {
  constructor(private prisma: PrismaService) {}
  async canActivate(
    context: ExecutionContext,
  ): Promise<boolean>  {
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
  }
}
