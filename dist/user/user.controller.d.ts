import { CreateUserDto } from './dto/create-user.dto';
import { UserDetailModel, UserModel } from './user.model';
import { UserService } from './user.service';
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    getUsers(): Promise<UserModel[]>;
    getUserById(id: string): Promise<UserModel>;
    getUserDetailById(id: string): Promise<UserDetailModel>;
    createUser(createUserDto: CreateUserDto): Promise<UserModel>;
}
