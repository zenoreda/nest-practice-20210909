import { Post, User } from '@prisma/client';
import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class UserModel {
  constructor(protected user: User) {}

  @Expose()
  get id() {
    return this.user.id;
  }

  @Expose()
  get name() {
    return this.user.name;
  }
}

@Exclude()
export class UserDetailModel extends UserModel {
  constructor(protected user: User & { posts: Post[] }) {
    super(user);
  }

  @Expose()
  get postCount() {
    return this.user.posts.length;
  }
}
