import { Post, User } from '@prisma/client';
export declare class UserModel {
    protected user: User;
    constructor(user: User);
    get id(): number;
    get name(): string;
}
export declare class UserDetailModel extends UserModel {
    protected user: User & {
        posts: Post[];
    };
    constructor(user: User & {
        posts: Post[];
    });
    get postCount(): number;
}
