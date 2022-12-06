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
exports.UserSession = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const index_1 = require("./index");
let UserSession = class UserSession extends sequelize_typescript_1.Model {
};
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.UUID,
        unique: true,
        defaultValue: sequelize_typescript_1.DataType.UUIDV4,
        primaryKey: true,
    }),
    __metadata("design:type", String)
], UserSession.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => index_1.User),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.UUID,
        allowNull: true,
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
    }),
    __metadata("design:type", String)
], UserSession.prototype, "userId", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING(),
        allowNull: true,
    }),
    __metadata("design:type", String)
], UserSession.prototype, "jwtToken", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => index_1.User, {
        constraints: true,
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
    }),
    __metadata("design:type", index_1.User)
], UserSession.prototype, "user", void 0);
UserSession = __decorate([
    (0, sequelize_typescript_1.Table)({
        tableName: "user_sessions",
        paranoid: true,
        underscored: true,
        timestamps: true,
    })
], UserSession);
exports.UserSession = UserSession;
//# sourceMappingURL=user-session.model.js.map