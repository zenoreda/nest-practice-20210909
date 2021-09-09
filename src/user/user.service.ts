import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { UserDetailModel, UserModel } from './user.model';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async user(where: Prisma.UserWhereInput): Promise<UserModel> {
    const user = await this.prisma.user.findFirst({ where });
    return new UserModel(user);
  }

  async userDetail(
    where: Prisma.UserWhereUniqueInput,
  ): Promise<UserDetailModel> {
    const user = await this.prisma.user.findUnique({
      where,
      include: { posts: true },
    });
    return new UserDetailModel(user);
  }

  async users(): Promise<UserModel[]> {
    const users = await this.prisma.user.findMany({
      include: {
        posts: true,
      },
    });
    return users.map((user) => new UserModel(user));
  }

  async createUser(data: Prisma.UserCreateInput): Promise<UserModel> {
    const user = await this.prisma.user.create({ data });
    return new UserModel(user);
  }
}
