import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dtos/CreateUser.dto';
import { User, UserDocument } from 'src/users/Schema/user.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    private jwtService: JwtService,
  ) {}
  async createUser(userDetails: CreateUserDto) {
    const findEmail = await this.userModel.findOne({
      email: userDetails.email,
    });
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(userDetails.password, salt);
    userDetails.password = hashedPassword;
    if (!findEmail) {
      const dataToSave = new this.userModel(userDetails);
      return await dataToSave.save();
    }
  }

  async getUsers() {
    return await this.userModel.find({});
  }

  async getUserById(id: number): Promise<User> {
    return await this.userModel.findOne({ _id: id });
  }

  async login(userDetails: CreateUserDto) {
    const user = await this.userModel.findOne({ email: userDetails.email });
    console.log(user);
    if (user) {
      const checkPassword = await bcrypt.compare(
        userDetails.password,
        user.password,
      );
      if (checkPassword) {
        const token = this.jwtService.sign({
          id: user.id,
          email: user.email,
        });
        return { token: token };
      }
      return { err: 'incorrect password', status: HttpStatus.BAD_REQUEST };
    }
    return { err: 'user with email not found', status: HttpStatus.NOT_FOUND };
  }

  async DeleteUser(id: number) {
    const findUser = await this.userModel.findById({ _id: id });
    if (!findUser)
      return new HttpException(
        'user with id does not exits',
        HttpStatus.NOT_FOUND,
      );
    return this.userModel.deleteOne({ _id: id });
  }
}
