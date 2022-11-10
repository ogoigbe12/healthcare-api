import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersController } from './controller/users/users.controller';
import { UsersService } from './service/users/users.service';
import { JwtModule } from '@nestjs/jwt';

import { User, UserSchema } from '../users/Schema/user.schema';
import { UserMiddleware } from './middleware/user/user.middleware';
@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    JwtModule.register({
      secret: 'process.env.SECRET',
      signOptions: { expiresIn: '7d' },
    }),
  ],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(UserMiddleware).forRoutes('users');
    // throw new Error('Method not implemented.');
  }
}
