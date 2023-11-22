import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class DenemeMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    console.log('Middleware is working btw');

    next();
  }
}
