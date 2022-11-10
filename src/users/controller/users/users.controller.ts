import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateUserDto } from 'src/users/dtos/CreateUser.dto';
import { UsersService } from 'src/users/service/users/users.service';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}
  @Get()
  async getUsers() {
    const users = await this.userService.getUsers();
    if (users.length > 0) return users;
    throw new HttpException('user not found', HttpStatus.NOT_FOUND);
  }
  @Post('signup')
  @UsePipes(new ValidationPipe())
  async signup(@Body() userData: CreateUserDto) {
    const user = await this.userService.createUser(userData);
    if (user) return { msg: 'user created', redirect: '/login' };
    return new HttpException(
      'user with email already exit',
      HttpStatus.BAD_REQUEST,
    );
  }

  @Post('login')
  async login(@Body() userData: CreateUserDto) {
    const user = await this.userService.login(userData);
    if (user.token) return { msg: 'Signed in', token: user.token };
    if (user.err) throw new HttpException(user.err, user.status);
  }

  @Get(':id')
  async getuserById(@Param('id') id: number) {
    const user = await this.userService.getUserById(id);
    if (!user) throw new HttpException('user not found', HttpStatus.NOT_FOUND);
    return user;
  }
  @Delete(':id')
  deleteUser(@Param('id') id: number) {
    return this.userService.DeleteUser(id);
  }
}
