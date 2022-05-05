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
exports.PushNotificationsController = void 0;
const pip_services3_commons_nodex_1 = require("pip-services3-commons-nodex");
const pip_services3_commons_nodex_2 = require("pip-services3-commons-nodex");
const PushNotificationsCommandSet_1 = require("./PushNotificationsCommandSet");
class PushNotificationsController {
    constructor() {
        this._dependencyResolver = new pip_services3_commons_nodex_2.DependencyResolver(PushNotificationsController._defaultConfig);
    }
    configure(config) {
        this._dependencyResolver.configure(config);
    }
    setReferences(references) {
        this._dependencyResolver.setReferences(references);
        this._connectors = this._dependencyResolver.getOptional('connector');
    }
    getCommandSet() {
        if (this._commandSet == null)
            this._commandSet = new PushNotificationsCommandSet_1.PushNotificationsCommandSet(this);
        return this._commandSet;
    }
    send(correlationId, notification) {
        return __awaiter(this, void 0, void 0, function* () {
            if (notification == null) {
                return;
            }
            let tasks = [];
            for (let connector of this._connectors)
                tasks.push(connector.send(correlationId, notification));
            yield Promise.all(tasks);
        });
    }
    sendMany(correlationId, notifications) {
        return __awaiter(this, void 0, void 0, function* () {
            if (notifications == null || notifications.length == 0) {
                return;
            }
            let tasks = [];
            for (let connector of this._connectors) {
                for (let notification of notifications) {
                    tasks.push(connector.send(correlationId, notification));
                }
            }
            yield Promise.all(tasks);
        });
    }
    broadcast(correlationId, notification) {
        return __awaiter(this, void 0, void 0, function* () {
            if (notification == null) {
                return;
            }
            let tasks = [];
            for (let connector of this._connectors)
                tasks.push(connector.broadcast(correlationId, notification));
            yield Promise.all(tasks);
        });
    }
    broadcastMany(correlationId, notifications) {
        return __awaiter(this, void 0, void 0, function* () {
            if (notifications == null || notifications.length == 0) {
                return;
            }
            let tasks = [];
            for (let connector of this._connectors) {
                for (let notification of notifications) {
                    tasks.push(connector.broadcast(correlationId, notification));
                }
            }
            yield Promise.all(tasks);
        });
    }
}
exports.PushNotificationsController = PushNotificationsController;
PushNotificationsController._defaultConfig = pip_services3_commons_nodex_1.ConfigParams.fromTuples('dependencies.connector', 'service-pushnotifications:connector:*:*:1.0');
//# sourceMappingURL=PushNotificationsController.js.map