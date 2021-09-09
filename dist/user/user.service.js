"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
const user_model_1 = require("./user.model");
let UserService = class UserService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async user(where) {
        const user = await this.prisma.user.findFirst({ where });
        return new user_model_1.UserModel(user);
    }
    async userDetail(where) {
        const user = await this.prisma.user.findUnique({
            where,
            include: { posts: true },
        });
        return new user_model_1.UserDetailModel(user);
    }
    async users() {
        const users = await this.prisma.user.findMany({
            include: {
                posts: true,
            },
        });
        return users.map((user) => new user_model_1.UserModel(user));
    }
    async createUser(data) {
        const user = await this.prisma.user.create({ data });
        return new user_model_1.UserModel(user);
    }
};
UserService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map