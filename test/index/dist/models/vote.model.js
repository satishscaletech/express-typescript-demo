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
exports.Vote = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const _1 = require("./");
let Vote = class Vote extends sequelize_typescript_1.Model {
};
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.UUID,
        unique: true,
        defaultValue: sequelize_typescript_1.DataType.UUIDV4,
        primaryKey: true,
    }),
    __metadata("design:type", String)
], Vote.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => _1.Challenge),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.UUID,
        allowNull: false,
    }),
    __metadata("design:type", String)
], Vote.prototype, "challengeId", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => _1.Battle),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.UUID,
        allowNull: false,
    }),
    __metadata("design:type", String)
], Vote.prototype, "battleId", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => _1.ChallengeVideos),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.UUID,
        allowNull: false
    }),
    __metadata("design:type", String)
], Vote.prototype, "winnerChallengeVideoId", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => _1.ChallengeVideos),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.UUID,
        allowNull: false
    }),
    __metadata("design:type", String)
], Vote.prototype, "loserChallengeVideoId", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => _1.User),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.UUID,
        allowNull: false,
    }),
    __metadata("design:type", String)
], Vote.prototype, "votedBy", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => _1.User, {
        constraints: true,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    }),
    __metadata("design:type", _1.User)
], Vote.prototype, "user", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => _1.Challenge, {
        constraints: true,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    }),
    __metadata("design:type", _1.Challenge)
], Vote.prototype, "challenge", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => _1.Battle, {
        constraints: true,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    }),
    __metadata("design:type", _1.Battle)
], Vote.prototype, "battle", void 0);
Vote = __decorate([
    (0, sequelize_typescript_1.Table)({
        tableName: 'votes',
        paranoid: true,
        underscored: true,
        timestamps: true,
    })
], Vote);
exports.Vote = Vote;
//# sourceMappingURL=vote.model.js.map