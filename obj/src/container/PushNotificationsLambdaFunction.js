"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = exports.PushNotificationsLambdaFunction = void 0;
const pip_services3_commons_nodex_1 = require("pip-services3-commons-nodex");
const pip_services3_aws_nodex_1 = require("pip-services3-aws-nodex");
const PushNotificationsServiceFactory_1 = require("../build/PushNotificationsServiceFactory");
class PushNotificationsLambdaFunction extends pip_services3_aws_nodex_1.CommandableLambdaFunction {
    constructor() {
        super("push_notifications", "Push notifications function");
        this._dependencyResolver.put('controller', new pip_services3_commons_nodex_1.Descriptor('service-pushnotifications', 'controller', 'default', '*', '*'));
        this._factories.add(new PushNotificationsServiceFactory_1.PushNotificationsServiceFactory());
    }
}
exports.PushNotificationsLambdaFunction = PushNotificationsLambdaFunction;
exports.handler = new PushNotificationsLambdaFunction().getHandler();
//# sourceMappingURL=PushNotificationsLambdaFunction.js.map