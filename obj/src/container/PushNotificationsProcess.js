"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PushNotificationsProcess = void 0;
const pip_services3_container_nodex_1 = require("pip-services3-container-nodex");
const pip_services3_rpc_nodex_1 = require("pip-services3-rpc-nodex");
const pip_services3_swagger_nodex_1 = require("pip-services3-swagger-nodex");
const PushNotificationsServiceFactory_1 = require("../build/PushNotificationsServiceFactory");
class PushNotificationsProcess extends pip_services3_container_nodex_1.ProcessContainer {
    constructor() {
        super("push_notifications", "Push notifications microservice");
        this._factories.add(new PushNotificationsServiceFactory_1.PushNotificationsServiceFactory);
        this._factories.add(new pip_services3_rpc_nodex_1.DefaultRpcFactory);
        this._factories.add(new pip_services3_swagger_nodex_1.DefaultSwaggerFactory);
    }
}
exports.PushNotificationsProcess = PushNotificationsProcess;
//# sourceMappingURL=PushNotificationsProcess.js.map