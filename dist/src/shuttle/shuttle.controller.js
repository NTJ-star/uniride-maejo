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
exports.ShuttleController = void 0;
const common_1 = require("@nestjs/common");
let ShuttleController = class ShuttleController {
    getSchedule() {
        return {
            status: 'success',
            message: 'ดึงข้อมูลตารางเดินรถสำเร็จ',
            data: [
                { id: 1, route: 'สาย A: หอพัก 9 มล. -> อาคารเรียนรวม', time: '08:30 น.', status: 'กำลังให้บริการ' },
                { id: 2, route: 'สาย B: หอพักชาย -> โรงอาหารกลาง', time: '08:45 น.', status: 'จอดรอที่จุดจอด' }
            ]
        };
    }
};
exports.ShuttleController = ShuttleController;
__decorate([
    (0, common_1.Get)('schedule'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ShuttleController.prototype, "getSchedule", null);
exports.ShuttleController = ShuttleController = __decorate([
    (0, common_1.Controller)('shuttle')
], ShuttleController);
//# sourceMappingURL=shuttle.controller.js.map