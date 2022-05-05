"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PushNotificationsSocketIOConnector = void 0;
class PushNotificationsSocketIOConnector {
    constructor() {
        this._opened = false;
    }
    isOpen() {
        return this._opened;
    }
    open(correlationId) {
        return __awaiter(this, void 0, void 0, function* () {
            this._opened = true;
        });
    }
    close(correlationId) {
        return __awaiter(this, void 0, void 0, function* () {
            this._opened = false;
        });
    }
    send(correlationId, notification) {
        return __awaiter(this, void 0, void 0, function* () {
            return;
        });
    }
    broadcast(correlationId, notification) {
        return __awaiter(this, void 0, void 0, function* () {
            return;
        });
    }
}
exports.PushNotificationsSocketIOConnector = PushNotificationsSocketIOConnector;
//# sourceMappingURL=PushNotificationsSocketIOConnector.js.map