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
exports.Battle = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const challenge_model_1 = require("./challenge.model");
const user_video_model_1 = require("./user-video.model");
let Battle = class Battle extends sequelize_typescript_1.Model {
};
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.UUID,
        unique: true,
        defaultValue: sequelize_typescript_1.DataType.UUIDV4,
        primaryKey: true,
    }),
    __metadata("design:type", String)
], Battle.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => challenge_model_1.Challenge),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.UUID,
        allowNull: true,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    }),
    __metadata("design:type", String)
], Battle.prototype, "challengeId", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => user_video_model_1.UserVideo),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.UUID,
        allowNull: true,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    }),
    __metadata("design:type", String)
], Battle.prototype, "challengeVideoId1", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => user_video_model_1.UserVideo),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.UUID,
        allowNull: true,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    }),
    __metadata("design:type", String)
], Battle.prototype, "challengeVideoId2", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => challenge_model_1.Challenge, {
        constraints: true,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    }),
    __metadata("design:type", challenge_model_1.Challenge)
], Battle.prototype, "challenge", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => user_video_model_1.UserVideo, {
        constraints: true,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    }),
    __metadata("design:type", user_video_model_1.UserVideo)
], Battle.prototype, "userVideo", void 0);
Battle = __decorate([
    (0, sequelize_typescript_1.Table)({
        tableName: 'battles',
        paranoid: true,
        underscored: true,
        timestamps: true,
    })
], Battle);
exports.Battle = Battle;
//# sourceMappingURL=battle.model.js.map