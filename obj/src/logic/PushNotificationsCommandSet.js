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
exports.PushNotificationsCommandSet = void 0;
const pip_services3_commons_nodex_1 = require("pip-services3-commons-nodex");
const pip_services3_commons_nodex_2 = require("pip-services3-commons-nodex");
const pip_services3_commons_nodex_3 = require("pip-services3-commons-nodex");
const pip_services3_commons_nodex_4 = require("pip-services3-commons-nodex");
const NotificationV1Schema_1 = require("../data/version1/NotificationV1Schema");
class PushNotificationsCommandSet extends pip_services3_commons_nodex_1.CommandSet {
    constructor(logic) {
        super();
        this._logic = logic;
        // Register commands to the database
        this.addCommand(this.makeSendCommand());
        this.addCommand(this.makeSendManyCommand());
        this.addCommand(this.makeBroadcastCommand());
        this.addCommand(this.makeBroadcastManyCommand());
    }
    makeSendCommand() {
        return new pip_services3_commons_nodex_2.Command("send", new pip_services3_commons_nodex_3.ObjectSchema(true)
            .withRequiredProperty('notification', new NotificationV1Schema_1.NotificationV1Schema()), (correlationId, args) => __awaiter(this, void 0, void 0, function* () {
            let notification = args.get("notification");
            yield this._logic.send(correlationId, notification);
        }));
    }
    makeSendManyCommand() {
        return new pip_services3_commons_nodex_2.Command("send_many", new pip_services3_commons_nodex_3.ObjectSchema(true)
            .withRequiredProperty('notifications', new pip_services3_commons_nodex_4.ArraySchema(new NotificationV1Schema_1.NotificationV1Schema())), (correlationId, args) => __awaiter(this, void 0, void 0, function* () {
            let notifications = args.get("notifications");
            yield this._logic.sendMany(correlationId, notifications);
        }));
    }
    makeBroadcastCommand() {
        return new pip_services3_commons_nodex_2.Command("broadcast", new pip_services3_commons_nodex_3.ObjectSchema(true)
            .withRequiredProperty('notification', new NotificationV1Schema_1.NotificationV1Schema()), (correlationId, args) => __awaiter(this, void 0, void 0, function* () {
            let notification = args.get("notification");
            yield this._logic.broadcast(correlationId, notification);
        }));
    }
    makeBroadcastManyCommand() {
        return new pip_services3_commons_nodex_2.Command("broadcast_many", new pip_services3_commons_nodex_3.ObjectSchema(true)
            .withRequiredProperty('notifications', new pip_services3_commons_nodex_4.ArraySchema(new NotificationV1Schema_1.NotificationV1Schema())), (correlationId, args) => __awaiter(this, void 0, void 0, function* () {
            let notifications = args.get("notifications");
            yield this._logic.broadcastMany(correlationId, notifications);
        }));
    }
}
exports.PushNotificationsCommandSet = PushNotificationsCommandSet;
//# sourceMappingURL=PushNotificationsCommandSet.js.map