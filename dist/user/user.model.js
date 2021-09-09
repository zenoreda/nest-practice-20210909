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
exports.UserDetailModel = exports.UserModel = void 0;
const class_transformer_1 = require("class-transformer");
let UserModel = class UserModel {
    constructor(user) {
        this.user = user;
    }
    get id() {
        return this.user.id;
    }
    get name() {
        return this.user.name;
    }
};
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], UserModel.prototype, "id", null);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], UserModel.prototype, "name", null);
UserModel = __decorate([
    (0, class_transformer_1.Exclude)(),
    __metadata("design:paramtypes", [Object])
], UserModel);
exports.UserModel = UserModel;
let UserDetailModel = class UserDetailModel extends UserModel {
    constructor(user) {
        super(user);
        this.user = user;
    }
    get postCount() {
        return this.user.posts.length;
    }
};
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], UserDetailModel.prototype, "postCount", null);
UserDetailModel = __decorate([
    (0, class_transformer_1.Exclude)(),
    __metadata("design:paramtypes", [Object])
], UserDetailModel);
exports.UserDetailModel = UserDetailModel;
//# sourceMappingURL=user.model.js.map