"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PushNotificationsHttpServiceV1 = void 0;
const pip_services3_commons_nodex_1 = require("pip-services3-commons-nodex");
const pip_services3_rpc_nodex_1 = require("pip-services3-rpc-nodex");
class PushNotificationsHttpServiceV1 extends pip_services3_rpc_nodex_1.CommandableHttpService {
    constructor() {
        super('v1/push_notifications');
        this._dependencyResolver.put('controller', new pip_services3_commons_nodex_1.Descriptor('service-pushnotifications', 'controller', 'default', '*', '1.0'));
    }
}
exports.PushNotificationsHttpServiceV1 = PushNotificationsHttpServiceV1;
//# sourceMappingURL=PushNotificationsHttpServiceV1.js.map