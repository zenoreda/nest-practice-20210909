import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { UserDetailModel, UserModel } from './user.model';
export declare class UserService {
    private prisma;
    constructor(prisma: PrismaService);
    user(where: Prisma.UserWhereInput): Promise<UserModel>;
    userDetail(where: Prisma.UserWhereUniqueInput): Promise<UserDetailModel>;
    users(): Promise<UserModel[]>;
    createUser(data: Prisma.UserCreateInput): Promise<UserModel>;
}
