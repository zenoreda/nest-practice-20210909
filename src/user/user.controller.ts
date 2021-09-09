import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UserDetailModel, UserModel } from './user.model';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Get('/')
  async getUsers(): Promise<UserModel[]> {
    return await this.userService.users();
  }

  @Get('/:id')
  async getUserById(@Param('id') id: string): Promise<UserModel> {
    return await this.userService.user({ id: Number(id) });
  }

  @Get('/:id/detail')
  async getUserDetailById(@Param('id') id: string): Promise<UserDetailModel> {
    return await this.userService.userDetail({ id: Number(id) });
  }

  @Post('/')
  async createUser(@Body() createUserDto: CreateUserDto) {
    return await this.userService.createUser(createUserDto);
  }
}
