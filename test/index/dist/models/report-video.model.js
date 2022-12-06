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
exports.ReportVideo = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const index_1 = require("./index");
let ReportVideo = class ReportVideo extends sequelize_typescript_1.Model {
};
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.UUID,
        unique: true,
        defaultValue: sequelize_typescript_1.DataType.UUIDV4,
        primaryKey: true,
    }),
    __metadata("design:type", String)
], ReportVideo.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => index_1.User),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.UUID,
        allowNull: false,
    }),
    __metadata("design:type", String)
], ReportVideo.prototype, "userId", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => index_1.UserVideo),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.UUID,
        allowNull: true,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    }),
    __metadata("design:type", String)
], ReportVideo.prototype, "videoId", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => index_1.Challenge),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.UUID,
        allowNull: false,
    }),
    __metadata("design:type", String)
], ReportVideo.prototype, "challengeId", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => index_1.User, {
        constraints: true,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    }),
    __metadata("design:type", index_1.User)
], ReportVideo.prototype, "user", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => index_1.UserVideo, {
        constraints: true,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    }),
    __metadata("design:type", index_1.UserVideo)
], ReportVideo.prototype, "userVideo", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => index_1.Challenge, {
        constraints: true,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    }),
    __metadata("design:type", index_1.Challenge)
], ReportVideo.prototype, "challenge", void 0);
ReportVideo = __decorate([
    (0, sequelize_typescript_1.Table)({
        tableName: 'report_video',
        paranoid: true,
        underscored: true,
        timestamps: true,
    })
], ReportVideo);
exports.ReportVideo = ReportVideo;
//# sourceMappingURL=report-video.model.js.map