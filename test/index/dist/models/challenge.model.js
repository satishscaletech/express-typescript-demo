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
exports.Challenge = exports.challengeType = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const challenge_videos_model_1 = require("./challenge-videos.model");
const user_video_model_1 = require("./user-video.model");
var challengeType;
(function (challengeType) {
    challengeType["TEAM"] = "team";
    challengeType["SOLO"] = "solo";
    challengeType["BOTH"] = "both";
})(challengeType = exports.challengeType || (exports.challengeType = {}));
let Challenge = class Challenge extends sequelize_typescript_1.Model {
};
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.UUID,
        unique: true,
        defaultValue: sequelize_typescript_1.DataType.UUIDV4,
        primaryKey: true,
    }),
    __metadata("design:type", String)
], Challenge.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING(255),
        allowNull: false,
    }),
    __metadata("design:type", String)
], Challenge.prototype, "title", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING(1000),
        allowNull: true,
        defaultValue: null,
    }),
    __metadata("design:type", String)
], Challenge.prototype, "description", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.ENUM,
        allowNull: false,
        values: Object.values(challengeType),
    }),
    __metadata("design:type", String)
], Challenge.prototype, "challengeType", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.DATE,
        allowNull: false,
    }),
    __metadata("design:type", Date)
], Challenge.prototype, "challengeRegStartAt", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.DATE,
        allowNull: false,
    }),
    __metadata("design:type", Date)
], Challenge.prototype, "challengeRegEndAt", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.DATE,
        allowNull: false,
    }),
    __metadata("design:type", Date)
], Challenge.prototype, "challengeVoteStartAt", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.DATE,
        allowNull: false,
    }),
    __metadata("design:type", Date)
], Challenge.prototype, "challengeVoteEndAt", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.DATE,
        allowNull: false,
    }),
    __metadata("design:type", Date)
], Challenge.prototype, "resultAnnouncedAt", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    }),
    __metadata("design:type", Boolean)
], Challenge.prototype, "isPrivate", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING(255),
    }),
    __metadata("design:type", String)
], Challenge.prototype, "partnerImage", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING(255),
    }),
    __metadata("design:type", String)
], Challenge.prototype, "challengeIcon", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsToMany)(() => user_video_model_1.UserVideo, {
        through: () => challenge_videos_model_1.ChallengeVideos,
    }),
    __metadata("design:type", Array)
], Challenge.prototype, "videos", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => challenge_videos_model_1.ChallengeVideos),
    __metadata("design:type", Array)
], Challenge.prototype, "ChallengeVideos", void 0);
Challenge = __decorate([
    (0, sequelize_typescript_1.Table)({
        tableName: "challenges",
        paranoid: true,
        underscored: true,
        timestamps: true,
    })
], Challenge);
exports.Challenge = Challenge;
//# sourceMappingURL=challenge.model.js.map