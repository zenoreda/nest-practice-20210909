import { Body, Controller, Post } from '@nestjs/common';
import { UserModel } from 'src/user/user.model';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/login')
  login(@Body() loginDto: LoginDto): Promise<UserModel> {
    return this.authService.validateUser(loginDto.email, loginDto.password);
  }
}
