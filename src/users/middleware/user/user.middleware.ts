import {
  BadRequestException,
  Injectable,
  NestMiddleware,
} from '@nestjs/common';
import { NextFunction } from 'express';

@Injectable()
export class UserMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    if (req.headers['api-token'] === 'my-token') {
      throw new BadRequestException('the token does not match');
    }
    next();
  }
}
