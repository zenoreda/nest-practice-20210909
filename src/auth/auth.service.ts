import { Injectable } from '@nestjs/common';
import { UserModel } from 'src/user/user.model';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
  constructor(private userService: UserService) {}

  async validateUser(email: string, password: string): Promise<UserModel> {
    const user = await this.userService.user({
      email,
      password,
    });
    return user;
  }
}
